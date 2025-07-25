import axios from 'axios'
import { logErrorWithTime, logWithTime } from '../util/controllerUtil'
import { processAxiosException } from './SocialServiceController'
const getCoreServiceOptions = () => {
    return {
        timeout: 3000,
        headers: {
            'service-api-key': process.env.SERVICE_API_KEY
        }
    }
}

/**
 * The first time this is called transactionType must be ETH_STARTED.
 * This causes the Core Service to create a Transaction.
 * 
 * Subsequent calls with the same txHash should be:
 * 1) ETH_CREDIT. Causes Credits to be added on Core Service
 * 2) ETH_FAILED. No Credits
 * 
 * Payment is:
 * {amount_received,
    currency,
    txHash,
    metadata: {
      userId,
      transactionType,
      numCreditsPurchased
    }
 * @param {*} payment 
 */
export const addETHCreditsPayment = async (payment) => {
    logWithTime('addETHCreditsPayment', payment)
    try {
        const response = await axios.post(process.env.ADD_ETH_CREDITS_PAYMENT_API,
            payment, {
            headers: {
                'service-api-key': process.env.SERVICE_API_KEY
            },
            timeout: 10000
        })
        if (response.status === 200) {
            logWithTime('...addETHCreditsPayment success')
        } else {
            throw new Error(`CoreService addETHCreditsPayment FAILED ${response.status}: ${response.message}`)
        }
    } catch (error) {
        console.error('addETHCreditsPayment FAILED', processAxiosException(error, 'addETHCreditsPayment'))
        /*
        throw new Error(processAxiosException(error, 'addETHCreditsPayment'),
            { cause: error })
             */
    }
}

/**
 * Call the Core Service to get the id for the User that has the specified
 * ETH address associated with it.
 * @param {*} ethAccount 
 * @returns userId
 */
export const getEthAccountUserId = async (ethAccount) => {
    logWithTime(`getEthAccountUserId ${ethAccount}`)
    try {
        const userResponse = await axios.get(`${process.env.GET_ETH_ACCOUNT_USER_ID_API}/${ethAccount}`,
            getCoreServiceOptions())
        const { data } = userResponse
        if (data) {
            const { userId } = data
            logWithTime(`getEthAccountUserId got userId ${userId}`)
            return userId
        }
    } catch (error) {
        if (error.message) {
            logWithTime(`Unable to getEthAccountUserId ${ethAccount} ${error.message} `)
        } else {
            logErrorWithTime(`Unable to getEthAccountUserId ${ethAccount}`, error)
        }
    }
    return null
}

/**
 * Call the Core Service to retrieve the User and get its accessToken.
 * The accessToken is then only used in direct calls to the Core Service.
 * @param {*} userId
 *@returns accessToken
*/
export const verifyUserId = async (userId) => {
    //logWithTime(`verifyUserId ${userId}`)
    let accessToken
    try {
        const userResponse = await axios.get(`${process.env.USER_AUTH_API}/${userId}`,
            getCoreServiceOptions())
        const { data } = userResponse
        if (data) {
            accessToken = data.accessToken
            //logWithTime(`verifyUserId got accessToken ${accessToken}`)
        }
    } catch (error) {
        if (error.message) {
            logWithTime(`Unable to verify user ${userId} ${error.message} `)
        } else {
            logErrorWithTime(`Unable to verify user ${userId}`, error)
        }
    }
    return accessToken
}