export const HARMONIZE_ADDRESS = '0xb4634d30e398642a8da9220cEd34E5F9A7CF3203'
export const HARMONIZE = {
  contractName: 'Harmonize',
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721IncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721InsufficientApproval",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721NonexistentToken",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "error",
          "type": "string"
        }
      ],
      "name": "HarmonizeError",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "paymentType",
          "type": "string"
        }
      ],
      "name": "FractionalPaymentFailed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "options",
          "type": "uint256"
        }
      ],
      "name": "Options",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "paymentType",
          "type": "string"
        }
      ],
      "name": "Payment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paid",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "purchaseFee",
          "type": "uint256"
        }
      ],
      "name": "PurchaseToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "SetPrice",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getMediaFingerprint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        }
      ],
      "name": "getOwnedTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getRoyalty",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "percentage",
              "type": "uint256"
            }
          ],
          "internalType": "struct Harmonize.StreamingRoyalty",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "price64",
          "type": "uint64"
        },
        {
          "internalType": "uint256",
          "name": "royalty",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "hash",
          "type": "uint256"
        },
        {
          "internalType": "bytes24",
          "name": "id",
          "type": "bytes24"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "partnerAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "partnerPercentage",
              "type": "uint256"
            }
          ],
          "internalType": "struct Harmonize.Partner[]",
          "name": "partners",
          "type": "tuple[]"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "nftPartners",
      "outputs": [
        {
          "internalType": "address",
          "name": "partnerAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "partnerPercentage",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "options",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "revenuePayment",
          "type": "uint256"
        }
      ],
      "name": "payStreamingRevenue",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "payTransactionFee",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "purchaseToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "opts",
          "type": "uint256"
        }
      ],
      "name": "setOptions",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "price64",
          "type": "uint64"
        }
      ],
      "name": "setPrice",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "revenuePayor",
          "type": "address"
        }
      ],
      "name": "setRevenuePayor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "streamingRoyalties",
      "outputs": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "percentage",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x60a060405234801561000f575f5ffd5b50604051806040016040528060098152602001684861726d6f6e697a6560b81b815250604051806040016040528060098152602001684841524d4f4e495a4560b81b815250815f90816100629190610127565b50600161006f8282610127565b5050600680546001600160a01b03191633908117909155608052506101e1565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100b757607f821691505b6020821081036100d557634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561012257805f5260205f20601f840160051c810160208510156101005750805b601f840160051c820191505b8181101561011f575f815560010161010c565b50505b505050565b81516001600160401b038111156101405761014061008f565b6101548161014e84546100a3565b846100db565b6020601f821160018114610186575f831561016f5750848201515b5f19600385901b1c1916600184901b17845561011f565b5f84815260208120601f198516915b828110156101b55787850151825560209485019460019092019101610195565b50848210156101d257868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6080516132766102235f395f818161047001528181610b2401528181610bea01528181610cde01528181610fac01528181611ab3015261234301526132765ff3fe6080604052600436106101d0575f3560e01c806370a08231116100fd578063c87b56dd11610092578063e757223011610062578063e757223014610595578063e985e9c5146105c9578063f379e7f4146105e8578063f9dd6ea7146105fb575f5ffd5b8063c87b56dd14610518578063cf63722c14610537578063d9d616551461054a578063e1a4474914610576575f5ffd5b80639dc29fac116100cd5780639dc29fac146104a8578063a15454ba146104c7578063a22cb465146104da578063b88d4fde146104f9575f5ffd5b806370a08231146104245780637d8dad1514610443578063893d20e81461046257806395d89b4114610494575f5ffd5b80631cc2c91111610173578063327fd35b11610143578063327fd35b1461039c57806342842e0e146103c75780634abf825d146103e65780636352211e14610405575f5ffd5b80631cc2c911146102fa57806321e922a51461030d57806323b872dd1461036a5780632ba2701914610389575f5ffd5b8063095ea7b3116101ae578063095ea7b3146102605780631069143a146102815780631072cbea146102a45780631af9cf49146102b7575f5ffd5b806301ffc9a7146101d457806306fdde0314610208578063081812fc14610229575b5f5ffd5b3480156101df575f5ffd5b506101f36101ee366004612a89565b61061a565b60405190151581526020015b60405180910390f35b348015610213575f5ffd5b5061021c61062a565b6040516101ff9190612ad2565b348015610234575f5ffd5b50610248610243366004612ae4565b6106b9565b6040516001600160a01b0390911681526020016101ff565b34801561026b575f5ffd5b5061027f61027a366004612b0f565b6106e0565b005b34801561028c575f5ffd5b5061029660075481565b6040519081526020016101ff565b61027f6102b2366004612b0f565b6106ef565b3480156102c2575f5ffd5b506102d66102d1366004612ae4565b6107b1565b6040805182516001600160a01b0316815260209283015192810192909252016101ff565b61027f610308366004612b0f565b610835565b348015610318575f5ffd5b5061034b610327366004612ae4565b600c6020525f9081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b0390931683526020830191909152016101ff565b348015610375575f5ffd5b5061027f610384366004612b39565b6108dd565b61027f610397366004612b8d565b610966565b3480156103a7575f5ffd5b506102966103b6366004612ae4565b5f908152600b602052604090205490565b3480156103d2575f5ffd5b5061027f6103e1366004612b39565b610a78565b3480156103f1575f5ffd5b50610296610400366004612b0f565b610a97565b348015610410575f5ffd5b5061024861041f366004612ae4565b610ac2565b34801561042f575f5ffd5b5061029661043e366004612bb7565b610acc565b34801561044e575f5ffd5b5061027f61045d366004612bb7565b610b11565b34801561046d575f5ffd5b507f0000000000000000000000000000000000000000000000000000000000000000610248565b34801561049f575f5ffd5b5061021c610bc8565b3480156104b3575f5ffd5b5061027f6104c2366004612b0f565b610bd7565b61027f6104d5366004612ae4565b610c8e565b3480156104e5575f5ffd5b5061027f6104f4366004612bd2565b610d22565b348015610504575f5ffd5b5061027f610513366004612c21565b610d2d565b348015610523575f5ffd5b5061021c610532366004612ae4565b610d45565b61027f610545366004612cff565b610daa565b348015610555575f5ffd5b50610569610564366004612bb7565b610f38565b6040516101ff9190612d1f565b348015610581575f5ffd5b5061027f610590366004612ae4565b610fa1565b3480156105a0575f5ffd5b506102966105af366004612ae4565b5f908152600a60205260409020546001600160401b031690565b3480156105d4575f5ffd5b506101f36105e3366004612d61565b611025565b61027f6105f6366004612d8d565b611052565b348015610606575f5ffd5b5061034b610615366004612cff565b6113ed565b5f6106248261142f565b92915050565b60605f805461063890612e48565b80601f016020809104026020016040519081016040528092919081815260200182805461066490612e48565b80156106af5780601f10610686576101008083540402835291602001916106af565b820191905f5260205f20905b81548152906001019060200180831161069257829003601f168201915b5050505050905090565b5f6106c38261147e565b505f828152600460205260409020546001600160a01b0316610624565b6106eb8282336114b6565b5050565b6106f76114c3565b6007546001161561072457604051634f04dc7d60e11b815260040161071b90612e80565b60405180910390fd5b61072d81611532565b6001036107785761073e33826115a4565b6001600160a01b0382165f90815260086020908152604082208054600181018255908352912001819055610773338383610a78565b6107a9565b604051634f04dc7d60e11b81526020600482015260056024820152645b6535305d60d81b604482015260640161071b565b6106eb6116b5565b604080518082019091525f80825260208201526007546002161561080057604051634f04dc7d60e11b81526020600482015260056024820152645b7374355d60d81b604482015260640161071b565b505f818152600c6020908152604091829020825180840190935280546001600160a01b0316835260010154908201525b919050565b61083d6114c3565b6007546001161561086157604051634f04dc7d60e11b815260040161071b90612e80565b6108846040518060600160405280602681526020016131f96026913983836116df565b5f818152600a60205260408120546001600160401b031690036108d257604051634f04dc7d60e11b81526020600482015260056024820152645b6532305d60d81b604482015260640161071b565b6107a9823383611726565b6001600160a01b03821661090657604051633250574960e11b81525f600482015260240161071b565b5f610912838333611740565b9050836001600160a01b0316816001600160a01b031614610960576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161071b565b50505050565b61096e6114c3565b6007546001161561099257604051634f04dc7d60e11b815260040161071b90612e80565b813361099d82610ac2565b6001600160a01b0316146109dc57604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b604482015260640161071b565b5f838152600a60205260409020805467ffffffffffffffff19166001600160401b038416178155610a0c84610c8e565b7f5c43325359179f4471448fd5c0247053caeec2178ee6378a1a3eb4b2030d31463385610a3d86633b9aca00612eb4565b604080516001600160a01b03909416845260208401929092526001600160401b03169082015260600160405180910390a150506106eb6116b5565b610a9283838360405180602001604052805f815250610d2d565b505050565b6008602052815f5260405f208181548110610ab0575f80fd5b905f5260205f20015f91509150505481565b5f6106248261147e565b5f6001600160a01b038216610af6576040516322718ad960e21b81525f600482015260240161071b565b506001600160a01b03165f9081526003602052604090205490565b610b196114c3565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b6257604051634f04dc7d60e11b815260040161071b90612edd565b6001600160a01b038116610ba257604051634f04dc7d60e11b81526020600482015260066024820152655b737432305d60d01b604482015260640161071b565b600680546001600160a01b0319166001600160a01b038316179055610bc56116b5565b50565b60606001805461063890612e48565b610bdf6114c3565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c2857604051634f04dc7d60e11b815260040161071b90612edd565b610c3282826115a4565b5f818152600b602090815260408083208381556001908101849055600a83528184208481558101849055600c835281842080546001600160a01b03191681550183905560099091528120610c8591612a32565b6107a981611b09565b5f610c97611b41565b905080156106eb5780341015610cd857604051634f04dc7d60e11b81526020600482015260056024820152645b6533355d60d81b604482015260640161071b565b6106eb827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70355d60e01b8152506001611b82565b6106eb338383611ca8565b610d388484846108dd565b6109603385858585611d46565b6060610d508261147e565b505f610d5a611e6e565b90505f815111610d785760405180602001604052805f815250610da3565b80610d8284611e8e565b604051602001610d93929190612f13565b6040516020818303038152906040525b9392505050565b610db26114c3565b60075460011615610dd657604051634f04dc7d60e11b815260040161071b90612e80565b6006546001600160a01b03163314610e1957604051634f04dc7d60e11b81526020600482015260056024820152645b7374325d60d81b604482015260640161071b565b610e516040518060400160405280601681526020017570617953747265616d696e67526576656e756520257360501b81525082611f1d565b5f610e5c8383611f62565b905080604001515f14610eb757610e8f60405180606001604052806022815260200161321f602291398260400151611f1d565b610eb78382604051806040016040528060058152602001645b7035315d60d81b81525061218c565b5f610ec184610ac2565b9050610ef56040518060600160405280602b81526020016131ce602b913982846040015186610ef09190612f27565b6116df565b610f2e8482846040015186610f0a9190612f27565b604051806040016040528060048152602001635b70335d60e01b8152506001611b82565b50506106eb6116b5565b6001600160a01b0381165f90815260086020908152604091829020805483518184028101840190945280845260609392830182828015610f9557602002820191905f5260205f20905b815481526020019060010190808311610f81575b50505050509050919050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610fea57604051634f04dc7d60e11b815260040161071b90612edd565b60078190556040518181527f12220fe348bfcd9d89bf856b98667916c5db45a8a2805aa90882d5c85f9c9ba19060200160405180910390a150565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b61105a6114c3565b6007546001161561107e57604051634f04dc7d60e11b815260040161071b90612e80565b835f036110b757604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65315d60e01b604082015260600190565b66038d7ea4c68000866001600160401b0316111561110157604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65325d60e01b604082015260600190565b335f908152600860209081526040808320805460018181018355918552838520018b90558a8452600a83529281902092830187905585811c68010000000000000000026001600160401b038a1617909255815160608101909252602a80835261118c929161315c908301395f898152600a60205260409020546001600160401b03808a16911661228c565b84156111d75760408051808201825233815260208082018881525f8b8152600c909252929020905181546001600160a01b0319166001600160a01b0390911617815590516001909101555b80156113a8575f5b818110156113a6575f8383838181106111fa576111fa612f3a565b6112109260206040909202019081019150612bb7565b90506001600160a01b038116158061123057506001600160a01b03811630145b8061124357506001600160a01b03811633145b1561127a57604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65335d60e01b604082015260600190565b5f816001600160a01b031631116112bd57604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65345d60e01b604082015260600190565b5f5b8381101561134e5782811415801561130f57508484828181106112e4576112e4612f3a565b6112fa9260206040909202019081019150612bb7565b6001600160a01b0316826001600160a01b0316145b1561134657604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65355d60e01b604082015260600190565b6001016112bf565b505f89815260096020526040902084848481811061136e5761136e612f3a565b83546001810185555f948552602090942060409091029290920192600202909101905061139b8282612f4e565b5050506001016111df565b505b6113b233886122d3565b6113dc87620fffff6113c6600d600a612f84565b6113d190600a612f84565b600754901c166122ec565b6113e46116b5565b50505050505050565b6009602052815f5260405f208181548110611406575f80fd5b5f918252602090912060029091020180546001909101546001600160a01b039091169250905082565b5f6001600160e01b031982166380ac58cd60e01b148061145f57506001600160e01b03198216635b5e139f60e01b145b8061062457506301ffc9a760e01b6001600160e01b0319831614610624565b5f818152600260205260408120546001600160a01b03168061062457604051637e27328960e01b81526004810184905260240161071b565b610a928383836001612387565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005c1561150357604051633ee5aeb560e01b815260040160405180910390fd5b61153060017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005b9061248b565b565b5f5f61153d83610ac2565b5f848152600c60205260409020549091506001600160a01b039081169082163314801561158c5750816001600160a01b0316816001600160a01b0316148061158c57506001600160a01b038116155b1561159b575060019392505050565b505f9392505050565b816001600160a01b03166115b782610ac2565b6001600160a01b0316146115f657604051634f04dc7d60e11b81526020600482015260056024820152645b6535315d60d81b604482015260640161071b565b6001600160a01b0382165f90815260086020526040812054905b81811015610960576001600160a01b0384165f90815260086020526040902080548491908390811061164457611644612f3a565b905f5260205f200154036116ad5761167560405180606001604052806021815260200161313b602191398486612492565b6001600160a01b0384165f90815260086020526040902080548290811061169e5761169e612f3a565b5f918252602082200155610960565b600101611610565b6115305f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0061152a565b610a928383836040516024016116f793929190612f97565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b1790526124d5565b610a9283838360405180602001604052805f8152506124de565b5f6001600754165f1461176657604051634f04dc7d60e11b815260040161071b90612e80565b6117a76040518060400160405280601f81526020017f55706461746520746f20257320746f6b656e49642025732061757468202573008152508585856124e9565b5f838152600260205260408120546001600160a01b031690506001600160a01b038516158015906117df57506001600160a01b038116155b15611824576118116040518060400160405280600c81526020016b0b4b4b4b4b4b4b4f9352539560a21b815250612532565b61181c858585612575565b915050610da3565b6001600160a01b03851615801561184257506001600160a01b038316155b15611874576118116040518060400160405280600c81526020016b169696969696969f212aa92760a11b815250612532565b6001600160a01b0385161580159061189457506001600160a01b03831633145b15611905576118ca6040518060400160405280601081526020016f169696969696969f2a2920a729a322a960811b815250612532565b5f848152600a60205260408120805467ffffffffffffffff191690556118f1868686612575565b90506118fc85610c8e565b9150610da39050565b5f848152600a60205260408120805490919061192e906001600160401b0316633b9aca00612eb4565b6001600160401b0316905061195c60405180606001604052806027815260200161318660279139348361228c565b6001600160a01b03871630148061197257508034105b156119a857604051634f04dc7d60e11b81526020600482015260056024820152645b6534305d60d81b604482015260640161071b565b5f868152600a60205260408120805467ffffffffffffffff191690556119cf888883612575565b90505f6119da612667565b90505f6119e78234612f27565b90505f6119f48a83612694565b90505f611a018284612f27565b90505f611a0e8c83611f62565b5f8d8152600960205260408120919250611a289190612a32565b6040810151611a379083612f27565b915080604001515f14611a6c57611a6c8c82604051806040016040528060058152602001645b7035305d60d81b81525061218c565b8215611a7c57611a7c8c846126f7565b611aa78c8a84604051806040016040528060058152602001645b7031305d60d81b8152506001611b82565b8415611af857611af88c7f000000000000000000000000000000000000000000000000000000000000000087604051806040016040528060058152602001645b7031315d60d81b8152506001611b82565b50939b9a5050505050505050505050565b5f611b155f835f611740565b90506001600160a01b0381166106eb57604051637e27328960e01b81526004810183905260240161071b565b5f620fffff611b52600d600a612f84565b611b5d90600a612f84565b611b68906014612f84565b600754611b7d92911c1664e8d4a51000612fc4565b905090565b60405184907fbdab63af615e4e2519eb67a8d0c9a6a0b33087aae0f9a7dc98002099f6c01ea690611bba908890849088908890612fdb565b60405180910390a15f816001600160a01b03168585604051602001611bdf9190612ad2565b60408051601f1981840301815290829052611bf991613011565b5f6040518083038185875af1925050503d805f8114611c33576040519150601f19603f3d011682016040523d82523d5f602084013e611c38565b606091505b50509050806113e4578215611c625783604051634f04dc7d60e11b815260040161071b9190612ad2565b7f4fcbe9ac9cfddb4181f8d8b230f2e182c4064527110192d9f02da207a0ad0a0987878787604051611c979493929190612fdb565b60405180910390a150505050505050565b6001600160a01b038216611cda57604051630b61174360e31b81526001600160a01b038316600482015260240161071b565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15611e6757604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290611d8890889088908790879060040161301c565b6020604051808303815f875af1925050508015611dc2575060408051601f3d908101601f19168201909252611dbf9181019061304e565b60015b611e29573d808015611def576040519150601f19603f3d011682016040523d82523d5f602084013e611df4565b606091505b5080515f03611e2157604051633250574960e11b81526001600160a01b038516600482015260240161071b565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14611e6557604051633250574960e11b81526001600160a01b038516600482015260240161071b565b505b5050505050565b60606040518060600160405280602181526020016131ad60219139905090565b60605f611e9a83612752565b60010190505f816001600160401b03811115611eb857611eb8612c0d565b6040519080825280601f01601f191660200182016040528015611ee2576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084611eec57509392505050565b6106eb8282604051602401611f33929190613069565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526124d5565b611f85604051806060016040528060608152602001606081526020015f81525090565b604080516060810182525f85815260096020529182205481906001600160401b03811115611fb557611fb5612c0d565b604051908082528060200260200182016040528015611fde578160200160208202803683370190505b5081525f868152600960209081526040909120549101906001600160401b0381111561200c5761200c612c0d565b604051908082528060200260200182016040528015612035578160200160208202803683370190505b5081526020015f81525090505f5b5f85815260096020526040902054811015612184575f85815260096020526040812080548390811061207757612077612f3a565b905f5260205f20906002020190505f6103e88260010154876120999190612fc4565b6120a3919061308a565b90508086106121485781546001600160a01b031615612143578154845180516001600160a01b0390921691859081106120de576120de612f3a565b60200260200101906001600160a01b031690816001600160a01b031681525050808460200151848151811061211557612115612f3a565b60200260200101818152505080846040018181516121339190612f84565b9052506121408187612f27565b95505b61217a565b604051634f04dc7d60e11b81526020600482015260066024820152655b707235325d60d01b604482015260640161071b565b5050600101612043565b509392505050565b5f5b82515181101561096057825180515f9190839081106121af576121af612f3a565b60200260200101516001600160a01b0316146122845761223e6040518060400160405280601981526020017f6672616374696f6e616c5061796f757420257320746f202573000000000000008152508460200151838151811061221457612214612f3a565b6020026020010151855f0151848151811061223157612231612f3a565b6020026020010151612492565b61228484845f0151838151811061225757612257612f3a565b60200260200101518560200151848151811061227557612275612f3a565b6020026020010151855f611b82565b60010161218e565b610a928383836040516024016122a4939291906130a9565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b1790526124d5565b6106eb828260405180602001604052805f815250612829565b5f6122fc8264e8d4a51000612fc4565b90508015610a92578034101561233d57604051634f04dc7d60e11b81526020600482015260056024820152645b6531305d60d81b604482015260640161071b565b610a92837f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70315d60e01b8152506001611b82565b808061239b57506001600160a01b03821615155b1561245c575f6123aa8461147e565b90506001600160a01b038316158015906123d65750826001600160a01b0316816001600160a01b031614155b80156123e957506123e78184611025565b155b156124125760405163a9fbf51f60e01b81526001600160a01b038416600482015260240161071b565b811561245a5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b80825d5050565b610a928383836040516024016124aa939291906130cd565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b1790525b610bc581612840565b610d3884848461285f565b6109608484848460405160240161250394939291906130ff565b60408051601f198184030181529190526020810180516001600160e01b03166363fb8bc560e01b1790526124d5565b610bc5816040516024016125469190612ad2565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526124d5565b5f828152600260205260408120546001600160a01b03908116908316156125a1576125a181848661290c565b6001600160a01b038116156125db576125bc5f855f5f612387565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615612609576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f6103e86103ff61267a600d600a612f84565b60075461268a92911c1634612fc4565b611b7d919061308a565b5f828152600c60209081526040808320815180830190925280546001600160a01b031680835260019091015492820192909252908290156126ef576103e88260200151856126e29190612fc4565b6126ec919061308a565b90505b949350505050565b5f828152600c60209081526040918290208251808401845281546001600160a01b031680825260019283015482850152845180860190955260048552635b70325d60e01b9385019390935292610a9292869290918691611b82565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106127905772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106127bc576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106127da57662386f26fc10000830492506010015b6305f5e10083106127f2576305f5e100830492506008015b612710831061280657612710830492506004015b60648310612818576064830492506002015b600a83106106245760010192915050565b6128338383612970565b610a92335f858585611d46565b5f6a636f6e736f6c652e6c6f6790505f5f835160208501845afa505050565b6001600160a01b03821661288857604051633250574960e11b81525f600482015260240161071b565b5f61289483835f611740565b90506001600160a01b0381166128c057604051637e27328960e01b81526004810183905260240161071b565b836001600160a01b0316816001600160a01b031614610960576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161071b565b6129178383836129d1565b610a92576001600160a01b03831661294557604051637e27328960e01b81526004810182905260240161071b565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161071b565b6001600160a01b03821661299957604051633250574960e11b81525f600482015260240161071b565b5f6129a583835f611740565b90506001600160a01b03811615610a92576040516339e3563760e11b81525f600482015260240161071b565b5f6001600160a01b038316158015906126ef5750826001600160a01b0316846001600160a01b03161480612a0a5750612a0a8484611025565b806126ef5750505f908152600460205260409020546001600160a01b03908116911614919050565b5080545f8255600202905f5260205f2090810190610bc591905b80821115612a705780546001600160a01b03191681555f6001820155600201612a4c565b5090565b6001600160e01b031981168114610bc5575f5ffd5b5f60208284031215612a99575f5ffd5b8135610da381612a74565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610da36020830184612aa4565b5f60208284031215612af4575f5ffd5b5035919050565b6001600160a01b0381168114610bc5575f5ffd5b5f5f60408385031215612b20575f5ffd5b8235612b2b81612afb565b946020939093013593505050565b5f5f5f60608486031215612b4b575f5ffd5b8335612b5681612afb565b92506020840135612b6681612afb565b929592945050506040919091013590565b80356001600160401b0381168114610830575f5ffd5b5f5f60408385031215612b9e575f5ffd5b82359150612bae60208401612b77565b90509250929050565b5f60208284031215612bc7575f5ffd5b8135610da381612afb565b5f5f60408385031215612be3575f5ffd5b8235612bee81612afb565b915060208301358015158114612c02575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215612c34575f5ffd5b8435612c3f81612afb565b93506020850135612c4f81612afb565b92506040850135915060608501356001600160401b03811115612c70575f5ffd5b8501601f81018713612c80575f5ffd5b80356001600160401b03811115612c9957612c99612c0d565b604051601f8201601f19908116603f011681016001600160401b0381118282101715612cc757612cc7612c0d565b604052818152828201602001891015612cde575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215612d10575f5ffd5b50508035926020909101359150565b602080825282518282018190525f918401906040840190835b81811015612d56578351835260209384019390920191600101612d38565b509095945050505050565b5f5f60408385031215612d72575f5ffd5b8235612d7d81612afb565b91506020830135612c0281612afb565b5f5f5f5f5f5f5f60c0888a031215612da3575f5ffd5b87359650612db360208901612b77565b95506040880135945060608801359350608088013567ffffffffffffffff1981168114612dde575f5ffd5b925060a08801356001600160401b03811115612df8575f5ffd5b8801601f81018a13612e08575f5ffd5b80356001600160401b03811115612e1d575f5ffd5b8a60208260061b8401011115612e31575f5ffd5b602082019350809250505092959891949750929550565b600181811c90821680612e5c57607f821691505b602082108103612e7a57634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600690820152655b737431355d60d01b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b6001600160401b038181168382160290811690818114612ed657612ed6612ea0565b5092915050565b6020808252600590820152645b7374315d60d81b604082015260600190565b5f81518060208401855e5f93019283525090919050565b5f6126ef612f218386612efc565b84612efc565b8181038181111561062457610624612ea0565b634e487b7160e01b5f52603260045260245ffd5b8135612f5981612afb565b81546001600160a01b0319166001600160a01b03919091161781556020919091013560019190910155565b8082018082111561062457610624612ea0565b606081525f612fa96060830186612aa4565b6001600160a01b039490941660208301525060400152919050565b808202811582820484141761062457610624612ea0565b84815260018060a01b0384166020820152826040820152608060608201525f6130076080830184612aa4565b9695505050505050565b5f610da38284612efc565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061300790830184612aa4565b5f6020828403121561305e575f5ffd5b8151610da381612a74565b604081525f61307b6040830185612aa4565b90508260208301529392505050565b5f826130a457634e487b7160e01b5f52601260045260245ffd5b500490565b606081525f6130bb6060830186612aa4565b60208301949094525060400152919050565b606081525f6130df6060830186612aa4565b6020830194909452506001600160a01b0391909116604090910152919050565b608081525f6131116080830187612aa4565b6001600160a01b039586166020840152604083019490945250921660609092019190915291905056fe64656c65746520746f6b656e20257320666f7220746f6b656e4f776e65722025736d696e74207072696365202573207072696365416e6448617368206166746572207570646174652025732d2d2d2d2d2d2d3e50555243484153452c206d73672e76616c756520257320707269636520257368747470733a2f2f6e66742e6861726d6f6e697a652e736f6369616c2f6e66742f70617953747265616d696e67526576656e756520746f6b656e4f776e6572202573207061796f75742025737075726368617365546f6b656e20746f6b656e4f776e657220257320746f6b656e496420257370617953747265616d696e67526576656e756520746f74616c5061796f7574202573a264697066735822122064e5bed1098f3f0da058126128072c33b2188d37a6eb4af55789e756471718ff64736f6c634300081c0033",
  "deployedBytecode": "0x6080604052600436106101d0575f3560e01c806370a08231116100fd578063c87b56dd11610092578063e757223011610062578063e757223014610595578063e985e9c5146105c9578063f379e7f4146105e8578063f9dd6ea7146105fb575f5ffd5b8063c87b56dd14610518578063cf63722c14610537578063d9d616551461054a578063e1a4474914610576575f5ffd5b80639dc29fac116100cd5780639dc29fac146104a8578063a15454ba146104c7578063a22cb465146104da578063b88d4fde146104f9575f5ffd5b806370a08231146104245780637d8dad1514610443578063893d20e81461046257806395d89b4114610494575f5ffd5b80631cc2c91111610173578063327fd35b11610143578063327fd35b1461039c57806342842e0e146103c75780634abf825d146103e65780636352211e14610405575f5ffd5b80631cc2c911146102fa57806321e922a51461030d57806323b872dd1461036a5780632ba2701914610389575f5ffd5b8063095ea7b3116101ae578063095ea7b3146102605780631069143a146102815780631072cbea146102a45780631af9cf49146102b7575f5ffd5b806301ffc9a7146101d457806306fdde0314610208578063081812fc14610229575b5f5ffd5b3480156101df575f5ffd5b506101f36101ee366004612a89565b61061a565b60405190151581526020015b60405180910390f35b348015610213575f5ffd5b5061021c61062a565b6040516101ff9190612ad2565b348015610234575f5ffd5b50610248610243366004612ae4565b6106b9565b6040516001600160a01b0390911681526020016101ff565b34801561026b575f5ffd5b5061027f61027a366004612b0f565b6106e0565b005b34801561028c575f5ffd5b5061029660075481565b6040519081526020016101ff565b61027f6102b2366004612b0f565b6106ef565b3480156102c2575f5ffd5b506102d66102d1366004612ae4565b6107b1565b6040805182516001600160a01b0316815260209283015192810192909252016101ff565b61027f610308366004612b0f565b610835565b348015610318575f5ffd5b5061034b610327366004612ae4565b600c6020525f9081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b0390931683526020830191909152016101ff565b348015610375575f5ffd5b5061027f610384366004612b39565b6108dd565b61027f610397366004612b8d565b610966565b3480156103a7575f5ffd5b506102966103b6366004612ae4565b5f908152600b602052604090205490565b3480156103d2575f5ffd5b5061027f6103e1366004612b39565b610a78565b3480156103f1575f5ffd5b50610296610400366004612b0f565b610a97565b348015610410575f5ffd5b5061024861041f366004612ae4565b610ac2565b34801561042f575f5ffd5b5061029661043e366004612bb7565b610acc565b34801561044e575f5ffd5b5061027f61045d366004612bb7565b610b11565b34801561046d575f5ffd5b507f0000000000000000000000000000000000000000000000000000000000000000610248565b34801561049f575f5ffd5b5061021c610bc8565b3480156104b3575f5ffd5b5061027f6104c2366004612b0f565b610bd7565b61027f6104d5366004612ae4565b610c8e565b3480156104e5575f5ffd5b5061027f6104f4366004612bd2565b610d22565b348015610504575f5ffd5b5061027f610513366004612c21565b610d2d565b348015610523575f5ffd5b5061021c610532366004612ae4565b610d45565b61027f610545366004612cff565b610daa565b348015610555575f5ffd5b50610569610564366004612bb7565b610f38565b6040516101ff9190612d1f565b348015610581575f5ffd5b5061027f610590366004612ae4565b610fa1565b3480156105a0575f5ffd5b506102966105af366004612ae4565b5f908152600a60205260409020546001600160401b031690565b3480156105d4575f5ffd5b506101f36105e3366004612d61565b611025565b61027f6105f6366004612d8d565b611052565b348015610606575f5ffd5b5061034b610615366004612cff565b6113ed565b5f6106248261142f565b92915050565b60605f805461063890612e48565b80601f016020809104026020016040519081016040528092919081815260200182805461066490612e48565b80156106af5780601f10610686576101008083540402835291602001916106af565b820191905f5260205f20905b81548152906001019060200180831161069257829003601f168201915b5050505050905090565b5f6106c38261147e565b505f828152600460205260409020546001600160a01b0316610624565b6106eb8282336114b6565b5050565b6106f76114c3565b6007546001161561072457604051634f04dc7d60e11b815260040161071b90612e80565b60405180910390fd5b61072d81611532565b6001036107785761073e33826115a4565b6001600160a01b0382165f90815260086020908152604082208054600181018255908352912001819055610773338383610a78565b6107a9565b604051634f04dc7d60e11b81526020600482015260056024820152645b6535305d60d81b604482015260640161071b565b6106eb6116b5565b604080518082019091525f80825260208201526007546002161561080057604051634f04dc7d60e11b81526020600482015260056024820152645b7374355d60d81b604482015260640161071b565b505f818152600c6020908152604091829020825180840190935280546001600160a01b0316835260010154908201525b919050565b61083d6114c3565b6007546001161561086157604051634f04dc7d60e11b815260040161071b90612e80565b6108846040518060600160405280602681526020016131f96026913983836116df565b5f818152600a60205260408120546001600160401b031690036108d257604051634f04dc7d60e11b81526020600482015260056024820152645b6532305d60d81b604482015260640161071b565b6107a9823383611726565b6001600160a01b03821661090657604051633250574960e11b81525f600482015260240161071b565b5f610912838333611740565b9050836001600160a01b0316816001600160a01b031614610960576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161071b565b50505050565b61096e6114c3565b6007546001161561099257604051634f04dc7d60e11b815260040161071b90612e80565b813361099d82610ac2565b6001600160a01b0316146109dc57604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b604482015260640161071b565b5f838152600a60205260409020805467ffffffffffffffff19166001600160401b038416178155610a0c84610c8e565b7f5c43325359179f4471448fd5c0247053caeec2178ee6378a1a3eb4b2030d31463385610a3d86633b9aca00612eb4565b604080516001600160a01b03909416845260208401929092526001600160401b03169082015260600160405180910390a150506106eb6116b5565b610a9283838360405180602001604052805f815250610d2d565b505050565b6008602052815f5260405f208181548110610ab0575f80fd5b905f5260205f20015f91509150505481565b5f6106248261147e565b5f6001600160a01b038216610af6576040516322718ad960e21b81525f600482015260240161071b565b506001600160a01b03165f9081526003602052604090205490565b610b196114c3565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b6257604051634f04dc7d60e11b815260040161071b90612edd565b6001600160a01b038116610ba257604051634f04dc7d60e11b81526020600482015260066024820152655b737432305d60d01b604482015260640161071b565b600680546001600160a01b0319166001600160a01b038316179055610bc56116b5565b50565b60606001805461063890612e48565b610bdf6114c3565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c2857604051634f04dc7d60e11b815260040161071b90612edd565b610c3282826115a4565b5f818152600b602090815260408083208381556001908101849055600a83528184208481558101849055600c835281842080546001600160a01b03191681550183905560099091528120610c8591612a32565b6107a981611b09565b5f610c97611b41565b905080156106eb5780341015610cd857604051634f04dc7d60e11b81526020600482015260056024820152645b6533355d60d81b604482015260640161071b565b6106eb827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70355d60e01b8152506001611b82565b6106eb338383611ca8565b610d388484846108dd565b6109603385858585611d46565b6060610d508261147e565b505f610d5a611e6e565b90505f815111610d785760405180602001604052805f815250610da3565b80610d8284611e8e565b604051602001610d93929190612f13565b6040516020818303038152906040525b9392505050565b610db26114c3565b60075460011615610dd657604051634f04dc7d60e11b815260040161071b90612e80565b6006546001600160a01b03163314610e1957604051634f04dc7d60e11b81526020600482015260056024820152645b7374325d60d81b604482015260640161071b565b610e516040518060400160405280601681526020017570617953747265616d696e67526576656e756520257360501b81525082611f1d565b5f610e5c8383611f62565b905080604001515f14610eb757610e8f60405180606001604052806022815260200161321f602291398260400151611f1d565b610eb78382604051806040016040528060058152602001645b7035315d60d81b81525061218c565b5f610ec184610ac2565b9050610ef56040518060600160405280602b81526020016131ce602b913982846040015186610ef09190612f27565b6116df565b610f2e8482846040015186610f0a9190612f27565b604051806040016040528060048152602001635b70335d60e01b8152506001611b82565b50506106eb6116b5565b6001600160a01b0381165f90815260086020908152604091829020805483518184028101840190945280845260609392830182828015610f9557602002820191905f5260205f20905b815481526020019060010190808311610f81575b50505050509050919050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610fea57604051634f04dc7d60e11b815260040161071b90612edd565b60078190556040518181527f12220fe348bfcd9d89bf856b98667916c5db45a8a2805aa90882d5c85f9c9ba19060200160405180910390a150565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b61105a6114c3565b6007546001161561107e57604051634f04dc7d60e11b815260040161071b90612e80565b835f036110b757604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65315d60e01b604082015260600190565b66038d7ea4c68000866001600160401b0316111561110157604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65325d60e01b604082015260600190565b335f908152600860209081526040808320805460018181018355918552838520018b90558a8452600a83529281902092830187905585811c68010000000000000000026001600160401b038a1617909255815160608101909252602a80835261118c929161315c908301395f898152600a60205260409020546001600160401b03808a16911661228c565b84156111d75760408051808201825233815260208082018881525f8b8152600c909252929020905181546001600160a01b0319166001600160a01b0390911617815590516001909101555b80156113a8575f5b818110156113a6575f8383838181106111fa576111fa612f3a565b6112109260206040909202019081019150612bb7565b90506001600160a01b038116158061123057506001600160a01b03811630145b8061124357506001600160a01b03811633145b1561127a57604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65335d60e01b604082015260600190565b5f816001600160a01b031631116112bd57604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65345d60e01b604082015260600190565b5f5b8381101561134e5782811415801561130f57508484828181106112e4576112e4612f3a565b6112fa9260206040909202019081019150612bb7565b6001600160a01b0316826001600160a01b0316145b1561134657604051634f04dc7d60e11b815260040161071b906020808252600490820152635b65355d60e01b604082015260600190565b6001016112bf565b505f89815260096020526040902084848481811061136e5761136e612f3a565b83546001810185555f948552602090942060409091029290920192600202909101905061139b8282612f4e565b5050506001016111df565b505b6113b233886122d3565b6113dc87620fffff6113c6600d600a612f84565b6113d190600a612f84565b600754901c166122ec565b6113e46116b5565b50505050505050565b6009602052815f5260405f208181548110611406575f80fd5b5f918252602090912060029091020180546001909101546001600160a01b039091169250905082565b5f6001600160e01b031982166380ac58cd60e01b148061145f57506001600160e01b03198216635b5e139f60e01b145b8061062457506301ffc9a760e01b6001600160e01b0319831614610624565b5f818152600260205260408120546001600160a01b03168061062457604051637e27328960e01b81526004810184905260240161071b565b610a928383836001612387565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005c1561150357604051633ee5aeb560e01b815260040160405180910390fd5b61153060017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005b9061248b565b565b5f5f61153d83610ac2565b5f848152600c60205260409020549091506001600160a01b039081169082163314801561158c5750816001600160a01b0316816001600160a01b0316148061158c57506001600160a01b038116155b1561159b575060019392505050565b505f9392505050565b816001600160a01b03166115b782610ac2565b6001600160a01b0316146115f657604051634f04dc7d60e11b81526020600482015260056024820152645b6535315d60d81b604482015260640161071b565b6001600160a01b0382165f90815260086020526040812054905b81811015610960576001600160a01b0384165f90815260086020526040902080548491908390811061164457611644612f3a565b905f5260205f200154036116ad5761167560405180606001604052806021815260200161313b602191398486612492565b6001600160a01b0384165f90815260086020526040902080548290811061169e5761169e612f3a565b5f918252602082200155610960565b600101611610565b6115305f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0061152a565b610a928383836040516024016116f793929190612f97565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b1790526124d5565b610a9283838360405180602001604052805f8152506124de565b5f6001600754165f1461176657604051634f04dc7d60e11b815260040161071b90612e80565b6117a76040518060400160405280601f81526020017f55706461746520746f20257320746f6b656e49642025732061757468202573008152508585856124e9565b5f838152600260205260408120546001600160a01b031690506001600160a01b038516158015906117df57506001600160a01b038116155b15611824576118116040518060400160405280600c81526020016b0b4b4b4b4b4b4b4f9352539560a21b815250612532565b61181c858585612575565b915050610da3565b6001600160a01b03851615801561184257506001600160a01b038316155b15611874576118116040518060400160405280600c81526020016b169696969696969f212aa92760a11b815250612532565b6001600160a01b0385161580159061189457506001600160a01b03831633145b15611905576118ca6040518060400160405280601081526020016f169696969696969f2a2920a729a322a960811b815250612532565b5f848152600a60205260408120805467ffffffffffffffff191690556118f1868686612575565b90506118fc85610c8e565b9150610da39050565b5f848152600a60205260408120805490919061192e906001600160401b0316633b9aca00612eb4565b6001600160401b0316905061195c60405180606001604052806027815260200161318660279139348361228c565b6001600160a01b03871630148061197257508034105b156119a857604051634f04dc7d60e11b81526020600482015260056024820152645b6534305d60d81b604482015260640161071b565b5f868152600a60205260408120805467ffffffffffffffff191690556119cf888883612575565b90505f6119da612667565b90505f6119e78234612f27565b90505f6119f48a83612694565b90505f611a018284612f27565b90505f611a0e8c83611f62565b5f8d8152600960205260408120919250611a289190612a32565b6040810151611a379083612f27565b915080604001515f14611a6c57611a6c8c82604051806040016040528060058152602001645b7035305d60d81b81525061218c565b8215611a7c57611a7c8c846126f7565b611aa78c8a84604051806040016040528060058152602001645b7031305d60d81b8152506001611b82565b8415611af857611af88c7f000000000000000000000000000000000000000000000000000000000000000087604051806040016040528060058152602001645b7031315d60d81b8152506001611b82565b50939b9a5050505050505050505050565b5f611b155f835f611740565b90506001600160a01b0381166106eb57604051637e27328960e01b81526004810183905260240161071b565b5f620fffff611b52600d600a612f84565b611b5d90600a612f84565b611b68906014612f84565b600754611b7d92911c1664e8d4a51000612fc4565b905090565b60405184907fbdab63af615e4e2519eb67a8d0c9a6a0b33087aae0f9a7dc98002099f6c01ea690611bba908890849088908890612fdb565b60405180910390a15f816001600160a01b03168585604051602001611bdf9190612ad2565b60408051601f1981840301815290829052611bf991613011565b5f6040518083038185875af1925050503d805f8114611c33576040519150601f19603f3d011682016040523d82523d5f602084013e611c38565b606091505b50509050806113e4578215611c625783604051634f04dc7d60e11b815260040161071b9190612ad2565b7f4fcbe9ac9cfddb4181f8d8b230f2e182c4064527110192d9f02da207a0ad0a0987878787604051611c979493929190612fdb565b60405180910390a150505050505050565b6001600160a01b038216611cda57604051630b61174360e31b81526001600160a01b038316600482015260240161071b565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15611e6757604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290611d8890889088908790879060040161301c565b6020604051808303815f875af1925050508015611dc2575060408051601f3d908101601f19168201909252611dbf9181019061304e565b60015b611e29573d808015611def576040519150601f19603f3d011682016040523d82523d5f602084013e611df4565b606091505b5080515f03611e2157604051633250574960e11b81526001600160a01b038516600482015260240161071b565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14611e6557604051633250574960e11b81526001600160a01b038516600482015260240161071b565b505b5050505050565b60606040518060600160405280602181526020016131ad60219139905090565b60605f611e9a83612752565b60010190505f816001600160401b03811115611eb857611eb8612c0d565b6040519080825280601f01601f191660200182016040528015611ee2576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084611eec57509392505050565b6106eb8282604051602401611f33929190613069565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526124d5565b611f85604051806060016040528060608152602001606081526020015f81525090565b604080516060810182525f85815260096020529182205481906001600160401b03811115611fb557611fb5612c0d565b604051908082528060200260200182016040528015611fde578160200160208202803683370190505b5081525f868152600960209081526040909120549101906001600160401b0381111561200c5761200c612c0d565b604051908082528060200260200182016040528015612035578160200160208202803683370190505b5081526020015f81525090505f5b5f85815260096020526040902054811015612184575f85815260096020526040812080548390811061207757612077612f3a565b905f5260205f20906002020190505f6103e88260010154876120999190612fc4565b6120a3919061308a565b90508086106121485781546001600160a01b031615612143578154845180516001600160a01b0390921691859081106120de576120de612f3a565b60200260200101906001600160a01b031690816001600160a01b031681525050808460200151848151811061211557612115612f3a565b60200260200101818152505080846040018181516121339190612f84565b9052506121408187612f27565b95505b61217a565b604051634f04dc7d60e11b81526020600482015260066024820152655b707235325d60d01b604482015260640161071b565b5050600101612043565b509392505050565b5f5b82515181101561096057825180515f9190839081106121af576121af612f3a565b60200260200101516001600160a01b0316146122845761223e6040518060400160405280601981526020017f6672616374696f6e616c5061796f757420257320746f202573000000000000008152508460200151838151811061221457612214612f3a565b6020026020010151855f0151848151811061223157612231612f3a565b6020026020010151612492565b61228484845f0151838151811061225757612257612f3a565b60200260200101518560200151848151811061227557612275612f3a565b6020026020010151855f611b82565b60010161218e565b610a928383836040516024016122a4939291906130a9565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b1790526124d5565b6106eb828260405180602001604052805f815250612829565b5f6122fc8264e8d4a51000612fc4565b90508015610a92578034101561233d57604051634f04dc7d60e11b81526020600482015260056024820152645b6531305d60d81b604482015260640161071b565b610a92837f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70315d60e01b8152506001611b82565b808061239b57506001600160a01b03821615155b1561245c575f6123aa8461147e565b90506001600160a01b038316158015906123d65750826001600160a01b0316816001600160a01b031614155b80156123e957506123e78184611025565b155b156124125760405163a9fbf51f60e01b81526001600160a01b038416600482015260240161071b565b811561245a5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b80825d5050565b610a928383836040516024016124aa939291906130cd565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b1790525b610bc581612840565b610d3884848461285f565b6109608484848460405160240161250394939291906130ff565b60408051601f198184030181529190526020810180516001600160e01b03166363fb8bc560e01b1790526124d5565b610bc5816040516024016125469190612ad2565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526124d5565b5f828152600260205260408120546001600160a01b03908116908316156125a1576125a181848661290c565b6001600160a01b038116156125db576125bc5f855f5f612387565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615612609576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f6103e86103ff61267a600d600a612f84565b60075461268a92911c1634612fc4565b611b7d919061308a565b5f828152600c60209081526040808320815180830190925280546001600160a01b031680835260019091015492820192909252908290156126ef576103e88260200151856126e29190612fc4565b6126ec919061308a565b90505b949350505050565b5f828152600c60209081526040918290208251808401845281546001600160a01b031680825260019283015482850152845180860190955260048552635b70325d60e01b9385019390935292610a9292869290918691611b82565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106127905772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106127bc576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106127da57662386f26fc10000830492506010015b6305f5e10083106127f2576305f5e100830492506008015b612710831061280657612710830492506004015b60648310612818576064830492506002015b600a83106106245760010192915050565b6128338383612970565b610a92335f858585611d46565b5f6a636f6e736f6c652e6c6f6790505f5f835160208501845afa505050565b6001600160a01b03821661288857604051633250574960e11b81525f600482015260240161071b565b5f61289483835f611740565b90506001600160a01b0381166128c057604051637e27328960e01b81526004810183905260240161071b565b836001600160a01b0316816001600160a01b031614610960576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161071b565b6129178383836129d1565b610a92576001600160a01b03831661294557604051637e27328960e01b81526004810182905260240161071b565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161071b565b6001600160a01b03821661299957604051633250574960e11b81525f600482015260240161071b565b5f6129a583835f611740565b90506001600160a01b03811615610a92576040516339e3563760e11b81525f600482015260240161071b565b5f6001600160a01b038316158015906126ef5750826001600160a01b0316846001600160a01b03161480612a0a5750612a0a8484611025565b806126ef5750505f908152600460205260409020546001600160a01b03908116911614919050565b5080545f8255600202905f5260205f2090810190610bc591905b80821115612a705780546001600160a01b03191681555f6001820155600201612a4c565b5090565b6001600160e01b031981168114610bc5575f5ffd5b5f60208284031215612a99575f5ffd5b8135610da381612a74565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610da36020830184612aa4565b5f60208284031215612af4575f5ffd5b5035919050565b6001600160a01b0381168114610bc5575f5ffd5b5f5f60408385031215612b20575f5ffd5b8235612b2b81612afb565b946020939093013593505050565b5f5f5f60608486031215612b4b575f5ffd5b8335612b5681612afb565b92506020840135612b6681612afb565b929592945050506040919091013590565b80356001600160401b0381168114610830575f5ffd5b5f5f60408385031215612b9e575f5ffd5b82359150612bae60208401612b77565b90509250929050565b5f60208284031215612bc7575f5ffd5b8135610da381612afb565b5f5f60408385031215612be3575f5ffd5b8235612bee81612afb565b915060208301358015158114612c02575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215612c34575f5ffd5b8435612c3f81612afb565b93506020850135612c4f81612afb565b92506040850135915060608501356001600160401b03811115612c70575f5ffd5b8501601f81018713612c80575f5ffd5b80356001600160401b03811115612c9957612c99612c0d565b604051601f8201601f19908116603f011681016001600160401b0381118282101715612cc757612cc7612c0d565b604052818152828201602001891015612cde575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215612d10575f5ffd5b50508035926020909101359150565b602080825282518282018190525f918401906040840190835b81811015612d56578351835260209384019390920191600101612d38565b509095945050505050565b5f5f60408385031215612d72575f5ffd5b8235612d7d81612afb565b91506020830135612c0281612afb565b5f5f5f5f5f5f5f60c0888a031215612da3575f5ffd5b87359650612db360208901612b77565b95506040880135945060608801359350608088013567ffffffffffffffff1981168114612dde575f5ffd5b925060a08801356001600160401b03811115612df8575f5ffd5b8801601f81018a13612e08575f5ffd5b80356001600160401b03811115612e1d575f5ffd5b8a60208260061b8401011115612e31575f5ffd5b602082019350809250505092959891949750929550565b600181811c90821680612e5c57607f821691505b602082108103612e7a57634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600690820152655b737431355d60d01b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b6001600160401b038181168382160290811690818114612ed657612ed6612ea0565b5092915050565b6020808252600590820152645b7374315d60d81b604082015260600190565b5f81518060208401855e5f93019283525090919050565b5f6126ef612f218386612efc565b84612efc565b8181038181111561062457610624612ea0565b634e487b7160e01b5f52603260045260245ffd5b8135612f5981612afb565b81546001600160a01b0319166001600160a01b03919091161781556020919091013560019190910155565b8082018082111561062457610624612ea0565b606081525f612fa96060830186612aa4565b6001600160a01b039490941660208301525060400152919050565b808202811582820484141761062457610624612ea0565b84815260018060a01b0384166020820152826040820152608060608201525f6130076080830184612aa4565b9695505050505050565b5f610da38284612efc565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061300790830184612aa4565b5f6020828403121561305e575f5ffd5b8151610da381612a74565b604081525f61307b6040830185612aa4565b90508260208301529392505050565b5f826130a457634e487b7160e01b5f52601260045260245ffd5b500490565b606081525f6130bb6060830186612aa4565b60208301949094525060400152919050565b606081525f6130df6060830186612aa4565b6020830194909452506001600160a01b0391909116604090910152919050565b608081525f6131116080830187612aa4565b6001600160a01b039586166020840152604083019490945250921660609092019190915291905056fe64656c65746520746f6b656e20257320666f7220746f6b656e4f776e65722025736d696e74207072696365202573207072696365416e6448617368206166746572207570646174652025732d2d2d2d2d2d2d3e50555243484153452c206d73672e76616c756520257320707269636520257368747470733a2f2f6e66742e6861726d6f6e697a652e736f6369616c2f6e66742f70617953747265616d696e67526576656e756520746f6b656e4f776e6572202573207061796f75742025737075726368617365546f6b656e20746f6b656e4f776e657220257320746f6b656e496420257370617953747265616d696e67526576656e756520746f74616c5061796f7574202573a264697066735822122064e5bed1098f3f0da058126128072c33b2188d37a6eb4af55789e756471718ff64736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
