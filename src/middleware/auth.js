import { verifyUserId } from '../controllers/CoreServiceController'
import { logErrorWithTime, logWithTime } from '../util/controllerUtil'

export const verifyRequestUserId = async (req, res, next) => {
  const userId = req.headers['x-user-id']
  //logWithTime(`verifyRequestUserId ${userId}`)
  if (userId) {
    try {
      let accessToken = await verifyUserId(userId)
      if (!accessToken) {
        return res.status(401).send({ message: 'Unauthorized' })
      }
      //logWithTime(`...got accessToken ${accessToken}`)
      req.accessToken = accessToken
      req.user = userId
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

export const verifyApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key']
  //logWithTime(`verifyApiKey ${apiKey}`)
  if (!apiKey) {
    logErrorWithTime('No API key provided')
    return res.status(403).send({ message: 'No API key provided' })
  } else if (apiKey !== process.env.REACT_APP_API_KEY) {
    logErrorWithTime(`API key ${apiKey} does not match ${process.env.REACT_APP_API_KEY}`)
    return res.status(401).send({ message: 'Unauthorized' })
  } else {
    logWithTime(`... ${apiKey} verified`, req.url)
    next()
  }
}

export const verifyServiceApiKey = (req, res, next) => {
  const apiKey = req.headers['service-api-key']
  //logWithTime(`verifyServiceApiKey ${apiKey}`,req)
  if (!apiKey) {
    logErrorWithTime('No service API key provided')
    return res.status(403).send({ message: 'No Service API key provided' })
  } else if (apiKey !== process.env.SERVICE_API_KEY) {
    logErrorWithTime(`API key ${apiKey} does not match ${process.env.SERVICE_API_KEY}`)
    return res.status(401).send({ message: 'Service Unauthorized' })
  } else {
    logWithTime(`... ${apiKey} verified`, req.url)
    next()
  }
}

