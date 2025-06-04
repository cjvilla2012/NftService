import { logWithTime, sendError } from '../util/controllerUtil'
import { TX_STATUS } from '../eth/tokenEvents'
import NFT from '../models/nft'


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
 * 
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

