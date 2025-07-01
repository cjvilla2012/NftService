import 'dotenv/config.js'
import express from 'express'
import https from 'https'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
const rfs = require('rotating-file-stream')

import * as fsSync from 'fs'
import { connectDb, eraseDb } from './models'
import path from 'path'

import {
  addNFT,
  getNFT,
  getNFTForMessage,
  getNFTMetadata,
  listNFTs,
  payArtistWithETH,
  startETHTransaction,
  startNFTTransaction,
} from './controllers/NFTController'

import {
  getPayments,
  getShareEvents,
  getSharesForToken
} from './controllers/OwnerController'
import {
  listenForNFTPayment,
  listenForNFTSetPrice,
  listenForNFTTransfer,
  WSS_PROVIDER_URL,
} from './eth/tokenEvents'

import { 
  hostCanBypassCors,
  logErrorWithTime, logWithTime, 
  referrerIsLocalhost} from './util/controllerUtil'
import { verifyRequestUserId, verifyServiceApiKey } from './middleware/auth'
const ALLOWED_USER_AGENTS = ['FreshpingBot']
export const allowedOrigins = ['https://www.harmonize.social']
if (process.env.ALLOW_LOCALHOST) {
  allowedOrigins.push(process.env.LOCALHOST_ORIGIN)
}

const app = express()


app.use(compression()) //Compress all routes
app.use(express.static(path.join(__dirname, 'client/build')))
// create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
})

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

/**
 * What is important here:
 * 1) Add supported Origins in the response Access-Control-Allow-Origin
 * 2) Include x-api-key,service-api-key, and Origin in Access-Control-Allow-Headers
 * Some Calls to api.harmonize.social failed until we added this.
 * For why this is needed see:
 * https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
 */
app.use(function (req, res, next) {
  //logWithTime(`app use is localhost ${referrerIsLocalhost(req)} origins header ${req.header('Origin')} ${req.hostname} ${req.path}`, allowedOrigins)
  if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
    res.header(
      'Access-Control-Allow-Origin',
      req.header('Origin')
    )
  }
  res.header(
    'Access-Control-Allow-Headers',
    `x-api-key,service-api-key,x-user-id,Origin, Content-Type, Accept`
  )
  next()
})

const checkUserAgents = (req) => {
  const userAgent = req.header('user-agent')
  if (userAgent && userAgent.length) {
    for (const agent of ALLOWED_USER_AGENTS) {
      if (userAgent.startsWith(agent)) {
        return true
      }
    }
  }
  return false
}

const corsOptionsDelegate = (req, callback) => {

  let corsOptions = { origin: false }
  if (hostCanBypassCors(req)) {
    callback(null, corsOptions)
  } else {
    //logWithTime(`corsOptionsDelegate origin ${req.header('Origin')} allowedOrigins`, allowedOrigins)
    if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
      //logWithTime('...found in Origin header')
      corsOptions = { origin: true, credentials: true } // reflect (enable) the requested origin in the CORS response
      callback(null, corsOptions)
    } else {
      //logWithTime(`...invalid origin, path ${req.path} headers are:`, req.headers)
      if (referrerIsLocalhost(req)) {
        //Because our api video calls do not contain an Origin when using localhost
        callback(null, corsOptions)
      } else {
        const remoteAddress = req.ip || req.connection.remoteAddress
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
        if (checkUserAgents(req)) {
          callback(null, corsOptions)
        } else {
          const userAgent = req.header('user-agent')
          if (userAgent) {
            logErrorWithTime(`\n*** corsOptionsDelegate REJECTED for ${remoteAddress} 
            url ${fullUrl} Origin: ${req.header('Origin')} 
            INVALID user-agent: ${req.header('user-agent')}`)
            callback(`Blocked CORS request (1)`, corsOptions)
          } else {
            logErrorWithTime(`\n*** corsOptionsDelegate REJECTED for ${remoteAddress} 
              url ${fullUrl} NO user-agent Origin: ${req.header('Origin')}`)
            callback('Blocked CORS request (2)', corsOptions)
          }
        }

      }
    }
  }
}

app.use(cors(corsOptionsDelegate))

// Parse JSON and urlencoded bodies for this app. Make sure you put
// **before** your route handlers!
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Add error handling middleware that Express will call
// in the event of malformed JSON.
app.use(function (err, req, res, next) {
  // 'SyntaxError: Unexpected token n in JSON at position 0'
  err.message
  next(err)
})

/** This is the ERC721 metadata endpoint -- public and no auth required */
app.get('/nft/:tokenId',  getNFTMetadata)

app.post('/api/nft/add', [verifyRequestUserId], addNFT)
app.get('/api/nft/get/:tokenId',  getNFT)
app.get('/api/nft/getByMessage/:messageId', [verifyRequestUserId], getNFTForMessage)
app.get('/api/nft/listNFTs/:start/:count', [verifyRequestUserId], listNFTs)
app.post('/api/nft/payArtistWithETH', 
  [verifyServiceApiKey],
  payArtistWithETH)

app.post(
  '/api/nft/startNFTTransaction',
  [verifyRequestUserId],
  startNFTTransaction
)

app.post(
  '/api/eth/startETHTransaction',
  [verifyRequestUserId],
  startETHTransaction
)

app.get('/api/owners/payments/:address', getPayments)
app.get('/api/owners/shares/:address', getShareEvents)
app.get('/api/owners/tokenShares/:address/:tokenId', getSharesForToken)


connectDb().then(async () => {
  if (process.env.ERASE_DB !== 'false') {
    eraseDb()
  }

  if (process.env.USE_SSL !== 'false') {
    const sslOptions = {
      key: fsSync.readFileSync('/etc/ssl/private/harmonize-private.key.pem'),
      ca: fsSync.readFileSync('/etc/ssl/certs/intermediate.cert.pem'),
      cert: fsSync.readFileSync('/etc/ssl/certs/harmonize.crt'),
    }
    const httpsServer = https.createServer(sslOptions, app)
    httpsServer.listen(process.env.PORT, async () => {
      logWithTime(
        `NFT Service ${process.env.REACT_APP_TEST === 'true' ? 'TEST and truetest bucket' : 'production'
        } now listening on SSL port ${process.env.PORT} from ${__dirname}`
      )
      logWithTime(`WSS provider is ${WSS_PROVIDER_URL}`)
    })
    listenForNFTTransfer()
    listenForNFTSetPrice()
    listenForNFTPayment()
  } else {
    app.listen(process.env.PORT, async () => {
      logWithTime(
        `NFT Service listening on non-SSL port ${process.env.PORT} from ${__dirname}`
      )
    })
    listenForNFTTransfer()
    listenForNFTSetPrice()
    listenForNFTPayment()
  }
})
