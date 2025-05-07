
import moment from 'moment'
const debug = require('debug')('nftservice')

export const UPLOAD_MEDIA_TYPES = {
    AUDIO: ['audio/mpeg', 'audio/wav'],
    IMAGE: ['image/jpeg', 'image/png'],
    VIDEO: ['video/mp4', 'video/quicktime'],
    ALL: ['audio/mpeg', 'audio/wav', 'image/jpeg', 'image/png', 'video/mp4', 'video/quicktime'],
}

/**
 * This is required because we never got Mongoose getter to work in the available lifetime.
 * @param {*} value 
 * @returns 
 */
export const convertDecimal = (decimalValue) => {
    //logWithTime(`convertDecimal ${decimalValue.toString()}`)
    return parseInt(decimalValue.toString())
}

/** When API calls are made, CORS normally requires an Origin to send back with the response because
 * of credentials. For allowed servers, there is no Origin and therefore none sent back with the
 * response.
 */
export const hostCanBypassCors = (req) => {
    const ip4Address = getIp4(req)
    const allowedIps = process.env.ALLOWABLE_HOSTS.split(',')
    return allowedIps.includes(ip4Address)
}

export const isAllowableIp = (req) => {
    const ip4Address = getIp4(req)
    const allowedIps = process.env.ALLOWABLE_IPS.split(',')
    return allowedIps.includes(ip4Address)
}

/**
 * Confirm that the requesting IP address is:
 * 1) localhost or
 * 2) in ALLOWABLE_IPS.
 * @param {*} req 
 * @param {*} res Sends error 403 if no match
 * @returns true if it matches
 */
export const checkIp4 = (req, res) => {
    if (isLocalhost(req)) {
        return true
    } else {
        const ip4Address = getIp4(req)
        if (isAllowableIp(req)) {
            return true
        } else {
            sendError(`Access from ${ip4Address} not allowed`, res, 403)
        }
    }
    return false
}

/**
 * Check if the remote connection is 127.0.0.1
 * @param {*} req 
 * @returns 
 */
export const isLocalhost = (req) => {
    const local = req.header('Origin') === process.env.LOCALHOST_ORIGIN ? true : false
    return local
}

/**
 * Check if the referrer is localhost. For when we don't have an Origin
 * who the eff knows why.
 * @param {*} req 
 * @returns 
 */
export const referrerIsLocalhost = (req) => {
    let local
    const referrer = req.headers.referrer || req.headers.referer
    if (referrer) {
        local = referrer.startsWith(process.env.LOCALHOST_ORIGIN)
    }
    return local
}

/**
 * Get the IP4 address from the request.
 * @param {*} req 
 * @returns 
 */
export const getIp4 = (req) => {
    const remoteAddress = req.ip || req.connection.remoteAddress
    const ip4Address = remoteAddress.replace('::ffff:', '')
    return ip4Address
}

/**
 * This logs both to console.log and to the debug package. Redundant yes but
 * Ubuntu logging only gets console. So why do we use debug?...
 * @param {*} message 
 * @param {*} data 
 */
export const logWithTime = (message, data) => {
    const logMessage = `${moment(Date.now()).format('MM/DD/YYYY, h:mm a')} ${message}`
    if (data) {
        //console.log(logMessage, data)
        debug(logMessage, data)
    } else {
        //console.log(logMessage)
        debug(logMessage)
    }
}

/**
 * See above
 * 
 * If error contains message, append that to to log message; otherwise output the logMessage
 * with the error instance, which can be quite verbose.
 * @param {*} message 
 * @param {*} error 
 */
export const logErrorWithTime = (message, error) => {
    const errorMessage = error && error.message ? error.message : ''
    //const cause = error && error.cause ? error.cause : undefined
    const logMessage = `${moment(Date.now()).format('MM/DD/YYYY, h:mm a')} ${message} ${errorMessage}`
    if (error && !errorMessage.length) {
        console.error(logMessage, error)
        debug(logMessage, error)
    } else {
        console.error(logMessage, error)
        debug(logMessage)
    }
}

/**
 * Logs a console.error message, then sends a JSON object with status of code and a message.
 * @param {*} message
 * @param {*} res
 * @param {*} error If supplied, used with console.error
 * @param {*} code  The status code sent with res. Default is 500
 */
export const sendError = (message, res, error, code = 500) => {
    logErrorWithTime(message, error)
    res.status(code).send({ message })
}
