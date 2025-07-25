import mongoose, { Schema } from 'mongoose'
import { TX_STATUS } from '../eth/tokenEvents'
/**Though NFTs can be discovered using the owner's Ethereum address, since we require a Harmonize
 * User account to mint or transact NFTs, we save the Harmonize Core Service Users in this table.
 * This means transactions that occur outside Harmonize cannot be queried 
 * using this collection.

 * 0) The NFT is associated with a Social Service Message identified by messageId in this document.
 * The NFT is permanently associated with the Message even if it is not minted
 * 1) Reference to a Harmonize minted NFT is stored in this table
 * 2) The tokenId is the uint256 HEX string that is the NFT token ID. This should be created
 *    from a UUID on the client side.
 * 3) The contractVersionNumber is the Harmonize contract version *AT THE TIME OF MINTING*.
 *    If this is 0 *DO NOT MINT*
 * 4) The mediaHash is the SHA256 of the associated media, even if the media is not cold stored
  5) The Sale price in Gwei
  6) The tokenId is referenced in the Social Service Message that defines the media
  7) The NFT creator User (as defined in the Core Service) and current owner User 
     are stored in the nft table
  8) Once a Message has a minted NFT, it cannot be deleted or changed in any way

  The creatorUserId is the Harmonize User id that created the NFT document. 
  This never changes.
  
  The creatorEthAccount is the ETH address at the time the NFT
  document was created. The primary purpose of this field is to match the NFT
  document to the current ETH account when mint commences. When using
  a mobile wallet that does not sign into Harmonize, it is possible to switch
  ETH accounts in the wallet. The creatorEthAccount ensures the minting
  account is the same as the creator.
  
  The owner is an Owner that is assigned when the Transfer event is received

   * 
 * This document is also used to satisfy calls to the ERC721Metadata tokenUri. The endpoint
 * is defined in the Harmonize contract as:
 * 
 * https://nft.harmonize.social/nft/[tokenId]
 * 
 * For this purpose:
 * 1) name is the Message name (e.g. song title)
 * 2) description is the Message summary
 * 3) The metadata image is resolved by getting the information from the related Message.
 */
const nftSchema = new mongoose.Schema(
  {
    tokenId: {
      type: String,
      required: true,
      index: { unique: true }
    },
    contractVersion: { type: Number, required: true, index: true, default: 0 },
    mediaHash: String,
    name: String,
    description: String,
    textId:String, //The optional string passed as bytes24 to contract mint
    messageId: { type: String, required: true, index: { unique: true } },
    creatorUserId: {
      type: String,
      required:true
    },
    creatorEthAccount:{
      type:String,
      required:true
    },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner', index: true },
    price: {//Sale price in Gwei
      type: String,
    },
    rights: String,
    txHash: { type: String, default: undefined }, //To get the transaction that created the token
    txStatus: { type: Number, default: TX_STATUS.NONE }, //The status of the transaction identified by txHash
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    collation: { locale: 'en', strength: 2 }//For case-insensitive searches
  }
)

const NFT = mongoose.model('NFT', nftSchema)

export default NFT
