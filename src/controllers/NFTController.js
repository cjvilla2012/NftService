import { isAllowableIp, logErrorWithTime, logWithTime, sendError } from '../util/controllerUtil'
import { getWssProvider, TX_STATUS } from '../eth/tokenEvents'
import NFT from '../models/nft'
import { addETHCreditsPayment } from './CoreServiceController'
import { getETHRate } from '../eth/ethUtils'
import Owner from '../models/owner'
export const TRANSACTION_TYPE = {
  CREDIT: 0,
  ETH_STARTED: 1,
  ETH_CREDIT: 2,
  FAILED: 99,
  ETH_FAILED: 100
}


/**
 * The price must be a Gwei string
 * @param {*} req 
 * @param {*} res 
 */
export const addNFT = async (req, res) => {
  logWithTime(`addNFT ${req.user}`, req.body)
  const { tokenId, mediaHash, name, description, messageId, price } = req.body
  try {
    const nft = await NFT.create({
      tokenId, mediaHash, name, description, messageId, price,
      creatorUserId: req.user
    })
    res.send(nft)
  } catch (error) {
    sendError(`Unable to add NFT ${name} for tokenId ${tokenId}`, res, error)
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res nft if found, 404 if not
 */
export const getNFT = async (req, res) => {
  const { tokenId } = req.params
  try {
    const nft = await NFT.findOne({ tokenId }).lean()
    if (nft) {
      res.send(nft)
    } else {
      sendError(`Unable to find NFT ${tokenId}`, res, undefined, 404)
    }
  } catch (error) {
    sendError(`Error getting NFT ${tokenId}`, res, error)
  }
}

/**
 * @param {*} req 
 * @param {*} res nft if found, 404 if not
 */
export const getNFTForMessage = async (req, res) => {
  const { messageId } = req.params
  try {
    const nft = await NFT.findOne({ messageId }).lean()
    if (nft) {
      res.send(nft)
    } else {
      sendError(`Unable to find NFT for Message ${messageId}`, res, undefined, 404)
    }
  } catch (error) {
    sendError(`Error getting NFT for message ${messageId}`, res, error)
  }
}

export const getNFTForToken = async (req, res) => {
  const { tokenId } = req.params
  try {
    const nft = await NFT.findOne({ tokenId }).lean()
    if (nft) {
      res.send(nft)
    } else {
      sendError(`Unable to find NFT for token Id ${tokenId}`, res, undefined, 404)
    }
  } catch (error) {
    sendError(`Error getting NFT for token Id ${tokenId}`, res, error)
  }
}
/**
 {
    "title": "Asset Metadata",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Identifies the asset to which this NFT represents"
        },
        "description": {
            "type": "string",
            "description": "Describes the asset to which this NFT represents"
        },
        "image": {
            "type": "string",
            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
        }
    }
}
 * @param {*} req 
 * @param {*} res 
 */
export const getNFTMetadata = async (req, res) => {
  const { tokenId } = req.params
  try {
    const nft = await NFT.findOne({ tokenId }).lean()
    if (nft) {
      const { name, description } = nft
      const metadata = {
        "name": name,
        "description": description,
        "image": "https://harmonize.social/harmonize512.png"
      }

      res.send(metadata)
    } else {
      sendError(`Unable to find NFT ${tokenId}`, res, undefined, 404)
    }
  } catch (error) {
    sendError(`Error getting NFT ${tokenId}`, res, error)
  }

}

const getNFTs = async (query, start, count, res) => {

  const nfts = await NFT.find(query)
    .sort({ _id: 'desc' })
    .skip(parseInt(start))
    .limit(parseInt(count))
    .lean()
  if (nfts) {
    res.send(nfts)
  } else {
    sendError(`Unable to find NFTs for query ${JSON.stringify(query)}`, res, undefined, 404)
  }

}
/**
 * List all NFTs for which the signed-in user is the Owner.
 * @param {*} req { start, count }
 * @param {*} res Array of NFT documents
 */
export const listNFTs = async (req, res) => {
  const { start, count } = req.params
  try {
    const { user } = req
    const owner = await Owner.findOne({ user }).lean()
    if (owner) {
      await getNFTs({ owner }, start, count, res)
    } else {
      sendError(`The user ${req.user} does not own any NFTs`, res, undefined, 404)
    }
  } catch (error) {
    sendError(`Error listing NFTs`, res, error)
  }
}

/**
 * This is an *unauthenticated* call that uses ApiKey and is domain-restricted.
 * 
 * Get the NFTs for the address that have not been processed in an ETH
 * transaction.
 * @param {*} req { creatorUserId, start, count }
 * @param {*} res 
 */
export const listPendingNFTs = async (req, res) => {
  const { creatorUserId, start, count } = req.params
  try {
      await getNFTs({ creatorUserId, txStatus: TX_STATUS.NONE }, start, count, res)
  } catch (error) {
    sendError(`Error listing pending NFTs for ${creatorUserId}`, res, error)
  }
}

/**
 * Called from the Core Service to pay credits owed to the specified
 * userId in ETH. The caller must send the ETH amount in USD, not inflated.
 * 
 * The caller receives multiple responses:
 * 
 * 'Started [txHash]' 
 * 'Confirmation [count]'
 * 'Confirmed'
 * 
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const payArtistWithETH = async (req, res) => {
  const { to, amountInUSD } = req.body
  logWithTime(`payArtistWithETH to ${to} amount ${amountInUSD}`)
  if (!isAllowableIp(req)) {
    sendError(`Access disallowed`, res, undefined, 403)
  } else {
    try {
      const ethInUSD = await getETHRate('usd')
      //You need to make sure there aren't more than 18 decimal places to convert to Wei
      const priceInEth = (amountInUSD / ethInUSD).toFixed(18)
      const web3 = getWssProvider()
      let txHash
      const paymentTx = {
        from: process.env.ETH_PAYOR,
        to,
        value: web3.utils.toWei(`${priceInEth}`, "ether"), // Convert value to Wei
        gas: 21000,  // Estimated gas limit for a simple transaction. Required
        //parameter when passed to signTransaction
        //gasPrice: web3.utils.toWei("50", "gwei"),  // Gas price in Gwei
      }

      const signedTx = await web3.eth.accounts.signTransaction(paymentTx, process.env.ETH_PAYOR_KEY)
      logWithTime(`...signedTx`, signedTx)
      const promiEvent = web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      promiEvent.once('transactionHash', function (hash) {
        txHash = hash
        logWithTime(`payArtistWithETH received transactionHash ${txHash}`)
        res.write(`Started ${txHash}\n`)
      })
        .on('confirmation', function (confirmations) {
          logWithTime(`...${txHash} confirmation ${confirmations}`)
          if (confirmations >= 1) {
            logWithTime(`payArtistWithETH to ${to} amount ${amountInUSD} confirmed`)
            res.write('Confirmed\n')
            res.end()
            promiEvent.off('confirmation')
            logWithTime(`...stopped listening for confirmations`)
            return
          } else {
            res.write(`Confirmation ${confirmations}\n`)
          }
        })
        .on('error', function (error) {
          //You can't use sendError here because we are streaming the writes
          const errMessage = `payArtistWithETH to ${to} amount ${amountInUSD} FAILED`
          logErrorWithTime(errMessage, error)
          res.status(500)
          res.write(errMessage)
          res.end()

        })
        .then(function (receipt) {
          //Returned when tx is mined. This does not complete the process,
          //because we wait for 2 confirmations
          logWithTime(`payWithCredits ${txHash} transaction mined`, receipt)
        })
    } catch (error) {
      //Unexpected
      //failed(error)
      sendError(`payArtistWithETH to ${to} amount ${amountInUSD} sendSignedTransaction EXCEPTION`,
        res, error
      )
    }
  }
}

/**
 * 
 * @param {*} amount 
 * @param {*} userId 
 * @param {*} numCreditsPurchased 
 * @param {*} txHash 
 * @param {*} transactionType 
 * @returns 
 */
const createETHPayment = (amount, userId, numCreditsPurchased, txHash,
  transactionType
) => {
  return {
    amount_received: amount,
    currency: 'eth',
    txHash,
    metadata: {
      userId,
      transactionType,
      numCreditsPurchased
    }
  }
}

const sendFailedTransaction = async (payment) => {
  payment.metadata.transactionType = TRANSACTION_TYPE.ETH_FAILED
  logErrorWithTime(`sendFailedTransaction`, payment)
  await addETHCreditsPayment(payment)
}
/**
 * The client calls this method when it has started an ETH transfer and received
 * the txHash. This method looks for a transaction receipt every 5 seconds
 * and once there is a transaction with a matching from, to, and paymentAmount,
 * creates a payment and sends it to the Core Service so that credits are added
 * to the signed-in User's account.
 * 
 * When comparing the request to and from to the receipt to and from, we convert
 * toLowerCase because (e.g.) the Web3 clients gives us UPPERCASE addresses.
 * 
 * Note:
 * 1) We are not yet counting block confirmations
 * 2) The maximum time we wait is 2 minutes (24 5 second intervals)
 * @param {*} req 
 * @param {*} res 
 */
export const startETHTransaction = async (req, res) => {
  logWithTime('startETHTransaction', req.body)
  const { paymentAmount, creditsPurchased, to, from, txHash } = req.body
  let count = 0
  let payment = createETHPayment(paymentAmount, req.user,
    creditsPurchased,
    txHash,
    TRANSACTION_TYPE.ETH_STARTED)
  try {
    const web3 = getWssProvider()
    await addETHCreditsPayment(payment)
    const intervalId = setInterval(async () => {
      if (count < 24) {
        count++
        try {
          const tx = await web3.eth.getTransactionReceipt(txHash)
          if (tx) {
            clearInterval(intervalId)
            logWithTime(`startETHTransaction got transaction receipt after ${count} attempts`, tx)
            const { to: txTo, from: txFrom } = tx
            if (to.toLowerCase() === txTo.toLowerCase()
              && from.toLowerCase() === txFrom.toLowerCase()) {
              try {
                payment.metadata.transactionType = TRANSACTION_TYPE.ETH_CREDIT
                await addETHCreditsPayment(payment)
              } catch (paymentError) {
                logErrorWithTime(`startETHTransaction for ${txHash} FAILED`, paymentError)
                await sendFailedTransaction(payment)
              }
            } else {
              logErrorWithTime(`Receipt for ${txHash} does not match requested values:
                to ${to} txTo: ${txTo} from ${from} txFrom: ${txFrom} `,
                req.body)
              await sendFailedTransaction(payment)
            }
          }
        } catch (err) {
          clearInterval(intervalId)
          logErrorWithTime(`Error awaiting transaction receipt for ${txHash}`, err)
          await sendFailedTransaction(payment)
        }
      } else {
        clearInterval(intervalId)
        logErrorWithTime(`Timed out attempting to get ETH transaction for ${txHash}`)
        await sendFailedTransaction(payment)
      }
    }, 5000)

  } catch (error) {
    sendError(`Error starting ETH transaction for ${txHash}`, res, error)
  }

}
/**
 * The user who owns the specified NFT has started to mint. This method
 * receives the txHash and using the tokenId updates the NFT with
 * the txHash and txStatus of STARTED.
 * @param {*} req body: { tokenId, txHash }
 * @param {*} res status 200 or 500
 */
export const startNFTTransaction = async (req, res) => {
  const { tokenId, txHash } = req.body
  try {
    const nft = await NFT.findOneAndUpdate(
      { tokenId },
      { txHash, txStatus: TX_STATUS.STARTED },
      {
        new: true,

      })
    if (nft) {
      res.sendStatus(200)
    } else {
      sendError(`Unable to find transaction to start for ${tokenId} ${txHash}`, res)
    }

  } catch (error) {
    sendError(`Error starting transaction ${tokenId} ${txHash}`, res, error)
  }

}

