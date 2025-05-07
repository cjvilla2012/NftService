import Owner from '../models/owner'
import { sendError } from '../util/controllerUtil'

/**
 * Get the payments to the specified Owner, if any
 * @param {*} req {address}
 * @param {*} res owner
 */
export const getPayments = async (req, res) => {
  const { address } = req.params
  try {
    const owner = await Owner.findOne({ address }, 'payments').exec()
    res.json(owner)
  } catch (error) {
    sendError(`No such address ${address}`, res, error)
  }
}

/**
 * Get the shareEvents for the specified Owner, if any. 
 * @param {*} req {address}
 * @param {*} res Owner with shareEvents array
 */
export const getShareEvents = async (req, res) => {
  const { address } = req.params
  try {
    let owner = await Owner.findOne({ address }, 'shares').lean()
    if (owner) {
      const { _id, shares } = owner
      res.json({_id,shares})
    } else {
      sendError(`No such Owner address ${address}`, res)
    }
  } catch (error) {
    sendError(`Error finding Owner address ${address}`, res, error)
  }
}

/**
 * Get the shares for a specific Owner and tokenId within shares
 * @param {*} req 
 * @param {*} res 
 */
export const getSharesForToken = async (req, res) => {
  const { address, tokenId } = req.params
  try {
    const owner = await Owner.findOne({ address, "shares.tokenId": tokenId }, 'shares')
    res.json(owner)
  } catch (error) {
    sendError(`No such address ${address}`, res, error)
  }
}

