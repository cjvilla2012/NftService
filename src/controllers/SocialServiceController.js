import axios from 'axios'
import { logWithTime } from '../util/controllerUtil'

/** From our Social Service we get
 * {status,data:{message:...}}
 */
export const processAxiosException = (error, prefix = 'AI Engine') => {
    logWithTime(`processAxiosException`)
    let errorMessage = `processAxiosException`
    if (error && error.code) {
        errorMessage = `${prefix} failed (${error.code})`
        if (error.code === 'ECONNABORTED') {
            errorMessage += ': timeout'
        } else if (error.status) {
            errorMessage += ` with status code ${error.status}`
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
        const response = await axios.post(process.env.ADD_MESSAGE_TOKEN_ID_API,
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

/**
 * Update the specified Social Service Message with the required fields
 * for the User identified by newUserId. This changes the current owner
 * to newUserId without changing the original creatorUserId.
 * @param {*} messageId 
 * @param {*} newUserId 
 * @returns 
 */
export const changeMessageUser = async (messageId, newUserId) => {
    logWithTime(`changeMessageUser ${messageId} newUserId ${newUserId}`)
    try {
        const response = await axios.post(process.env.CHANGE_MESSAGE_USER_API,
            { messageId, newUserId }, {
            headers: {
                'service-api-key': process.env.SERVICE_API_KEY
            },
            timeout: 10000
        })
        if (response.status === 200) {
            logWithTime('...changeMessageUser success', response.data)
            return response.data
        } else {
            console.error(`changeMessageUser FAILED ${response.status}: ${response.message}`)
        }
    } catch (error) {
        console.error('changeMessageUser FAILED')
        console.error(processAxiosException(error, 'changeMessageUser'))
    }
    return null
}