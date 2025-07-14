export const HARMONIZE_ADDRESS = '0x1A02cDb04a22c76b33004e4E9188820F25D934c4'
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
      "inputs": [],
      "name": "OPTIONS_VERSION",
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
      "name": "deleteMediaStorage",
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
      "name": "getMediaStorage",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "fingerprintHi",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "fingerprintLo",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "storageExpiration",
              "type": "uint256"
            }
          ],
          "internalType": "struct Harmonize.MediaStorage",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOptions",
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
      "name": "getParameters",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "price",
              "type": "uint64"
            },
            {
              "internalType": "bytes24",
              "name": "mediaId",
              "type": "bytes24"
            },
            {
              "internalType": "uint256",
              "name": "mediaHash",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "titleHi",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "titleLo",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Harmonize.TokenParameters",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPartner",
      "outputs": [
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
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPayor",
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
      "inputs": [],
      "name": "getStorageManager",
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
          "name": "hash",
          "type": "uint256"
        },
        {
          "internalType": "bytes24",
          "name": "id",
          "type": "bytes24"
        },
        {
          "internalType": "bytes32",
          "name": "titleHi",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "titleLo",
          "type": "bytes32"
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
        }
      ],
      "name": "payStorageManagementFee",
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
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "fingerprintHi",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "fingerprintLo",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "storageExpiration",
              "type": "uint256"
            }
          ],
          "internalType": "struct Harmonize.MediaStorage",
          "name": "mediaStorage",
          "type": "tuple"
        }
      ],
      "name": "setMediaStorage",
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
          "internalType": "address",
          "name": "stManager",
          "type": "address"
        }
      ],
      "name": "setStorageManager",
      "outputs": [],
      "stateMutability": "nonpayable",
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
  "bytecode": "0x60a060405234801561000f575f5ffd5b50604051806040016040528060098152602001684861726d6f6e697a6560b81b815250604051806040016040528060098152602001684841524d4f4e495a4560b81b815250815f90816100629190610133565b50600161006f8282610133565b505060078054336001600160a01b031991821681179092556006805490911682179055608052506101ed565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100c357607f821691505b6020821081036100e157634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561012e57805f5260205f20601f840160051c8101602085101561010c5750805b601f840160051c820191505b8181101561012b575f8155600101610118565b50505b505050565b81516001600160401b0381111561014c5761014c61009b565b6101608161015a84546100af565b846100e7565b6020601f821160018114610192575f831561017b5750848201515b5f19600385901b1c1916600184901b17845561012b565b5f84815260208120601f198516915b828110156101c157878501518255602094850194600190920191016101a1565b50848210156101de57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b60805161370e6102445f395f818161049f015281816111ba015281816112dc015281816113330152818161147d015281816115b30152818161188d0152818161194601528181611ff30152612120015261370e5ff3fe6080604052600436106101fc575f3560e01c80637d8dad1511610113578063b88d4fde1161009d578063cf63722c1161006d578063cf63722c146106bc578063d9d61655146106cf578063e1a44749146106fb578063e985e9c51461071a578063ffc9969a14610739575f5ffd5b8063b88d4fde1461053c578063c6ceb96b1461055b578063c87b56dd14610689578063cc2ee196146106a8575f5ffd5b806395d89b41116100e357806395d89b41146104c35780639dc29fac146104d7578063a15454ba146104f6578063a22cb46514610509578063b7c4eebd14610528575f5ffd5b80637d8dad15146104295780637fc96619146104485780638805ff2f14610474578063893d20e814610491575f5ffd5b80632ba27019116101945780636352211e116101645780636352211e146103a35780636a2ed85d146103c25780636e995083146103d557806370a08231146103e9578063789c545214610416575f5ffd5b80632ba270191461031157806342842e0e14610324578063506dd50614610343578063525d464514610362575f5ffd5b8063095ea7b3116101cf578063095ea7b3146102ad5780631072cbea146102cc5780631cc2c911146102df57806323b872dd146102f2575f5ffd5b806301ffc9a71461020057806304b675351461023457806306fdde0314610255578063081812fc14610276575b5f5ffd5b34801561020b575f5ffd5b5061021f61021a366004612e9d565b610758565b60405190151581526020015b60405180910390f35b34801561023f575f5ffd5b5061025361024e366004612eb8565b610768565b005b348015610260575f5ffd5b50610269610818565b60405161022b9190612f1b565b348015610281575f5ffd5b50610295610290366004612f2d565b6108a7565b6040516001600160a01b03909116815260200161022b565b3480156102b8575f5ffd5b506102536102c7366004612f58565b6108ce565b6102536102da366004612f58565b6108d9565b6102536102ed366004612f58565b610997565b3480156102fd575f5ffd5b5061025361030c366004612f82565b610a47565b61025361031f366004612fd6565b610aca565b34801561032f575f5ffd5b5061025361033e366004612f82565b610bdc565b34801561034e575f5ffd5b5061025361035d366004612f2d565b610bfb565b34801561036d575f5ffd5b5061038161037c366004612f2d565b610c43565b604080518251815260208084015190820152918101519082015260600161022b565b3480156103ae575f5ffd5b506102956103bd366004612f2d565b610cca565b6102536103d0366004613000565b610cd4565b3480156103e0575f5ffd5b506102956111ae565b3480156103f4575f5ffd5b506104086104033660046130c2565b611208565b60405190815260200161022b565b610253610424366004612f2d565b61124d565b348015610434575f5ffd5b506102536104433660046130c2565b611320565b348015610453575f5ffd5b50610467610462366004612f2d565b6113d7565b60405161022b91906130dd565b34801561047f575f5ffd5b506007546001600160a01b0316610295565b34801561049c575f5ffd5b507f0000000000000000000000000000000000000000000000000000000000000000610295565b3480156104ce575f5ffd5b5061026961145b565b3480156104e2575f5ffd5b506102536104f1366004612f58565b61146a565b610253610504366004612f2d565b61152f565b348015610514575f5ffd5b50610253610523366004613134565b6115f7565b348015610533575f5ffd5b50610408600181565b348015610547575f5ffd5b50610253610556366004613183565b611602565b348015610566575f5ffd5b50610625610575366004612f2d565b6040805160c0810182525f80825260208201819052918101829052606081018290526080810182905260a0810191909152505f908152600b6020908152604091829020825160c08101845281546001600160401b0381168252680100000000000000009004841b67ffffffffffffffff19169281019290925260018101549282019290925260028201546001600160a01b031660608201526003820154608082015260049091015460a082015290565b60405161022b919081516001600160401b0316815260208083015167ffffffffffffffff191690820152604080830151908201526060808301516001600160a01b0316908201526080808301519082015260a0918201519181019190915260c00190565b348015610694575f5ffd5b506102696106a3366004612f2d565b61161a565b3480156106b3575f5ffd5b50600854610408565b6102536106ca366004613261565b61168b565b3480156106da575f5ffd5b506106ee6106e93660046130c2565b611819565b60405161022b9190613281565b348015610706575f5ffd5b50610253610715366004612f2d565b611882565b348015610725575f5ffd5b5061021f6107343660046132b8565b611906565b348015610744575f5ffd5b506102536107533660046130c2565b611933565b5f610762826119e7565b92915050565b6007546001600160a01b0316331461079c57604051634f04dc7d60e11b8152600401610793906132e4565b60405180910390fd5b5f828152600c6020526040902054158015906107b757508035155b156107da57505f908152600c602052604081208181556001810182905560020155565b803515610814575f828152600c60205260409020819061081182828135815560208201356001820155604090910135600290910155565b50505b5050565b60605f805461082690613303565b80601f016020809104026020016040519081016040528092919081815260200182805461085290613303565b801561089d5780601f106108745761010080835404028352916020019161089d565b820191905f5260205f20905b81548152906001019060200180831161088057829003601f168201915b5050505050905090565b5f6108b182611a36565b505f828152600460205260409020546001600160a01b0316610762565b610814828233611a6e565b6108e1611a7b565b6008546001161561090557604051634f04dc7d60e11b81526004016107939061333b565b803361091082610cca565b6001600160a01b03161461094f57604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b6044820152606401610793565b6109593383611aea565b6001600160a01b0383165f9081526009602090815260408220805460018101825590835291200182905561098e338484610bdc565b50610814611bfb565b61099f611a7b565b600854600116156109c357604051634f04dc7d60e11b81526004016107939061333b565b6109e6604051806060016040528060268152602001613691602691398383611c25565b5f818152600b60205260408120546001600160401b03169003610a3457604051634f04dc7d60e11b81526020600482015260056024820152645b6532305d60d81b6044820152606401610793565b610a3f823383611c6c565b610814611bfb565b6001600160a01b038216610a7057604051633250574960e11b81525f6004820152602401610793565b5f610a7c838333611c86565b9050836001600160a01b0316816001600160a01b031614610811576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610793565b610ad2611a7b565b60085460011615610af657604051634f04dc7d60e11b81526004016107939061333b565b8133610b0182610cca565b6001600160a01b031614610b4057604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b6044820152606401610793565b5f838152600b60205260409020805467ffffffffffffffff19166001600160401b038416178155610b708461152f565b7f5c43325359179f4471448fd5c0247053caeec2178ee6378a1a3eb4b2030d31463385610ba186633b9aca0061336f565b604080516001600160a01b03909416845260208401929092526001600160401b03169082015260600160405180910390a15050610814611bfb565b610bf683838360405180602001604052805f815250611602565b505050565b6007546001600160a01b03163314610c2657604051634f04dc7d60e11b8152600401610793906132e4565b5f908152600c602052604081208181556001810182905560020155565b610c6460405180606001604052805f81526020015f81526020015f81525090565b6007546001600160a01b03163314610c8f57604051634f04dc7d60e11b8152600401610793906132e4565b505f818152600c602090815260409182902082516060810184528154815260018201549281019290925260020154918101919091525b919050565b5f61076282611a36565b610cdc611a7b565b60085460011615610d0057604051634f04dc7d60e11b81526004016107939061333b565b323314610d3957604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65305d60e01b604082015260600190565b855f03610d7257604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65315d60e01b604082015260600190565b683635c9adc5dea00000876001600160401b03161115610dbe57604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65325d60e01b604082015260600190565b5f620fffff610dcf6002600a613398565b610dda90600a613398565b610de5906020613398565b610df0906020613398565b610dfb906020613398565b600854901c16905080821115610e3d57604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65335d60e01b604082015260600190565b60095f336001600160a01b03166001600160a01b031681526020019081526020015f2089908060018154018082558091505060019003905f5260205f20015f90919091909150556040518060c00160405280896001600160401b03168152602001876001600160401b0319168152602001888152602001336001600160a01b0316815260200186815260200185815250600b5f8b81526020019081526020015f205f820151815f015f6101000a8154816001600160401b0302191690836001600160401b031602179055506020820151815f0160086101000a8154816001600160c01b03021916908360401c0217905550604082015181600101556060820151816002015f6101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816003015560a08201518160040155905050610fb7604051806060016040528060288152602001613617602891395f8b8152600b60205260409020546001600160401b03808c169116612047565b8115611188575f5b82811015611186575f848483818110610fda57610fda6133ab565b610ff092602060409092020190810191506130c2565b90506001600160a01b038116158061101057506001600160a01b03811630145b8061102357506001600160a01b03811633145b1561105a57604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65345d60e01b604082015260600190565b5f816001600160a01b0316311161109d57604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65355d60e01b604082015260600190565b5f5b8481101561112e578281141580156110ef57508585828181106110c4576110c46133ab565b6110da92602060409092020190810191506130c2565b6001600160a01b0316826001600160a01b0316145b1561112657604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65365d60e01b604082015260600190565b60010161109f565b505f8b8152600a6020526040902085858481811061114e5761114e6133ab565b83546001810185555f948552602090942060409091029290920192600202909101905061117b82826133bf565b505050600101610fbf565b505b611192338a61208e565b61119b896120a7565b506111a4611bfb565b5050505050505050565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146111f857604051634f04dc7d60e11b8152600401610793906133f5565b506006546001600160a01b031690565b5f6001600160a01b038216611232576040516322718ad960e21b81525f6004820152602401610793565b506001600160a01b03165f9081526003602052604090205490565b5f63ffffffff61125f6002600a613398565b61126a90600a613398565b611275906020613398565b611280906020613398565b60085461129592911c1664e8d4a51000613414565b9050801561081457803410156112d657604051634f04dc7d60e11b81526020600482015260056024820152645b6536305d60d81b6044820152606401610793565b610814827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70365d60e01b8152506001612160565b611328611a7b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461137157604051634f04dc7d60e11b8152600401610793906133f5565b6001600160a01b0381166113b157604051634f04dc7d60e11b81526020600482015260066024820152655b737432305d60d01b6044820152606401610793565b600680546001600160a01b0319166001600160a01b0383161790556113d4611bfb565b50565b6060600a5f8381526020019081526020015f20805480602002602001604051908101604052809291908181526020015f905b82821015611450575f848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101611409565b505050509050919050565b60606001805461082690613303565b611472611a7b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146114bb57604051634f04dc7d60e11b8152600401610793906133f5565b6114c58282611aea565b5f818152600c6020908152604080832083815560018082018590556002918201859055600b845282852085815590810185905590810180546001600160a01b031916905560038101849055600401839055600a909152812061152691612e46565b610a3f81612287565b5f63ffffffff6115416002600a613398565b61154c90600a613398565b611557906020613398565b60085461156c92911c1664e8d4a51000613414565b9050801561081457803410156115ad57604051634f04dc7d60e11b81526020600482015260056024820152645b6533355d60d81b6044820152606401610793565b610814827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70355d60e01b8152506001612160565b6108143383836122bf565b61160d848484610a47565b610811338585858561235d565b606061162582611a36565b505f61163b60408051602081019091525f815290565b90505f8151116116595760405180602001604052805f815250611684565b8061166384612485565b604051602001611674929190613442565b6040516020818303038152906040525b9392505050565b611693611a7b565b600854600116156116b757604051634f04dc7d60e11b81526004016107939061333b565b6006546001600160a01b031633146116fa57604051634f04dc7d60e11b81526020600482015260056024820152645b7374325d60d81b6044820152606401610793565b6117326040518060400160405280601681526020017570617953747265616d696e67526576656e756520257360501b81525082612514565b5f61173d8383612559565b905080604001515f14611798576117706040518060600160405280602281526020016136b7602291398260400151612514565b6117988382604051806040016040528060058152602001645b7035315d60d81b815250612783565b5f6117a284610cca565b90506117d66040518060600160405280602b8152602001613666602b9139828460400151866117d19190613456565b611c25565b61180f84828460400151866117eb9190613456565b604051806040016040528060048152602001635b70335d60e01b8152506001612160565b5050610814611bfb565b6001600160a01b0381165f9081526009602090815260409182902080548351818402810184019094528084526060939283018282801561187657602002820191905f5260205f20905b815481526020019060010190808311611862575b50505050509050919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146118cb57604051634f04dc7d60e11b8152600401610793906133f5565b60088190556040518181527f12220fe348bfcd9d89bf856b98667916c5db45a8a2805aa90882d5c85f9c9ba19060200160405180910390a150565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b61193b611a7b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461198457604051634f04dc7d60e11b8152600401610793906133f5565b6001600160a01b0381166119c457604051634f04dc7d60e11b81526020600482015260066024820152655b737432315d60d01b6044820152606401610793565b600780546001600160a01b0319166001600160a01b0383161790556113d4611bfb565b5f6001600160e01b031982166380ac58cd60e01b1480611a1757506001600160e01b03198216635b5e139f60e01b145b8061076257506301ffc9a760e01b6001600160e01b0319831614610762565b5f818152600260205260408120546001600160a01b03168061076257604051637e27328960e01b815260048101849052602401610793565b610bf68383836001612883565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005c15611abb57604051633ee5aeb560e01b815260040160405180910390fd5b611ae860017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005b90612987565b565b816001600160a01b0316611afd82610cca565b6001600160a01b031614611b3c57604051634f04dc7d60e11b81526020600482015260056024820152645b6535315d60d81b6044820152606401610793565b6001600160a01b0382165f90815260096020526040812054905b81811015610811576001600160a01b0384165f908152600960205260409020805484919083908110611b8a57611b8a6133ab565b905f5260205f20015403611bf357611bbb6040518060600160405280602181526020016135f660219139848661298e565b6001600160a01b0384165f908152600960205260409020805482908110611be457611be46133ab565b5f918252602082200155610811565b600101611b56565b611ae85f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00611ae2565b610bf6838383604051602401611c3d93929190613469565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b1790526129d1565b610bf683838360405180602001604052805f8152506129da565b5f6001600854165f14611cac57604051634f04dc7d60e11b81526004016107939061333b565b611ced6040518060400160405280601f81526020017f55706461746520746f20257320746f6b656e49642025732061757468202573008152508585856129e5565b5f838152600260205260408120546001600160a01b031690506001600160a01b03851615801590611d2557506001600160a01b038116155b15611d6a57611d576040518060400160405280600c81526020016b0b4b4b4b4b4b4b4f9352539560a21b815250612a2e565b611d62858585612a71565b915050611684565b6001600160a01b038516158015611d8857506001600160a01b038316155b15611dba57611d576040518060400160405280600c81526020016b169696969696969f212aa92760a11b815250612a2e565b6001600160a01b03851615801590611dda57506001600160a01b03831633145b15611e4b57611e106040518060400160405280601081526020016f169696969696969f2a2920a729a322a960811b815250612a2e565b5f848152600b60205260408120805467ffffffffffffffff19169055611e37868686612a71565b9050611e428561152f565b91506116849050565b5f848152600b602052604081208054909190611e74906001600160401b0316633b9aca0061336f565b6001600160401b03169050611ea260405180606001604052806027815260200161363f602791393483612047565b6001600160a01b038716301480611eb857508034105b15611eee57604051634f04dc7d60e11b81526020600482015260056024820152645b6534305d60d81b6044820152606401610793565b5f868152600b60205260408120805467ffffffffffffffff19169055611f15888883612a71565b90505f6103e86103ff611f2a6002600a613398565b600854611f3a92911c1634613414565b611f449190613496565b90505f611f518234613456565b90505f611f5e8a83612559565b5f8b8152600a60205260408120919250611f789190612e46565b6040810151611f879083613456565b915080604001515f14611fbc57611fbc8a82604051806040016040528060058152602001645b7035305d60d81b815250612783565b611fe78a8884604051806040016040528060058152602001645b7031305d60d81b8152506001612160565b8215612038576120388a7f000000000000000000000000000000000000000000000000000000000000000085604051806040016040528060058152602001645b7031315d60d81b8152506001612160565b50919998505050505050505050565b610bf683838360405160240161205f939291906134b5565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b1790526129d1565b610814828260405180602001604052805f815250612b63565b5f63ffffffff6120b96002600a613398565b6120c490600a613398565b6008546120d992911c1664e8d4a51000613414565b90508015610814578034101561211a57604051634f04dc7d60e11b81526020600482015260056024820152645b6531305d60d81b6044820152606401610793565b610814827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70315d60e01b81525060015b60405184907fbdab63af615e4e2519eb67a8d0c9a6a0b33087aae0f9a7dc98002099f6c01ea6906121989088908490889088906134d9565b60405180910390a15f816001600160a01b031685856040516020016121bd9190612f1b565b60408051601f19818403018152908290526121d79161350f565b5f6040518083038185875af1925050503d805f8114612211576040519150601f19603f3d011682016040523d82523d5f602084013e612216565b606091505b505090508061227e5782156122405783604051634f04dc7d60e11b81526004016107939190612f1b565b7f4fcbe9ac9cfddb4181f8d8b230f2e182c4064527110192d9f02da207a0ad0a098787878760405161227594939291906134d9565b60405180910390a15b50505050505050565b5f6122935f835f611c86565b90506001600160a01b03811661081457604051637e27328960e01b815260048101839052602401610793565b6001600160a01b0382166122f157604051630b61174360e31b81526001600160a01b0383166004820152602401610793565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561247e57604051630a85bd0160e11b81526001600160a01b0384169063150b7a029061239f90889088908790879060040161351a565b6020604051808303815f875af19250505080156123d9575060408051601f3d908101601f191682019092526123d69181019061354c565b60015b612440573d808015612406576040519150601f19603f3d011682016040523d82523d5f602084013e61240b565b606091505b5080515f0361243857604051633250574960e11b81526001600160a01b0385166004820152602401610793565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b1461247c57604051633250574960e11b81526001600160a01b0385166004820152602401610793565b505b5050505050565b60605f61249183612b7a565b60010190505f816001600160401b038111156124af576124af61316f565b6040519080825280601f01601f1916602001820160405280156124d9576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846124e357509392505050565b610814828260405160240161252a929190613567565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526129d1565b61257c604051806060016040528060608152602001606081526020015f81525090565b604080516060810182525f858152600a6020529182205481906001600160401b038111156125ac576125ac61316f565b6040519080825280602002602001820160405280156125d5578160200160208202803683370190505b5081525f868152600a60209081526040909120549101906001600160401b038111156126035761260361316f565b60405190808252806020026020018201604052801561262c578160200160208202803683370190505b5081526020015f81525090505f5b5f858152600a602052604090205481101561277b575f858152600a6020526040812080548390811061266e5761266e6133ab565b905f5260205f20906002020190505f6103e88260010154876126909190613414565b61269a9190613496565b905080861061273f5781546001600160a01b03161561273a578154845180516001600160a01b0390921691859081106126d5576126d56133ab565b60200260200101906001600160a01b031690816001600160a01b031681525050808460200151848151811061270c5761270c6133ab565b602002602001018181525050808460400181815161272a9190613398565b9052506127378187613456565b95505b612771565b604051634f04dc7d60e11b81526020600482015260066024820152655b707235325d60d01b6044820152606401610793565b505060010161263a565b509392505050565b5f5b82515181101561081157825180515f9190839081106127a6576127a66133ab565b60200260200101516001600160a01b03161461287b576128356040518060400160405280601981526020017f6672616374696f6e616c5061796f757420257320746f202573000000000000008152508460200151838151811061280b5761280b6133ab565b6020026020010151855f01518481518110612828576128286133ab565b602002602001015161298e565b61287b84845f0151838151811061284e5761284e6133ab565b60200260200101518560200151848151811061286c5761286c6133ab565b6020026020010151855f612160565b600101612785565b808061289757506001600160a01b03821615155b15612958575f6128a684611a36565b90506001600160a01b038316158015906128d25750826001600160a01b0316816001600160a01b031614155b80156128e557506128e38184611906565b155b1561290e5760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610793565b81156129565783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b80825d5050565b610bf68383836040516024016129a693929190613588565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b1790525b6113d481612c51565b61160d848484612c70565b610811848484846040516024016129ff94939291906135ba565b60408051601f198184030181529190526020810180516001600160e01b03166363fb8bc560e01b1790526129d1565b6113d481604051602401612a429190612f1b565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526129d1565b5f828152600260205260408120546001600160a01b0390811690831615612a9d57612a9d818486612d1d565b6001600160a01b03811615612ad757612ab85f855f5f612883565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615612b05576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b612b6d8383612d81565b610bf6335f85858561235d565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310612bb85772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310612be4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612c0257662386f26fc10000830492506010015b6305f5e1008310612c1a576305f5e100830492506008015b6127108310612c2e57612710830492506004015b60648310612c40576064830492506002015b600a83106107625760010192915050565b5f6a636f6e736f6c652e6c6f6790505f5f835160208501845afa505050565b6001600160a01b038216612c9957604051633250574960e11b81525f6004820152602401610793565b5f612ca583835f611c86565b90506001600160a01b038116612cd157604051637e27328960e01b815260048101839052602401610793565b836001600160a01b0316816001600160a01b031614610811576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610793565b612d28838383612de2565b610bf6576001600160a01b038316612d5657604051637e27328960e01b815260048101829052602401610793565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610793565b6001600160a01b038216612daa57604051633250574960e11b81525f6004820152602401610793565b5f612db683835f611c86565b90506001600160a01b03811615610bf6576040516339e3563760e11b81525f6004820152602401610793565b5f6001600160a01b03831615801590612e3e5750826001600160a01b0316846001600160a01b03161480612e1b5750612e1b8484611906565b80612e3e57505f828152600460205260409020546001600160a01b038481169116145b949350505050565b5080545f8255600202905f5260205f20908101906113d491905b80821115612e845780546001600160a01b03191681555f6001820155600201612e60565b5090565b6001600160e01b0319811681146113d4575f5ffd5b5f60208284031215612ead575f5ffd5b813561168481612e88565b5f5f8284036080811215612eca575f5ffd5b833592506060601f1982011215612edf575f5ffd5b506020830190509250929050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6116846020830184612eed565b5f60208284031215612f3d575f5ffd5b5035919050565b6001600160a01b03811681146113d4575f5ffd5b5f5f60408385031215612f69575f5ffd5b8235612f7481612f44565b946020939093013593505050565b5f5f5f60608486031215612f94575f5ffd5b8335612f9f81612f44565b92506020840135612faf81612f44565b929592945050506040919091013590565b80356001600160401b0381168114610cc5575f5ffd5b5f5f60408385031215612fe7575f5ffd5b82359150612ff760208401612fc0565b90509250929050565b5f5f5f5f5f5f5f5f60e0898b031215613017575f5ffd5b8835975061302760208a01612fc0565b965060408901359550606089013567ffffffffffffffff198116811461304b575f5ffd5b94506080890135935060a0890135925060c08901356001600160401b03811115613073575f5ffd5b8901601f81018b13613083575f5ffd5b80356001600160401b03811115613098575f5ffd5b8b60208260061b84010111156130ac575f5ffd5b989b979a50959850939692959194602001935050565b5f602082840312156130d2575f5ffd5b813561168481612f44565b602080825282518282018190525f918401906040840190835b8181101561312957835180516001600160a01b0316845260209081015181850152909301926040909201916001016130f6565b509095945050505050565b5f5f60408385031215613145575f5ffd5b823561315081612f44565b915060208301358015158114613164575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215613196575f5ffd5b84356131a181612f44565b935060208501356131b181612f44565b92506040850135915060608501356001600160401b038111156131d2575f5ffd5b8501601f810187136131e2575f5ffd5b80356001600160401b038111156131fb576131fb61316f565b604051601f8201601f19908116603f011681016001600160401b03811182821017156132295761322961316f565b604052818152828201602001891015613240575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215613272575f5ffd5b50508035926020909101359150565b602080825282518282018190525f918401906040840190835b8181101561312957835183526020938401939092019160010161329a565b5f5f604083850312156132c9575f5ffd5b82356132d481612f44565b9150602083013561316481612f44565b6020808252600590820152645b7374335d60d81b604082015260600190565b600181811c9082168061331757607f821691505b60208210810361333557634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600690820152655b737431355d60d01b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b6001600160401b0381811683821602908116908181146133915761339161335b565b5092915050565b808201808211156107625761076261335b565b634e487b7160e01b5f52603260045260245ffd5b81356133ca81612f44565b81546001600160a01b0319166001600160a01b03919091161781556020919091013560019190910155565b6020808252600590820152645b7374315d60d81b604082015260600190565b80820281158282048414176107625761076261335b565b5f81518060208401855e5f93019283525090919050565b5f612e3e613450838661342b565b8461342b565b818103818111156107625761076261335b565b606081525f61347b6060830186612eed565b6001600160a01b039490941660208301525060400152919050565b5f826134b057634e487b7160e01b5f52601260045260245ffd5b500490565b606081525f6134c76060830186612eed565b60208301949094525060400152919050565b84815260018060a01b0384166020820152826040820152608060608201525f6135056080830184612eed565b9695505050505050565b5f611684828461342b565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061350590830184612eed565b5f6020828403121561355c575f5ffd5b815161168481612e88565b604081525f6135796040830185612eed565b90508260208301529392505050565b606081525f61359a6060830186612eed565b6020830194909452506001600160a01b0391909116604090910152919050565b608081525f6135cc6080830187612eed565b6001600160a01b039586166020840152604083019490945250921660609092019190915291905056fe64656c65746520746f6b656e20257320666f7220746f6b656e4f776e65722025736d696e7420707269636520257320706172616d6574657273206166746572207570646174652025732d2d2d2d2d2d2d3e50555243484153452c206d73672e76616c756520257320707269636520257370617953747265616d696e67526576656e756520746f6b656e4f776e6572202573207061796f75742025737075726368617365546f6b656e20746f6b656e4f776e657220257320746f6b656e496420257370617953747265616d696e67526576656e756520746f74616c5061796f7574202573a2646970667358221220d933a043a9409552cb45797f894e68de8feaf44db6b60a6bed761b135c6a631964736f6c634300081c0033",
  "deployedBytecode": "0x6080604052600436106101fc575f3560e01c80637d8dad1511610113578063b88d4fde1161009d578063cf63722c1161006d578063cf63722c146106bc578063d9d61655146106cf578063e1a44749146106fb578063e985e9c51461071a578063ffc9969a14610739575f5ffd5b8063b88d4fde1461053c578063c6ceb96b1461055b578063c87b56dd14610689578063cc2ee196146106a8575f5ffd5b806395d89b41116100e357806395d89b41146104c35780639dc29fac146104d7578063a15454ba146104f6578063a22cb46514610509578063b7c4eebd14610528575f5ffd5b80637d8dad15146104295780637fc96619146104485780638805ff2f14610474578063893d20e814610491575f5ffd5b80632ba27019116101945780636352211e116101645780636352211e146103a35780636a2ed85d146103c25780636e995083146103d557806370a08231146103e9578063789c545214610416575f5ffd5b80632ba270191461031157806342842e0e14610324578063506dd50614610343578063525d464514610362575f5ffd5b8063095ea7b3116101cf578063095ea7b3146102ad5780631072cbea146102cc5780631cc2c911146102df57806323b872dd146102f2575f5ffd5b806301ffc9a71461020057806304b675351461023457806306fdde0314610255578063081812fc14610276575b5f5ffd5b34801561020b575f5ffd5b5061021f61021a366004612e9d565b610758565b60405190151581526020015b60405180910390f35b34801561023f575f5ffd5b5061025361024e366004612eb8565b610768565b005b348015610260575f5ffd5b50610269610818565b60405161022b9190612f1b565b348015610281575f5ffd5b50610295610290366004612f2d565b6108a7565b6040516001600160a01b03909116815260200161022b565b3480156102b8575f5ffd5b506102536102c7366004612f58565b6108ce565b6102536102da366004612f58565b6108d9565b6102536102ed366004612f58565b610997565b3480156102fd575f5ffd5b5061025361030c366004612f82565b610a47565b61025361031f366004612fd6565b610aca565b34801561032f575f5ffd5b5061025361033e366004612f82565b610bdc565b34801561034e575f5ffd5b5061025361035d366004612f2d565b610bfb565b34801561036d575f5ffd5b5061038161037c366004612f2d565b610c43565b604080518251815260208084015190820152918101519082015260600161022b565b3480156103ae575f5ffd5b506102956103bd366004612f2d565b610cca565b6102536103d0366004613000565b610cd4565b3480156103e0575f5ffd5b506102956111ae565b3480156103f4575f5ffd5b506104086104033660046130c2565b611208565b60405190815260200161022b565b610253610424366004612f2d565b61124d565b348015610434575f5ffd5b506102536104433660046130c2565b611320565b348015610453575f5ffd5b50610467610462366004612f2d565b6113d7565b60405161022b91906130dd565b34801561047f575f5ffd5b506007546001600160a01b0316610295565b34801561049c575f5ffd5b507f0000000000000000000000000000000000000000000000000000000000000000610295565b3480156104ce575f5ffd5b5061026961145b565b3480156104e2575f5ffd5b506102536104f1366004612f58565b61146a565b610253610504366004612f2d565b61152f565b348015610514575f5ffd5b50610253610523366004613134565b6115f7565b348015610533575f5ffd5b50610408600181565b348015610547575f5ffd5b50610253610556366004613183565b611602565b348015610566575f5ffd5b50610625610575366004612f2d565b6040805160c0810182525f80825260208201819052918101829052606081018290526080810182905260a0810191909152505f908152600b6020908152604091829020825160c08101845281546001600160401b0381168252680100000000000000009004841b67ffffffffffffffff19169281019290925260018101549282019290925260028201546001600160a01b031660608201526003820154608082015260049091015460a082015290565b60405161022b919081516001600160401b0316815260208083015167ffffffffffffffff191690820152604080830151908201526060808301516001600160a01b0316908201526080808301519082015260a0918201519181019190915260c00190565b348015610694575f5ffd5b506102696106a3366004612f2d565b61161a565b3480156106b3575f5ffd5b50600854610408565b6102536106ca366004613261565b61168b565b3480156106da575f5ffd5b506106ee6106e93660046130c2565b611819565b60405161022b9190613281565b348015610706575f5ffd5b50610253610715366004612f2d565b611882565b348015610725575f5ffd5b5061021f6107343660046132b8565b611906565b348015610744575f5ffd5b506102536107533660046130c2565b611933565b5f610762826119e7565b92915050565b6007546001600160a01b0316331461079c57604051634f04dc7d60e11b8152600401610793906132e4565b60405180910390fd5b5f828152600c6020526040902054158015906107b757508035155b156107da57505f908152600c602052604081208181556001810182905560020155565b803515610814575f828152600c60205260409020819061081182828135815560208201356001820155604090910135600290910155565b50505b5050565b60605f805461082690613303565b80601f016020809104026020016040519081016040528092919081815260200182805461085290613303565b801561089d5780601f106108745761010080835404028352916020019161089d565b820191905f5260205f20905b81548152906001019060200180831161088057829003601f168201915b5050505050905090565b5f6108b182611a36565b505f828152600460205260409020546001600160a01b0316610762565b610814828233611a6e565b6108e1611a7b565b6008546001161561090557604051634f04dc7d60e11b81526004016107939061333b565b803361091082610cca565b6001600160a01b03161461094f57604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b6044820152606401610793565b6109593383611aea565b6001600160a01b0383165f9081526009602090815260408220805460018101825590835291200182905561098e338484610bdc565b50610814611bfb565b61099f611a7b565b600854600116156109c357604051634f04dc7d60e11b81526004016107939061333b565b6109e6604051806060016040528060268152602001613691602691398383611c25565b5f818152600b60205260408120546001600160401b03169003610a3457604051634f04dc7d60e11b81526020600482015260056024820152645b6532305d60d81b6044820152606401610793565b610a3f823383611c6c565b610814611bfb565b6001600160a01b038216610a7057604051633250574960e11b81525f6004820152602401610793565b5f610a7c838333611c86565b9050836001600160a01b0316816001600160a01b031614610811576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610793565b610ad2611a7b565b60085460011615610af657604051634f04dc7d60e11b81526004016107939061333b565b8133610b0182610cca565b6001600160a01b031614610b4057604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b6044820152606401610793565b5f838152600b60205260409020805467ffffffffffffffff19166001600160401b038416178155610b708461152f565b7f5c43325359179f4471448fd5c0247053caeec2178ee6378a1a3eb4b2030d31463385610ba186633b9aca0061336f565b604080516001600160a01b03909416845260208401929092526001600160401b03169082015260600160405180910390a15050610814611bfb565b610bf683838360405180602001604052805f815250611602565b505050565b6007546001600160a01b03163314610c2657604051634f04dc7d60e11b8152600401610793906132e4565b5f908152600c602052604081208181556001810182905560020155565b610c6460405180606001604052805f81526020015f81526020015f81525090565b6007546001600160a01b03163314610c8f57604051634f04dc7d60e11b8152600401610793906132e4565b505f818152600c602090815260409182902082516060810184528154815260018201549281019290925260020154918101919091525b919050565b5f61076282611a36565b610cdc611a7b565b60085460011615610d0057604051634f04dc7d60e11b81526004016107939061333b565b323314610d3957604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65305d60e01b604082015260600190565b855f03610d7257604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65315d60e01b604082015260600190565b683635c9adc5dea00000876001600160401b03161115610dbe57604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65325d60e01b604082015260600190565b5f620fffff610dcf6002600a613398565b610dda90600a613398565b610de5906020613398565b610df0906020613398565b610dfb906020613398565b600854901c16905080821115610e3d57604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65335d60e01b604082015260600190565b60095f336001600160a01b03166001600160a01b031681526020019081526020015f2089908060018154018082558091505060019003905f5260205f20015f90919091909150556040518060c00160405280896001600160401b03168152602001876001600160401b0319168152602001888152602001336001600160a01b0316815260200186815260200185815250600b5f8b81526020019081526020015f205f820151815f015f6101000a8154816001600160401b0302191690836001600160401b031602179055506020820151815f0160086101000a8154816001600160c01b03021916908360401c0217905550604082015181600101556060820151816002015f6101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816003015560a08201518160040155905050610fb7604051806060016040528060288152602001613617602891395f8b8152600b60205260409020546001600160401b03808c169116612047565b8115611188575f5b82811015611186575f848483818110610fda57610fda6133ab565b610ff092602060409092020190810191506130c2565b90506001600160a01b038116158061101057506001600160a01b03811630145b8061102357506001600160a01b03811633145b1561105a57604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65345d60e01b604082015260600190565b5f816001600160a01b0316311161109d57604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65355d60e01b604082015260600190565b5f5b8481101561112e578281141580156110ef57508585828181106110c4576110c46133ab565b6110da92602060409092020190810191506130c2565b6001600160a01b0316826001600160a01b0316145b1561112657604051634f04dc7d60e11b8152600401610793906020808252600490820152635b65365d60e01b604082015260600190565b60010161109f565b505f8b8152600a6020526040902085858481811061114e5761114e6133ab565b83546001810185555f948552602090942060409091029290920192600202909101905061117b82826133bf565b505050600101610fbf565b505b611192338a61208e565b61119b896120a7565b506111a4611bfb565b5050505050505050565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146111f857604051634f04dc7d60e11b8152600401610793906133f5565b506006546001600160a01b031690565b5f6001600160a01b038216611232576040516322718ad960e21b81525f6004820152602401610793565b506001600160a01b03165f9081526003602052604090205490565b5f63ffffffff61125f6002600a613398565b61126a90600a613398565b611275906020613398565b611280906020613398565b60085461129592911c1664e8d4a51000613414565b9050801561081457803410156112d657604051634f04dc7d60e11b81526020600482015260056024820152645b6536305d60d81b6044820152606401610793565b610814827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70365d60e01b8152506001612160565b611328611a7b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461137157604051634f04dc7d60e11b8152600401610793906133f5565b6001600160a01b0381166113b157604051634f04dc7d60e11b81526020600482015260066024820152655b737432305d60d01b6044820152606401610793565b600680546001600160a01b0319166001600160a01b0383161790556113d4611bfb565b50565b6060600a5f8381526020019081526020015f20805480602002602001604051908101604052809291908181526020015f905b82821015611450575f848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101611409565b505050509050919050565b60606001805461082690613303565b611472611a7b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146114bb57604051634f04dc7d60e11b8152600401610793906133f5565b6114c58282611aea565b5f818152600c6020908152604080832083815560018082018590556002918201859055600b845282852085815590810185905590810180546001600160a01b031916905560038101849055600401839055600a909152812061152691612e46565b610a3f81612287565b5f63ffffffff6115416002600a613398565b61154c90600a613398565b611557906020613398565b60085461156c92911c1664e8d4a51000613414565b9050801561081457803410156115ad57604051634f04dc7d60e11b81526020600482015260056024820152645b6533355d60d81b6044820152606401610793565b610814827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70355d60e01b8152506001612160565b6108143383836122bf565b61160d848484610a47565b610811338585858561235d565b606061162582611a36565b505f61163b60408051602081019091525f815290565b90505f8151116116595760405180602001604052805f815250611684565b8061166384612485565b604051602001611674929190613442565b6040516020818303038152906040525b9392505050565b611693611a7b565b600854600116156116b757604051634f04dc7d60e11b81526004016107939061333b565b6006546001600160a01b031633146116fa57604051634f04dc7d60e11b81526020600482015260056024820152645b7374325d60d81b6044820152606401610793565b6117326040518060400160405280601681526020017570617953747265616d696e67526576656e756520257360501b81525082612514565b5f61173d8383612559565b905080604001515f14611798576117706040518060600160405280602281526020016136b7602291398260400151612514565b6117988382604051806040016040528060058152602001645b7035315d60d81b815250612783565b5f6117a284610cca565b90506117d66040518060600160405280602b8152602001613666602b9139828460400151866117d19190613456565b611c25565b61180f84828460400151866117eb9190613456565b604051806040016040528060048152602001635b70335d60e01b8152506001612160565b5050610814611bfb565b6001600160a01b0381165f9081526009602090815260409182902080548351818402810184019094528084526060939283018282801561187657602002820191905f5260205f20905b815481526020019060010190808311611862575b50505050509050919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146118cb57604051634f04dc7d60e11b8152600401610793906133f5565b60088190556040518181527f12220fe348bfcd9d89bf856b98667916c5db45a8a2805aa90882d5c85f9c9ba19060200160405180910390a150565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b61193b611a7b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461198457604051634f04dc7d60e11b8152600401610793906133f5565b6001600160a01b0381166119c457604051634f04dc7d60e11b81526020600482015260066024820152655b737432315d60d01b6044820152606401610793565b600780546001600160a01b0319166001600160a01b0383161790556113d4611bfb565b5f6001600160e01b031982166380ac58cd60e01b1480611a1757506001600160e01b03198216635b5e139f60e01b145b8061076257506301ffc9a760e01b6001600160e01b0319831614610762565b5f818152600260205260408120546001600160a01b03168061076257604051637e27328960e01b815260048101849052602401610793565b610bf68383836001612883565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005c15611abb57604051633ee5aeb560e01b815260040160405180910390fd5b611ae860017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005b90612987565b565b816001600160a01b0316611afd82610cca565b6001600160a01b031614611b3c57604051634f04dc7d60e11b81526020600482015260056024820152645b6535315d60d81b6044820152606401610793565b6001600160a01b0382165f90815260096020526040812054905b81811015610811576001600160a01b0384165f908152600960205260409020805484919083908110611b8a57611b8a6133ab565b905f5260205f20015403611bf357611bbb6040518060600160405280602181526020016135f660219139848661298e565b6001600160a01b0384165f908152600960205260409020805482908110611be457611be46133ab565b5f918252602082200155610811565b600101611b56565b611ae85f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00611ae2565b610bf6838383604051602401611c3d93929190613469565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b1790526129d1565b610bf683838360405180602001604052805f8152506129da565b5f6001600854165f14611cac57604051634f04dc7d60e11b81526004016107939061333b565b611ced6040518060400160405280601f81526020017f55706461746520746f20257320746f6b656e49642025732061757468202573008152508585856129e5565b5f838152600260205260408120546001600160a01b031690506001600160a01b03851615801590611d2557506001600160a01b038116155b15611d6a57611d576040518060400160405280600c81526020016b0b4b4b4b4b4b4b4f9352539560a21b815250612a2e565b611d62858585612a71565b915050611684565b6001600160a01b038516158015611d8857506001600160a01b038316155b15611dba57611d576040518060400160405280600c81526020016b169696969696969f212aa92760a11b815250612a2e565b6001600160a01b03851615801590611dda57506001600160a01b03831633145b15611e4b57611e106040518060400160405280601081526020016f169696969696969f2a2920a729a322a960811b815250612a2e565b5f848152600b60205260408120805467ffffffffffffffff19169055611e37868686612a71565b9050611e428561152f565b91506116849050565b5f848152600b602052604081208054909190611e74906001600160401b0316633b9aca0061336f565b6001600160401b03169050611ea260405180606001604052806027815260200161363f602791393483612047565b6001600160a01b038716301480611eb857508034105b15611eee57604051634f04dc7d60e11b81526020600482015260056024820152645b6534305d60d81b6044820152606401610793565b5f868152600b60205260408120805467ffffffffffffffff19169055611f15888883612a71565b90505f6103e86103ff611f2a6002600a613398565b600854611f3a92911c1634613414565b611f449190613496565b90505f611f518234613456565b90505f611f5e8a83612559565b5f8b8152600a60205260408120919250611f789190612e46565b6040810151611f879083613456565b915080604001515f14611fbc57611fbc8a82604051806040016040528060058152602001645b7035305d60d81b815250612783565b611fe78a8884604051806040016040528060058152602001645b7031305d60d81b8152506001612160565b8215612038576120388a7f000000000000000000000000000000000000000000000000000000000000000085604051806040016040528060058152602001645b7031315d60d81b8152506001612160565b50919998505050505050505050565b610bf683838360405160240161205f939291906134b5565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b1790526129d1565b610814828260405180602001604052805f815250612b63565b5f63ffffffff6120b96002600a613398565b6120c490600a613398565b6008546120d992911c1664e8d4a51000613414565b90508015610814578034101561211a57604051634f04dc7d60e11b81526020600482015260056024820152645b6531305d60d81b6044820152606401610793565b610814827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70315d60e01b81525060015b60405184907fbdab63af615e4e2519eb67a8d0c9a6a0b33087aae0f9a7dc98002099f6c01ea6906121989088908490889088906134d9565b60405180910390a15f816001600160a01b031685856040516020016121bd9190612f1b565b60408051601f19818403018152908290526121d79161350f565b5f6040518083038185875af1925050503d805f8114612211576040519150601f19603f3d011682016040523d82523d5f602084013e612216565b606091505b505090508061227e5782156122405783604051634f04dc7d60e11b81526004016107939190612f1b565b7f4fcbe9ac9cfddb4181f8d8b230f2e182c4064527110192d9f02da207a0ad0a098787878760405161227594939291906134d9565b60405180910390a15b50505050505050565b5f6122935f835f611c86565b90506001600160a01b03811661081457604051637e27328960e01b815260048101839052602401610793565b6001600160a01b0382166122f157604051630b61174360e31b81526001600160a01b0383166004820152602401610793565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561247e57604051630a85bd0160e11b81526001600160a01b0384169063150b7a029061239f90889088908790879060040161351a565b6020604051808303815f875af19250505080156123d9575060408051601f3d908101601f191682019092526123d69181019061354c565b60015b612440573d808015612406576040519150601f19603f3d011682016040523d82523d5f602084013e61240b565b606091505b5080515f0361243857604051633250574960e11b81526001600160a01b0385166004820152602401610793565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b1461247c57604051633250574960e11b81526001600160a01b0385166004820152602401610793565b505b5050505050565b60605f61249183612b7a565b60010190505f816001600160401b038111156124af576124af61316f565b6040519080825280601f01601f1916602001820160405280156124d9576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846124e357509392505050565b610814828260405160240161252a929190613567565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526129d1565b61257c604051806060016040528060608152602001606081526020015f81525090565b604080516060810182525f858152600a6020529182205481906001600160401b038111156125ac576125ac61316f565b6040519080825280602002602001820160405280156125d5578160200160208202803683370190505b5081525f868152600a60209081526040909120549101906001600160401b038111156126035761260361316f565b60405190808252806020026020018201604052801561262c578160200160208202803683370190505b5081526020015f81525090505f5b5f858152600a602052604090205481101561277b575f858152600a6020526040812080548390811061266e5761266e6133ab565b905f5260205f20906002020190505f6103e88260010154876126909190613414565b61269a9190613496565b905080861061273f5781546001600160a01b03161561273a578154845180516001600160a01b0390921691859081106126d5576126d56133ab565b60200260200101906001600160a01b031690816001600160a01b031681525050808460200151848151811061270c5761270c6133ab565b602002602001018181525050808460400181815161272a9190613398565b9052506127378187613456565b95505b612771565b604051634f04dc7d60e11b81526020600482015260066024820152655b707235325d60d01b6044820152606401610793565b505060010161263a565b509392505050565b5f5b82515181101561081157825180515f9190839081106127a6576127a66133ab565b60200260200101516001600160a01b03161461287b576128356040518060400160405280601981526020017f6672616374696f6e616c5061796f757420257320746f202573000000000000008152508460200151838151811061280b5761280b6133ab565b6020026020010151855f01518481518110612828576128286133ab565b602002602001015161298e565b61287b84845f0151838151811061284e5761284e6133ab565b60200260200101518560200151848151811061286c5761286c6133ab565b6020026020010151855f612160565b600101612785565b808061289757506001600160a01b03821615155b15612958575f6128a684611a36565b90506001600160a01b038316158015906128d25750826001600160a01b0316816001600160a01b031614155b80156128e557506128e38184611906565b155b1561290e5760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610793565b81156129565783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b80825d5050565b610bf68383836040516024016129a693929190613588565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b1790525b6113d481612c51565b61160d848484612c70565b610811848484846040516024016129ff94939291906135ba565b60408051601f198184030181529190526020810180516001600160e01b03166363fb8bc560e01b1790526129d1565b6113d481604051602401612a429190612f1b565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526129d1565b5f828152600260205260408120546001600160a01b0390811690831615612a9d57612a9d818486612d1d565b6001600160a01b03811615612ad757612ab85f855f5f612883565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615612b05576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b612b6d8383612d81565b610bf6335f85858561235d565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310612bb85772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310612be4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612c0257662386f26fc10000830492506010015b6305f5e1008310612c1a576305f5e100830492506008015b6127108310612c2e57612710830492506004015b60648310612c40576064830492506002015b600a83106107625760010192915050565b5f6a636f6e736f6c652e6c6f6790505f5f835160208501845afa505050565b6001600160a01b038216612c9957604051633250574960e11b81525f6004820152602401610793565b5f612ca583835f611c86565b90506001600160a01b038116612cd157604051637e27328960e01b815260048101839052602401610793565b836001600160a01b0316816001600160a01b031614610811576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610793565b612d28838383612de2565b610bf6576001600160a01b038316612d5657604051637e27328960e01b815260048101829052602401610793565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610793565b6001600160a01b038216612daa57604051633250574960e11b81525f6004820152602401610793565b5f612db683835f611c86565b90506001600160a01b03811615610bf6576040516339e3563760e11b81525f6004820152602401610793565b5f6001600160a01b03831615801590612e3e5750826001600160a01b0316846001600160a01b03161480612e1b5750612e1b8484611906565b80612e3e57505f828152600460205260409020546001600160a01b038481169116145b949350505050565b5080545f8255600202905f5260205f20908101906113d491905b80821115612e845780546001600160a01b03191681555f6001820155600201612e60565b5090565b6001600160e01b0319811681146113d4575f5ffd5b5f60208284031215612ead575f5ffd5b813561168481612e88565b5f5f8284036080811215612eca575f5ffd5b833592506060601f1982011215612edf575f5ffd5b506020830190509250929050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6116846020830184612eed565b5f60208284031215612f3d575f5ffd5b5035919050565b6001600160a01b03811681146113d4575f5ffd5b5f5f60408385031215612f69575f5ffd5b8235612f7481612f44565b946020939093013593505050565b5f5f5f60608486031215612f94575f5ffd5b8335612f9f81612f44565b92506020840135612faf81612f44565b929592945050506040919091013590565b80356001600160401b0381168114610cc5575f5ffd5b5f5f60408385031215612fe7575f5ffd5b82359150612ff760208401612fc0565b90509250929050565b5f5f5f5f5f5f5f5f60e0898b031215613017575f5ffd5b8835975061302760208a01612fc0565b965060408901359550606089013567ffffffffffffffff198116811461304b575f5ffd5b94506080890135935060a0890135925060c08901356001600160401b03811115613073575f5ffd5b8901601f81018b13613083575f5ffd5b80356001600160401b03811115613098575f5ffd5b8b60208260061b84010111156130ac575f5ffd5b989b979a50959850939692959194602001935050565b5f602082840312156130d2575f5ffd5b813561168481612f44565b602080825282518282018190525f918401906040840190835b8181101561312957835180516001600160a01b0316845260209081015181850152909301926040909201916001016130f6565b509095945050505050565b5f5f60408385031215613145575f5ffd5b823561315081612f44565b915060208301358015158114613164575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215613196575f5ffd5b84356131a181612f44565b935060208501356131b181612f44565b92506040850135915060608501356001600160401b038111156131d2575f5ffd5b8501601f810187136131e2575f5ffd5b80356001600160401b038111156131fb576131fb61316f565b604051601f8201601f19908116603f011681016001600160401b03811182821017156132295761322961316f565b604052818152828201602001891015613240575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215613272575f5ffd5b50508035926020909101359150565b602080825282518282018190525f918401906040840190835b8181101561312957835183526020938401939092019160010161329a565b5f5f604083850312156132c9575f5ffd5b82356132d481612f44565b9150602083013561316481612f44565b6020808252600590820152645b7374335d60d81b604082015260600190565b600181811c9082168061331757607f821691505b60208210810361333557634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600690820152655b737431355d60d01b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b6001600160401b0381811683821602908116908181146133915761339161335b565b5092915050565b808201808211156107625761076261335b565b634e487b7160e01b5f52603260045260245ffd5b81356133ca81612f44565b81546001600160a01b0319166001600160a01b03919091161781556020919091013560019190910155565b6020808252600590820152645b7374315d60d81b604082015260600190565b80820281158282048414176107625761076261335b565b5f81518060208401855e5f93019283525090919050565b5f612e3e613450838661342b565b8461342b565b818103818111156107625761076261335b565b606081525f61347b6060830186612eed565b6001600160a01b039490941660208301525060400152919050565b5f826134b057634e487b7160e01b5f52601260045260245ffd5b500490565b606081525f6134c76060830186612eed565b60208301949094525060400152919050565b84815260018060a01b0384166020820152826040820152608060608201525f6135056080830184612eed565b9695505050505050565b5f611684828461342b565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061350590830184612eed565b5f6020828403121561355c575f5ffd5b815161168481612e88565b604081525f6135796040830185612eed565b90508260208301529392505050565b606081525f61359a6060830186612eed565b6020830194909452506001600160a01b0391909116604090910152919050565b608081525f6135cc6080830187612eed565b6001600160a01b039586166020840152604083019490945250921660609092019190915291905056fe64656c65746520746f6b656e20257320666f7220746f6b656e4f776e65722025736d696e7420707269636520257320706172616d6574657273206166746572207570646174652025732d2d2d2d2d2d2d3e50555243484153452c206d73672e76616c756520257320707269636520257370617953747265616d696e67526576656e756520746f6b656e4f776e6572202573207061796f75742025737075726368617365546f6b656e20746f6b656e4f776e657220257320746f6b656e496420257370617953747265616d696e67526576656e756520746f74616c5061796f7574202573a2646970667358221220d933a043a9409552cb45797f894e68de8feaf44db6b60a6bed761b135c6a631964736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
