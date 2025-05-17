import Web3 from 'web3'
import { HARMONIZE, HARMONIZE_ADDRESS } from '../abi/Harmonize'
import Owner from '../models/owner'
import NFT from '../models/nft'
import { logErrorWithTime, logWithTime } from '../util/controllerUtil'
import { addMessageTokenId } from '../controllers/SocialServiceController'
export const TX_STATUS = {
  NONE: 0,
  STARTED: 1,
  COMPLETED: 2,
  CONFIRMED: 3,
  FAILED: 4,
}

/* Using Infura because it is the default node provider for Metamask */
export const WSS_PROVIDER_URL = `${process.env.REACT_APP_TEST === 'true'
  ? process.env.SEPOLIA_WSS_PROVIDER_URL
  : process.env.WSS_PROVIDER_URL
  }${process.env.PROJECT_ID}`
export const GAS_PRICE = 10 //Minimum realistic gas price
export const GAS_PRICE_IN_WEI = 100000000000

/**
 *Infura will close after 1 hour idle unless we use keepalive. See:
 https://github.com/ChainSafe/web3.js/issues/1354#issuecomment-638098138
 * @returns Web3 instance for the configured WSS Provider
 */
export const getWssProvider = () => {
  return new Web3(new Web3.providers.WebsocketProvider(WSS_PROVIDER_URL), {
    clientConfig: {
      keepalive: true,
      keepaliveInterval: 60000,
    },
    reconnect: {
      auto: true,
      delay: 1000,
      maxAttempts: 10,
    },
  })
}

/**
 * Add a Payment to the list of payments in the Owner specified by the to address.
 * The Owner is created if it does not exist.
 * @param {*} event
 */
const savePayment = async (event) => {
  const { transactionHash: txHash, from, returnValues } = event
  const { tokenId, to, amount, paymentType } = returnValues
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }
  const payment = { from, tokenId, amount, txHash, paymentType }
  try {
    const owner = await Owner.findOneAndUpdate(
      { address: to },
      { $push: { payments: payment } },
      options
    )
    if (!owner) {
      logErrorWithTime(`savePayment update FAILED for owner ${to}`, error)
    }
    //logWithTime(`savePayment updated ${to}`, updatedOwner)
  } catch (error) {
    logErrorWithTime(`savePayment FAILED for ${to}`, error)
  }
}

/**
 * Save the ShareEvent to the Owner specified by the sender address.
 * The Owner is created if it does not exist.
 *
 * For eventType 1 (a partner is offering shares for sale), we also update the offer price
 * @param {*} event
 */
const saveShareEvent = async (event) => {
  const { transactionHash: txHash, returnValues } = event
  const { sender, eventType, tokenOwner, tokenId, numShares, pricePerShare } =
    returnValues
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }
  const shareEvent = {
    eventType,
    tokenOwner,
    tokenId,
    numShares,
    pricePerShare,
    txHash,
  }
  try {
    const owner = await Owner.findByIdAndUpdate(
      { address: sender },
      { $push: { shares: shareEvent } },
      options
    )
    if (!owner) {
      logErrorWithTime(`saveShareEvent FAILED unable to update owner ${sender} for ${tokenId}`, error)
    } else if (eventType == 1) {
      const nft = await NFT.findOneAndDelete({ tokenId }, { offerPrice: pricePerShare })
      if (!nft) {
        logErrorWithTime()`Unable to set offer price ${pricePerShare} for ${tokenId}: ${JSON.stringify(error)}`
      }
    }

  } catch (error) {
    logErrorWithTime(`saveShareEvent FAILED for ${tokenId}`, error)
  }
}

/**
 *Set the new price for a token. The price in the event is in wei. This is converted
 to Gwei for storing in the nft document.
 * @param {*} event
 */
