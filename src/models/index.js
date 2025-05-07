import mongoose from 'mongoose'
import { logWithTime } from '../util/controllerUtil'
const debug = require('debug')('nftservice')

import NFT from './nft'

const connectDb = () => {
  return mongoose.connect(process.env.NFT_DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
}


/**
 * Delete everything except:
 * - Region
 * - Place but do reset the tokenId field
 */
const eraseDb = async () => {
  logWithTime('*** WARNING - erasing DB ***')
  try {
    /* deleteMany does not delete indices */
    await Promise.all([
      NFT.collection.dropIndexes({}),
      NFT.deleteMany({})
    ])
  } catch (error) {
    debug('Failed to erase DB', error)
  }
}

export { connectDb, eraseDb }

