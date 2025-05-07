import axios from 'axios'
import { logErrorWithTime, logWithTime } from '../util/controllerUtil'

/**
 * Call the Core Service to retrieve the User and get its accessToken.
 * The accessToken is then only used in direct calls to the Core Service.
 * @param {*} userId
 *@returns accessToken
*/
export const verifyUserId = async (userId) => {
    //logWithTime(`verifyUser ${userId}`)
    let accessToken
    try {
        const userResponse = await axios.get(`${process.env.USER_AUTH_API}/${userId}`, getCoreServiceOptions())
        const { data } = userResponse
        if (data) {
            //logWithTime('verifyUser got user', data)
            accessToken = data.accessToken
        }
    } catch (error) {
        if (error.message) {
            logWithTime(`Unable to verify user ${userId} ${error.message} `)
        } else {
            logErrorWithTime(`Unable to verify user ${userId}`, error)
        }
    }
    return user
}