const setPrice = async (event) => {
  const { returnValues } = event
  const { tokenId, owner, price } = returnValues
  logWithTime(`setPrice token ${tokenId} price ${price} owner ${owner}`)
  try {
    const web3 = getWssProvider()
    const priceInGwei = web3.utils.fromWei(price, 'gwei')
    const nft = await NFT.findOneAndUpdate({ tokenId }, { price: `${priceInGwei}` })
    if (!nft) {
      logErrorWithTime(`setPrice FAILED to update NFT ${tokenId} with price ${price}`, error)
    }
  } catch (error) {
    logErrorWithTime('setPrice FAILED', error)
  }
}

/**
 * If there is not an Owner with ownerAddress,
 * the Owner is created with a (Harmonize) user of the creatorUserId in the nft document.
 * If there is an Owner, no changes are made to it. The (new or existing Owner) is set 
 * as the owner field of the nft document. 
 * 
 * If there is not an Owner with ownerAddress, and
 * there is no nft for tokenId, the error is logged, and a new Owner without a user
 * is created.
 * @param {*} tokenId 
 * @param {*} ownerAddress 
 */
const createOrUpdateOwner = async (tokenId, ownerAddress) => {
  let owner = await Owner.findOne({ address: ownerAddress }).lean()
  if (!owner) {
    const nft = await NFT.findOne({ tokenId }).lean()
    if (nft) {
      const { creatorUserId } = nft
      owner = await Owner.create({ address: ownerAddress, user: creatorUserId })
    } else {
      logErrorWithTime(`WARNING: No NFT found for ${tokenId}, owner still created for ${ownerAddress}`)
      await Owner.create({ address: ownerAddress })
      owner = undefined
    }
  }
  if (owner) {
    await NFT.findOneAndUpdate({ tokenId }, { owner })
  }
}

/**
 * Given the single tokenId contained in event.returnValues, find the associated NFT,
 * then update it with the to address and txHash. If the NFT cannot be found then there may be
 * an orphaned NFT, meaning an NFT was created but no matching token. Orphaned Assets can be found
 * by searching for those with a tokenId but txStatus is STARTED.
 * 
 * In the event, "address" is the contract address. The owner of the
 * token is the "to" field in the returnValues. The "from" field for a mint is 0.
 * 
 * Minting
 * =======
 * 
 * When a token is minted, if there is not an Owner with the "to" address,
 * the Owner is created with a (Harmonize) user of the creatorUserId in the nft document.
 * If there is an Owner, no changes are made to it. The (new or existing Owner) is set 
 * as the owner field of the nft document. The Social Service is called to add the tokenId to the
 * associated Message identified in this service nft document.
 * 
 * Transfer (Purchase or Transfer)
 * ===============================
 * 
 * Using the "to" address, an Owner is either found or created. The nft identified by the tokenId
 * is then updated with this owner.
 * 
 * @param {*} event 
 */
const processNFTTransfer = async (event) => {

  const { transactionHash: txHash, returnValues } = event
  const { tokenId, to, from } = returnValues
  logWithTime(`processNFTTransfer token ${tokenId} from ${from} to ${to}`)
  try {
    let update = { txHash, txStatus: TX_STATUS.COMPLETED }
    if (from != 0) {
      update.price = '0'
    }
    const nft = await NFT.findOneAndUpdate({ tokenId }, update)
    if (!nft) {
      logErrorWithTime(`processNFTTransfer FAILED unable to find NFT for ${tokenId}`)
    } else {
      await createOrUpdateOwner(tokenId, to)
      if (from == 0) {
        //MINT
        await createOrUpdateOwner(tokenId, to)
        const { messageId } = nft
        await addMessageTokenId(messageId, tokenId)
      } else if (to != 0) {
        //TRANSFER from->to
        await createOrUpdateOwner(tokenId, to)
      }
    }
  } catch (error) {
    logErrorWithTime('processNFTTransfer FAILED', error)
  }
}

/**
 * NOTE: This stuff does not work with latest Web3 4.16 *and* Web3  is no longer
 * supported so we went back to web3 1.5.3 which worked for TurePicture. 
 * This event is emitted both on a mint and on a purchase.
 *
 * We have observed both code 1006 and code 1011 on Infura listeners. 1006 we expect,
 * others we do not, but we restart the listener on all errors now.
 */
