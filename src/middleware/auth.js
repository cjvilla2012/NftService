import { verifyUserId } from '../controllers/CoreServiceController'
import { logWithTime } from '../util/controllerUtil'

export const verifyRequestUserId = async (req, res, next) => {
  const userId = req.headers['x-user-id']
  logWithTime(`verifyRequestUserId ${userId}`)
  if (userId) {
    try {
      let accessToken = await verifyUserId(userId)
      if (!accessToken) {
        return res.status(401).send({ message: 'Unauthorized' })
      }
      //logWithTime(`...got user ${user._id}`)
      req.accessToken = accessToken
      req.user=userId
      next()

    }
    catch (error) {
      console.error(`Error verifying userId ${userId}`, error)
      return res.status(500).send({ message: 'Error with authorization' })
    }
  } else {
    return res.status(403).send({ message: 'Unauthorized NFT service access' })
  }
}

