import axios from 'axios'
import { logWithTime } from '../util/controllerUtil'

/** From our Social Service we get
 * {status,data:{message:...}}
 */
export const processAxiosException = (error, prefix = 'AI Engine') => {
    let errorMessage = `${prefix} failed (${error.code})`
    if (error.code === 'ECONNABORTED') {
        errorMessage += ': timeout'
    } else if (error.response) {
        try {
            const { status, statusText, data } = error.response
            const message = statusText ? statusText : data.message ? data.message : data.error && data.error.message ? data.error.message : null
            if (message) {
                errorMessage += ': ' + message

            } else {
                errorMessage += ` with status code ${status}`
            }
        } catch {
            console.error('wtf error.response', error.response)
        }
    }
    return errorMessage
}

/**
 * Update the Social Service Message with the tokenId
 * @param {*} messageId 
 * @param {*} mediaEntry 
 * @returns 
 */
export const addMessageTokenId = async (messageId, tokenId) => {
    logWithTime(`addMessageTokenId ${messageId} tokenId ${tokenId}`)
    try {
        const response = await axios.post(`${process.env.ADD_MESSAGE_TOKEN_ID_API}`, 
            { messageId, tokenId }, {
            headers: {
                'service-api-key': process.env.SERVICE_API_KEY
            },
            timeout: 10000
        })
        if (response.status === 200) {
            logWithTime('...addMessageTokenId success', response.data)
            return response.data
        } else {
            console.error(`addMessageTokenId FAILED ${response.status}: ${response.message}`)
        }
    } catch (error) {
        console.error('addMessageTokenId FAILED')
        console.error(processAxiosException(error, 'addMessageTokenId'))
    }
    return null
}