export const listenForNFTTransfer = () => {
  console.log(`\n*** listenForNFTTransfer at ${HARMONIZE_ADDRESS}`)
  const web3 = getWssProvider()
  const harmonizeContract = new web3.eth.Contract(HARMONIZE.abi, HARMONIZE_ADDRESS)
  //logWithTime(`events`,harmonizeContract.events)
  harmonizeContract.events
    .Transfer()
    .on('connected', function (subscriptionId) {
      console.log(`*** listenForNFTTransfer subscription ${subscriptionId}`)
    })
    .on('data', function (event) {
      logWithTime('\n*** listenForNFTTransfer got data', event)
      processNFTTransfer(event)
    })
    .on('error', function (error) {
      // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
      const { code } = error
      if (code === 1006) {
        logWithTime('***Restarting Transfer listener...\n')
        listenForNFTTransfer()
      } else {
        logErrorWithTime(
          `\n*** ERROR listenForNFTTransfer, code ${code} restarting...`,
          error
        )
        listenForNFTTransfer()
      }
    })
}
export const listenForNFTPayment = () => {
  console.log(`\n*** listenForNFTPayment at ${HARMONIZE_ADDRESS}`)
  const web3 = getWssProvider()
  const harmonizeContract = new web3.eth.Contract(HARMONIZE.abi, HARMONIZE_ADDRESS)
  harmonizeContract.events
    .Payment()
    .on('connected', function (subscriptionId) {
      console.log(`*** listenForNFTPayment subscription ${subscriptionId}`)
    })
    .on('data', async function (event) {
      //console.log('\n*** listenForNFTPayment got data', event)
      savePayment(event)
    })

    .on('error', function (error) {
      // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
      const { code } = error
      if (code === 1006) {
        logWithTime('***Restarting Payment listener...\n')
        listenForNFTPayment()
      } else {
        logErrorWithTime(
          `\n*** ERROR listenForNFTPayment, code ${code} restarting...`,
          error
        )
        listenForNFTPayment()
      }
    })
}
export const listenForNFTSetPrice = () => {
  console.log(`\n*** listenForNFTSetPrice at ${HARMONIZE_ADDRESS}`)
  const web3 = getWssProvider()
  const harmonizeContract = new web3.eth.Contract(HARMONIZE.abi, HARMONIZE_ADDRESS)
  harmonizeContract.events
    .SetPrice()
    .on('connected', function (subscriptionId) {
      console.log(`*** listenForNFTSetPrice subscription ${subscriptionId}`)
    })
    .on('data', async function (event) {
      //console.log('\n*** listenForNFTSetPrice got data', event)
      setPrice(event)
    })

    .on('error', function (error) {
      // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
      const { code } = error
      if (code === 1006) {
        logWithTime('***Restarting SetPrice listener...\n')
        listenForNFTSetPrice()
      } else {
        logErrorWithTime(
          `\n*** ERROR listenForNFTSetPrice, code ${code} restarting...`,
          error
        )
        listenForNFTSetPrice()
      }
    })
}
export const listenForNFTPartnerShareEvents = () => {
  console.log(`\n*** listenForNFTPartnerShareEvents at ${HARMONIZE_ADDRESS}`)
  const web3 = getWssProvider()
  const harmonizeContract = new web3.eth.Contract(HARMONIZE.abi, HARMONIZE_ADDRESS)
  harmonizeContract.events
    .ShareEvent()
    .on('connected', function (subscriptionId) {
      console.log(`*** listenForNFTPartnerShareEvents subscription ${subscriptionId}`)
    })
    .on('data', async function (event) {
      //console.log('\n*** listenForNFTPartnerShareEvents got data', event)
      saveShareEvent(event, web3)
    })

    .on('error', function (error) {
      const { code } = error
      if (code === 1006) {
        logWithTime('***Restarting ShareEvent listener...\n')
        listenForNFTPartnerShareEvents()
      } else {
        logErrorWithTime(
          `\n*** ERROR listenForNFTPartnerShareEvents, code ${code} restarting...`,
          error
        )
        listenForNFTPartnerShareEvents()
      }
    })
}

