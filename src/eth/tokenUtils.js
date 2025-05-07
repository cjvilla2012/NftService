import bs58 from 'bs58'
import BN from 'bn.js'


/**
 * Convert a version 0 CID to a BigNumber that can then be passed as a uint256 to Solidity.
 * @param {*} cid
 * @returns
 */
export const getUint32FromCID = (cid) => {
  return new BN(bs58.decode(cid).slice(2).toString('hex'), 16)
  //return web3.utils.toBN(getBytes32FromIpfsHash(cid))
}

export const getUint32StringFromCID = (cid) => {
  return new BN(bs58.decode(cid).slice(2).toString('hex'), 16).toString(10)
}

export const getUint32ArrayFromCIDs = (cids) => {
  let results = []
  cids.forEach((cid) => {
    results.push(getUint32FromCID(cid))
  })
  return results
}


/**
 * Convert a uint256 to a version 0 IPFS CID.
 *
 * Note that the hash passed to Buffer.from must be an even number of bytes
 * or it crashes.
 *
 * @param {*} solInt A Solidity uint256
 * @returns
 */
export const getCIDFromUint256 = (solInt) => {
  //return getIpfsHashFromBytes32(`0x${new BN(solInt).toString(16)}`)
  let wht = new BN(solInt).toString(16)
  if (wht.length % 2 !== 0) {
    wht = '0' + wht
  }
  const hashHex = '1220' + wht //new BN(solInt).toString(16)
  const hashBytes = Buffer.from(hashHex, 'hex')
  const hashStr = bs58.encode(hashBytes)
  return hashStr
}
