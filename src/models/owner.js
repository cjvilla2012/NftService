import mongoose from 'mongoose'

/* This maps blockchain account addresses to the entities associated with the HARMONIZE tokens owned
by this account. It also records Payment events to the Owner.

A token Owner is not the same as a User:  a User is a Harmonize account, whereas an Owner 
is a blockchain external account. 

When the NFT minting process begins, the Ethereum address of the minter (the Message creator)
is used to create this Owner. The Owner is permanently associated with the Message creator User

The payments array contains elements collected from the Payment event emitted by the Harmonize contract.
The "to" address of this event is used to find or create the Owner document. The paymentType is
defined within the contract.
*/
const ownerSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      index: { unique: true }
    },
    user: {//The Harmonize User
      type: String,
      required: false,
      index: { unique: true }
    },
    payments: [
      {
        from: { type: String },
        tokenId: { type: String },
        amount: { type: Number },
        paymentType: { type: String },
        txHash: { type: String },
        received: { type: Date, default: Date.now },
      },
    ],
    shares: [
      {
        eventType: { type: Number },
        tokenOwner: { type: String },
        tokenId: { type: String },
        numShares: { type: Number },
        pricePerShare: { type: Number },
        txHash: { type: String },
        received: { type: Date, default: Date.now },
      },
    ],
  },

  {
    timestamps: true,
    collation: { locale: 'en', strength: 2 },//For case-insensitive searches     
    toJSON: { virtuals: true }
  }
)

const Owner = mongoose.model('Owner', ownerSchema)


export default Owner
