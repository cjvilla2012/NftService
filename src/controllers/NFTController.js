import { logWithTime, sendError } from '../util/controllerUtil'
import { TX_STATUS } from '../eth/tokenEvents'
import NFT from '../models/nft'


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const addNFT = async (req, res) => {
  logWithTime(`addNFT ${req.user}`,req.body)
  const { tokenId, mediaHash,name, description, messageId, price } = req.body
  try {
    const nft = await NFT.create({ tokenId, mediaHash,name, description, messageId, price,
       creatorUserId: req.user })
    res.send(nft)
  } catch (error) {
    sendError(`Unable to add NFT ${name} for tokenId ${tokenId}`, res, error)
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const getNFT = async (req, res) => {
  const { tokenId } = req.params
  try {
    const nft = await NFT.findById(tokenId).lean()
    if (nft) {
      res.send(nft)
    } else {
      sendError(`Unable to find NFT ${tokenId}`, res)
    }
  } catch (error) {
    sendError(`Error getting NFT ${tokenId}`, res, error)
  }
}
/**
 * Set the share price for the specified token. Only the token Owner can do this,
 * and so the signed-in user Id must match the nft owner Id.
 * @param {*} req {sharePrice,tokenId}
 * @param {*} res Returns updated NFT, 500 if not found and other things
 */
export const setSharePrice = async (req, res) => {
  const { user } = req
  const { sharePrice, tokenId } = req.body
  logWithTime(`setSharePrice ${sharePrice} for ${tokenId} user ${user}`)
  try {
    const nft = await NFT.findOneAndUpdate({ tokenId, owner: user }, { sharePrice }, { new: true })
    if (nft) {
      res.send(nft)
    } else {
      sendError(`Unable to update share price ${sharePrice} for ${tokenId}`, res)
    }
  } catch (error) {
    sendError(`Unable to set share price ${sharePrice} for ${tokenId}`, res, error)
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
    const nft = await NFT.findByIdAndUpdate(
      tokenId,
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

