export const HARMONIZE_ADDRESS = '0xa80abb3FdF64e9E4923424a6052EBebF8D787606'
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
  "bytecode": "0x60a060405234801561000f575f5ffd5b50604051806040016040528060098152602001684861726d6f6e697a6560b81b815250604051806040016040528060098152602001684841524d4f4e495a4560b81b815250815f90816100629190610133565b50600161006f8282610133565b505060078054336001600160a01b031991821681179092556006805490911682179055608052506101ed565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100c357607f821691505b6020821081036100e157634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561012e57805f5260205f20601f840160051c8101602085101561010c5750805b601f840160051c820191505b8181101561012b575f8155600101610118565b50505b505050565b81516001600160401b0381111561014c5761014c61009b565b6101608161015a84546100af565b846100e7565b6020601f821160018114610192575f831561017b5750848201515b5f19600385901b1c1916600184901b17845561012b565b5f84815260208120601f198516915b828110156101c157878501518255602094850194600190920191016101a1565b50848210156101de57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6080516137b06102525f395f8181610496015281816111b1015281816112d30152818161132a0152818161145e015281816114ce01528181611604015281816116e80152818161192f015281816119e80152818161209501526121c201526137b05ff3fe6080604052600436106101fc575f3560e01c80637d8dad1511610113578063b88d4fde1161009d578063cf63722c1161006d578063cf63722c146106b3578063d9d61655146106c6578063e1a44749146106f2578063e985e9c514610711578063ffc9969a14610730575f5ffd5b8063b88d4fde14610533578063c6ceb96b14610552578063c87b56dd14610680578063cc2ee1961461069f575f5ffd5b806395d89b41116100e357806395d89b41146104ba5780639dc29fac146104ce578063a15454ba146104ed578063a22cb46514610500578063b7c4eebd1461051f575f5ffd5b80637d8dad15146104295780637fc96619146104485780638805ff2f14610474578063893d20e814610488575f5ffd5b80632ba27019116101945780636352211e116101645780636352211e146103a35780636a2ed85d146103c25780636e995083146103d557806370a08231146103e9578063789c545214610416575f5ffd5b80632ba270191461031157806342842e0e14610324578063506dd50614610343578063525d464514610362575f5ffd5b8063095ea7b3116101cf578063095ea7b3146102ad5780631072cbea146102cc5780631cc2c911146102df57806323b872dd146102f2575f5ffd5b806301ffc9a71461020057806304b675351461023457806306fdde0314610255578063081812fc14610276575b5f5ffd5b34801561020b575f5ffd5b5061021f61021a366004612f3f565b61074f565b60405190151581526020015b60405180910390f35b34801561023f575f5ffd5b5061025361024e366004612f5a565b61075f565b005b348015610260575f5ffd5b5061026961080f565b60405161022b9190612fbd565b348015610281575f5ffd5b50610295610290366004612fcf565b61089e565b6040516001600160a01b03909116815260200161022b565b3480156102b8575f5ffd5b506102536102c7366004612ffa565b6108c5565b6102536102da366004612ffa565b6108d0565b6102536102ed366004612ffa565b61098e565b3480156102fd575f5ffd5b5061025361030c366004613024565b610a3e565b61025361031f366004613078565b610ac1565b34801561032f575f5ffd5b5061025361033e366004613024565b610bd3565b34801561034e575f5ffd5b5061025361035d366004612fcf565b610bf2565b34801561036d575f5ffd5b5061038161037c366004612fcf565b610c3a565b604080518251815260208084015190820152918101519082015260600161022b565b3480156103ae575f5ffd5b506102956103bd366004612fcf565b610cc1565b6102536103d03660046130a2565b610ccb565b3480156103e0575f5ffd5b506102956111a5565b3480156103f4575f5ffd5b50610408610403366004613164565b6111ff565b60405190815260200161022b565b610253610424366004612fcf565b611244565b348015610434575f5ffd5b50610253610443366004613164565b611317565b348015610453575f5ffd5b50610467610462366004612fcf565b6113ce565b60405161022b919061317f565b34801561047f575f5ffd5b50610295611452565b348015610493575f5ffd5b507f0000000000000000000000000000000000000000000000000000000000000000610295565b3480156104c5575f5ffd5b506102696114ac565b3480156104d9575f5ffd5b506102536104e8366004612ffa565b6114bb565b6102536104fb366004612fcf565b611580565b34801561050b575f5ffd5b5061025361051a3660046131d6565b611648565b34801561052a575f5ffd5b50610408600181565b34801561053e575f5ffd5b5061025361054d366004613225565b611653565b34801561055d575f5ffd5b5061061c61056c366004612fcf565b6040805160c0810182525f80825260208201819052918101829052606081018290526080810182905260a0810191909152505f908152600b6020908152604091829020825160c08101845281546001600160401b0381168252680100000000000000009004841b67ffffffffffffffff19169281019290925260018101549282019290925260028201546001600160a01b031660608201526003820154608082015260049091015460a082015290565b60405161022b919081516001600160401b0316815260208083015167ffffffffffffffff191690820152604080830151908201526060808301516001600160a01b0316908201526080808301519082015260a0918201519181019190915260c00190565b34801561068b575f5ffd5b5061026961069a366004612fcf565b61166b565b3480156106aa575f5ffd5b506104086116dc565b6102536106c1366004613303565b61172d565b3480156106d1575f5ffd5b506106e56106e0366004613164565b6118bb565b60405161022b9190613323565b3480156106fd575f5ffd5b5061025361070c366004612fcf565b611924565b34801561071c575f5ffd5b5061021f61072b36600461335a565b6119a8565b34801561073b575f5ffd5b5061025361074a366004613164565b6119d5565b5f61075982611a89565b92915050565b6007546001600160a01b0316331461079357604051634f04dc7d60e11b815260040161078a90613386565b60405180910390fd5b5f828152600c6020526040902054158015906107ae57508035155b156107d157505f908152600c602052604081208181556001810182905560020155565b80351561080b575f828152600c60205260409020819061080882828135815560208201356001820155604090910135600290910155565b50505b5050565b60605f805461081d906133a5565b80601f0160208091040260200160405190810160405280929190818152602001828054610849906133a5565b80156108945780601f1061086b57610100808354040283529160200191610894565b820191905f5260205f20905b81548152906001019060200180831161087757829003601f168201915b5050505050905090565b5f6108a882611ad8565b505f828152600460205260409020546001600160a01b0316610759565b61080b828233611b10565b6108d8611b1d565b600854600116156108fc57604051634f04dc7d60e11b815260040161078a906133dd565b803361090782610cc1565b6001600160a01b03161461094657604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b604482015260640161078a565b6109503383611b8c565b6001600160a01b0383165f90815260096020908152604082208054600181018255908352912001829055610985338484610bd3565b5061080b611c9d565b610996611b1d565b600854600116156109ba57604051634f04dc7d60e11b815260040161078a906133dd565b6109dd604051806060016040528060268152602001613733602691398383611cc7565b5f818152600b60205260408120546001600160401b03169003610a2b57604051634f04dc7d60e11b81526020600482015260056024820152645b6532305d60d81b604482015260640161078a565b610a36823383611d0e565b61080b611c9d565b6001600160a01b038216610a6757604051633250574960e11b81525f600482015260240161078a565b5f610a73838333611d28565b9050836001600160a01b0316816001600160a01b031614610808576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161078a565b610ac9611b1d565b60085460011615610aed57604051634f04dc7d60e11b815260040161078a906133dd565b8133610af882610cc1565b6001600160a01b031614610b3757604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b604482015260640161078a565b5f838152600b60205260409020805467ffffffffffffffff19166001600160401b038416178155610b6784611580565b7f5c43325359179f4471448fd5c0247053caeec2178ee6378a1a3eb4b2030d31463385610b9886633b9aca00613411565b604080516001600160a01b03909416845260208401929092526001600160401b03169082015260600160405180910390a1505061080b611c9d565b610bed83838360405180602001604052805f815250611653565b505050565b6007546001600160a01b03163314610c1d57604051634f04dc7d60e11b815260040161078a90613386565b5f908152600c602052604081208181556001810182905560020155565b610c5b60405180606001604052805f81526020015f81526020015f81525090565b6007546001600160a01b03163314610c8657604051634f04dc7d60e11b815260040161078a90613386565b505f818152600c602090815260409182902082516060810184528154815260018201549281019290925260020154918101919091525b919050565b5f61075982611ad8565b610cd3611b1d565b60085460011615610cf757604051634f04dc7d60e11b815260040161078a906133dd565b323314610d3057604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65305d60e01b604082015260600190565b855f03610d6957604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65315d60e01b604082015260600190565b683635c9adc5dea00000876001600160401b03161115610db557604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65325d60e01b604082015260600190565b5f620fffff610dc66002600a61343a565b610dd190600a61343a565b610ddc90602061343a565b610de790602061343a565b610df290602061343a565b600854901c16905080821115610e3457604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65335d60e01b604082015260600190565b60095f336001600160a01b03166001600160a01b031681526020019081526020015f2089908060018154018082558091505060019003905f5260205f20015f90919091909150556040518060c00160405280896001600160401b03168152602001876001600160401b0319168152602001888152602001336001600160a01b0316815260200186815260200185815250600b5f8b81526020019081526020015f205f820151815f015f6101000a8154816001600160401b0302191690836001600160401b031602179055506020820151815f0160086101000a8154816001600160c01b03021916908360401c0217905550604082015181600101556060820151816002015f6101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816003015560a08201518160040155905050610fae6040518060600160405280602881526020016136b9602891395f8b8152600b60205260409020546001600160401b03808c1691166120e9565b811561117f575f5b8281101561117d575f848483818110610fd157610fd161344d565b610fe79260206040909202019081019150613164565b90506001600160a01b038116158061100757506001600160a01b03811630145b8061101a57506001600160a01b03811633145b1561105157604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65345d60e01b604082015260600190565b5f816001600160a01b0316311161109457604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65355d60e01b604082015260600190565b5f5b84811015611125578281141580156110e657508585828181106110bb576110bb61344d565b6110d19260206040909202019081019150613164565b6001600160a01b0316826001600160a01b0316145b1561111d57604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65365d60e01b604082015260600190565b600101611096565b505f8b8152600a602052604090208585848181106111455761114561344d565b83546001810185555f94855260209094206040909102929092019260020290910190506111728282613461565b505050600101610fb6565b505b611189338a612130565b61119289612149565b5061119b611c9d565b5050505050505050565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146111ef57604051634f04dc7d60e11b815260040161078a90613497565b506006546001600160a01b031690565b5f6001600160a01b038216611229576040516322718ad960e21b81525f600482015260240161078a565b506001600160a01b03165f9081526003602052604090205490565b5f63ffffffff6112566002600a61343a565b61126190600a61343a565b61126c90602061343a565b61127790602061343a565b60085461128c92911c1664e8d4a510006134b6565b9050801561080b57803410156112cd57604051634f04dc7d60e11b81526020600482015260056024820152645b6536305d60d81b604482015260640161078a565b61080b827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70365d60e01b8152506001612202565b61131f611b1d565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461136857604051634f04dc7d60e11b815260040161078a90613497565b6001600160a01b0381166113a857604051634f04dc7d60e11b81526020600482015260066024820152655b737432305d60d01b604482015260640161078a565b600680546001600160a01b0319166001600160a01b0383161790556113cb611c9d565b50565b6060600a5f8381526020019081526020015f20805480602002602001604051908101604052809291908181526020015f905b82821015611447575f848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101611400565b505050509050919050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461149c57604051634f04dc7d60e11b815260040161078a90613497565b506007546001600160a01b031690565b60606001805461081d906133a5565b6114c3611b1d565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461150c57604051634f04dc7d60e11b815260040161078a90613497565b6115168282611b8c565b5f818152600c6020908152604080832083815560018082018590556002918201859055600b845282852085815590810185905590810180546001600160a01b031916905560038101849055600401839055600a909152812061157791612ee8565b610a3681612329565b5f63ffffffff6115926002600a61343a565b61159d90600a61343a565b6115a890602061343a565b6008546115bd92911c1664e8d4a510006134b6565b9050801561080b57803410156115fe57604051634f04dc7d60e11b81526020600482015260056024820152645b6533355d60d81b604482015260640161078a565b61080b827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70355d60e01b8152506001612202565b61080b338383612361565b61165e848484610a3e565b61080833858585856123ff565b606061167682611ad8565b505f61168c60408051602081019091525f815290565b90505f8151116116aa5760405180602001604052805f8152506116d5565b806116b484612527565b6040516020016116c59291906134e4565b6040516020818303038152906040525b9392505050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461172657604051634f04dc7d60e11b815260040161078a90613497565b5060085490565b611735611b1d565b6008546001161561175957604051634f04dc7d60e11b815260040161078a906133dd565b6006546001600160a01b0316331461179c57604051634f04dc7d60e11b81526020600482015260056024820152645b7374325d60d81b604482015260640161078a565b6117d46040518060400160405280601681526020017570617953747265616d696e67526576656e756520257360501b815250826125b6565b5f6117df83836125fb565b905080604001515f1461183a576118126040518060600160405280602281526020016137596022913982604001516125b6565b61183a8382604051806040016040528060058152602001645b7035315d60d81b815250612825565b5f61184484610cc1565b90506118786040518060600160405280602b8152602001613708602b91398284604001518661187391906134f8565b611cc7565b6118b1848284604001518661188d91906134f8565b604051806040016040528060048152602001635b70335d60e01b8152506001612202565b505061080b611c9d565b6001600160a01b0381165f9081526009602090815260409182902080548351818402810184019094528084526060939283018282801561191857602002820191905f5260205f20905b815481526020019060010190808311611904575b50505050509050919050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461196d57604051634f04dc7d60e11b815260040161078a90613497565b60088190556040518181527f12220fe348bfcd9d89bf856b98667916c5db45a8a2805aa90882d5c85f9c9ba19060200160405180910390a150565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b6119dd611b1d565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611a2657604051634f04dc7d60e11b815260040161078a90613497565b6001600160a01b038116611a6657604051634f04dc7d60e11b81526020600482015260066024820152655b737432315d60d01b604482015260640161078a565b600780546001600160a01b0319166001600160a01b0383161790556113cb611c9d565b5f6001600160e01b031982166380ac58cd60e01b1480611ab957506001600160e01b03198216635b5e139f60e01b145b8061075957506301ffc9a760e01b6001600160e01b0319831614610759565b5f818152600260205260408120546001600160a01b03168061075957604051637e27328960e01b81526004810184905260240161078a565b610bed8383836001612925565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005c15611b5d57604051633ee5aeb560e01b815260040160405180910390fd5b611b8a60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005b90612a29565b565b816001600160a01b0316611b9f82610cc1565b6001600160a01b031614611bde57604051634f04dc7d60e11b81526020600482015260056024820152645b6535315d60d81b604482015260640161078a565b6001600160a01b0382165f90815260096020526040812054905b81811015610808576001600160a01b0384165f908152600960205260409020805484919083908110611c2c57611c2c61344d565b905f5260205f20015403611c9557611c5d604051806060016040528060218152602001613698602191398486612a30565b6001600160a01b0384165f908152600960205260409020805482908110611c8657611c8661344d565b5f918252602082200155610808565b600101611bf8565b611b8a5f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00611b84565b610bed838383604051602401611cdf9392919061350b565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b179052612a73565b610bed83838360405180602001604052805f815250612a7c565b5f6001600854165f14611d4e57604051634f04dc7d60e11b815260040161078a906133dd565b611d8f6040518060400160405280601f81526020017f55706461746520746f20257320746f6b656e4964202573206175746820257300815250858585612a87565b5f838152600260205260408120546001600160a01b031690506001600160a01b03851615801590611dc757506001600160a01b038116155b15611e0c57611df96040518060400160405280600c81526020016b0b4b4b4b4b4b4b4f9352539560a21b815250612ad0565b611e04858585612b13565b9150506116d5565b6001600160a01b038516158015611e2a57506001600160a01b038316155b15611e5c57611df96040518060400160405280600c81526020016b169696969696969f212aa92760a11b815250612ad0565b6001600160a01b03851615801590611e7c57506001600160a01b03831633145b15611eed57611eb26040518060400160405280601081526020016f169696969696969f2a2920a729a322a960811b815250612ad0565b5f848152600b60205260408120805467ffffffffffffffff19169055611ed9868686612b13565b9050611ee485611580565b91506116d59050565b5f848152600b602052604081208054909190611f16906001600160401b0316633b9aca00613411565b6001600160401b03169050611f446040518060600160405280602781526020016136e16027913934836120e9565b6001600160a01b038716301480611f5a57508034105b15611f9057604051634f04dc7d60e11b81526020600482015260056024820152645b6534305d60d81b604482015260640161078a565b5f868152600b60205260408120805467ffffffffffffffff19169055611fb7888883612b13565b90505f6103e86103ff611fcc6002600a61343a565b600854611fdc92911c16346134b6565b611fe69190613538565b90505f611ff382346134f8565b90505f6120008a836125fb565b5f8b8152600a6020526040812091925061201a9190612ee8565b604081015161202990836134f8565b915080604001515f1461205e5761205e8a82604051806040016040528060058152602001645b7035305d60d81b815250612825565b6120898a8884604051806040016040528060058152602001645b7031305d60d81b8152506001612202565b82156120da576120da8a7f000000000000000000000000000000000000000000000000000000000000000085604051806040016040528060058152602001645b7031315d60d81b8152506001612202565b50919998505050505050505050565b610bed83838360405160240161210193929190613557565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b179052612a73565b61080b828260405180602001604052805f815250612c05565b5f63ffffffff61215b6002600a61343a565b61216690600a61343a565b60085461217b92911c1664e8d4a510006134b6565b9050801561080b57803410156121bc57604051634f04dc7d60e11b81526020600482015260056024820152645b6531305d60d81b604482015260640161078a565b61080b827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70315d60e01b81525060015b60405184907fbdab63af615e4e2519eb67a8d0c9a6a0b33087aae0f9a7dc98002099f6c01ea69061223a90889084908890889061357b565b60405180910390a15f816001600160a01b0316858560405160200161225f9190612fbd565b60408051601f1981840301815290829052612279916135b1565b5f6040518083038185875af1925050503d805f81146122b3576040519150601f19603f3d011682016040523d82523d5f602084013e6122b8565b606091505b50509050806123205782156122e25783604051634f04dc7d60e11b815260040161078a9190612fbd565b7f4fcbe9ac9cfddb4181f8d8b230f2e182c4064527110192d9f02da207a0ad0a0987878787604051612317949392919061357b565b60405180910390a15b50505050505050565b5f6123355f835f611d28565b90506001600160a01b03811661080b57604051637e27328960e01b81526004810183905260240161078a565b6001600160a01b03821661239357604051630b61174360e31b81526001600160a01b038316600482015260240161078a565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561252057604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906124419088908890879087906004016135bc565b6020604051808303815f875af192505050801561247b575060408051601f3d908101601f19168201909252612478918101906135ee565b60015b6124e2573d8080156124a8576040519150601f19603f3d011682016040523d82523d5f602084013e6124ad565b606091505b5080515f036124da57604051633250574960e11b81526001600160a01b038516600482015260240161078a565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b1461251e57604051633250574960e11b81526001600160a01b038516600482015260240161078a565b505b5050505050565b60605f61253383612c1c565b60010190505f816001600160401b0381111561255157612551613211565b6040519080825280601f01601f19166020018201604052801561257b576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461258557509392505050565b61080b82826040516024016125cc929190613609565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052612a73565b61261e604051806060016040528060608152602001606081526020015f81525090565b604080516060810182525f858152600a6020529182205481906001600160401b0381111561264e5761264e613211565b604051908082528060200260200182016040528015612677578160200160208202803683370190505b5081525f868152600a60209081526040909120549101906001600160401b038111156126a5576126a5613211565b6040519080825280602002602001820160405280156126ce578160200160208202803683370190505b5081526020015f81525090505f5b5f858152600a602052604090205481101561281d575f858152600a602052604081208054839081106127105761271061344d565b905f5260205f20906002020190505f6103e882600101548761273291906134b6565b61273c9190613538565b90508086106127e15781546001600160a01b0316156127dc578154845180516001600160a01b0390921691859081106127775761277761344d565b60200260200101906001600160a01b031690816001600160a01b03168152505080846020015184815181106127ae576127ae61344d565b60200260200101818152505080846040018181516127cc919061343a565b9052506127d981876134f8565b95505b612813565b604051634f04dc7d60e11b81526020600482015260066024820152655b707235325d60d01b604482015260640161078a565b50506001016126dc565b509392505050565b5f5b82515181101561080857825180515f9190839081106128485761284861344d565b60200260200101516001600160a01b03161461291d576128d76040518060400160405280601981526020017f6672616374696f6e616c5061796f757420257320746f20257300000000000000815250846020015183815181106128ad576128ad61344d565b6020026020010151855f015184815181106128ca576128ca61344d565b6020026020010151612a30565b61291d84845f015183815181106128f0576128f061344d565b60200260200101518560200151848151811061290e5761290e61344d565b6020026020010151855f612202565b600101612827565b808061293957506001600160a01b03821615155b156129fa575f61294884611ad8565b90506001600160a01b038316158015906129745750826001600160a01b0316816001600160a01b031614155b8015612987575061298581846119a8565b155b156129b05760405163a9fbf51f60e01b81526001600160a01b038416600482015260240161078a565b81156129f85783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b80825d5050565b610bed838383604051602401612a489392919061362a565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b1790525b6113cb81612cf3565b61165e848484612d12565b61080884848484604051602401612aa1949392919061365c565b60408051601f198184030181529190526020810180516001600160e01b03166363fb8bc560e01b179052612a73565b6113cb81604051602401612ae49190612fbd565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052612a73565b5f828152600260205260408120546001600160a01b0390811690831615612b3f57612b3f818486612dbf565b6001600160a01b03811615612b7957612b5a5f855f5f612925565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615612ba7576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b612c0f8383612e23565b610bed335f8585856123ff565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310612c5a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310612c86576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612ca457662386f26fc10000830492506010015b6305f5e1008310612cbc576305f5e100830492506008015b6127108310612cd057612710830492506004015b60648310612ce2576064830492506002015b600a83106107595760010192915050565b5f6a636f6e736f6c652e6c6f6790505f5f835160208501845afa505050565b6001600160a01b038216612d3b57604051633250574960e11b81525f600482015260240161078a565b5f612d4783835f611d28565b90506001600160a01b038116612d7357604051637e27328960e01b81526004810183905260240161078a565b836001600160a01b0316816001600160a01b031614610808576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161078a565b612dca838383612e84565b610bed576001600160a01b038316612df857604051637e27328960e01b81526004810182905260240161078a565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161078a565b6001600160a01b038216612e4c57604051633250574960e11b81525f600482015260240161078a565b5f612e5883835f611d28565b90506001600160a01b03811615610bed576040516339e3563760e11b81525f600482015260240161078a565b5f6001600160a01b03831615801590612ee05750826001600160a01b0316846001600160a01b03161480612ebd5750612ebd84846119a8565b80612ee057505f828152600460205260409020546001600160a01b038481169116145b949350505050565b5080545f8255600202905f5260205f20908101906113cb91905b80821115612f265780546001600160a01b03191681555f6001820155600201612f02565b5090565b6001600160e01b0319811681146113cb575f5ffd5b5f60208284031215612f4f575f5ffd5b81356116d581612f2a565b5f5f8284036080811215612f6c575f5ffd5b833592506060601f1982011215612f81575f5ffd5b506020830190509250929050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6116d56020830184612f8f565b5f60208284031215612fdf575f5ffd5b5035919050565b6001600160a01b03811681146113cb575f5ffd5b5f5f6040838503121561300b575f5ffd5b823561301681612fe6565b946020939093013593505050565b5f5f5f60608486031215613036575f5ffd5b833561304181612fe6565b9250602084013561305181612fe6565b929592945050506040919091013590565b80356001600160401b0381168114610cbc575f5ffd5b5f5f60408385031215613089575f5ffd5b8235915061309960208401613062565b90509250929050565b5f5f5f5f5f5f5f5f60e0898b0312156130b9575f5ffd5b883597506130c960208a01613062565b965060408901359550606089013567ffffffffffffffff19811681146130ed575f5ffd5b94506080890135935060a0890135925060c08901356001600160401b03811115613115575f5ffd5b8901601f81018b13613125575f5ffd5b80356001600160401b0381111561313a575f5ffd5b8b60208260061b840101111561314e575f5ffd5b989b979a50959850939692959194602001935050565b5f60208284031215613174575f5ffd5b81356116d581612fe6565b602080825282518282018190525f918401906040840190835b818110156131cb57835180516001600160a01b031684526020908101518185015290930192604090920191600101613198565b509095945050505050565b5f5f604083850312156131e7575f5ffd5b82356131f281612fe6565b915060208301358015158114613206575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215613238575f5ffd5b843561324381612fe6565b9350602085013561325381612fe6565b92506040850135915060608501356001600160401b03811115613274575f5ffd5b8501601f81018713613284575f5ffd5b80356001600160401b0381111561329d5761329d613211565b604051601f8201601f19908116603f011681016001600160401b03811182821017156132cb576132cb613211565b6040528181528282016020018910156132e2575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215613314575f5ffd5b50508035926020909101359150565b602080825282518282018190525f918401906040840190835b818110156131cb57835183526020938401939092019160010161333c565b5f5f6040838503121561336b575f5ffd5b823561337681612fe6565b9150602083013561320681612fe6565b6020808252600590820152645b7374335d60d81b604082015260600190565b600181811c908216806133b957607f821691505b6020821081036133d757634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600690820152655b737431355d60d01b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b6001600160401b038181168382160290811690818114613433576134336133fd565b5092915050565b80820180821115610759576107596133fd565b634e487b7160e01b5f52603260045260245ffd5b813561346c81612fe6565b81546001600160a01b0319166001600160a01b03919091161781556020919091013560019190910155565b6020808252600590820152645b7374315d60d81b604082015260600190565b8082028115828204841417610759576107596133fd565b5f81518060208401855e5f93019283525090919050565b5f612ee06134f283866134cd565b846134cd565b81810381811115610759576107596133fd565b606081525f61351d6060830186612f8f565b6001600160a01b039490941660208301525060400152919050565b5f8261355257634e487b7160e01b5f52601260045260245ffd5b500490565b606081525f6135696060830186612f8f565b60208301949094525060400152919050565b84815260018060a01b0384166020820152826040820152608060608201525f6135a76080830184612f8f565b9695505050505050565b5f6116d582846134cd565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906135a790830184612f8f565b5f602082840312156135fe575f5ffd5b81516116d581612f2a565b604081525f61361b6040830185612f8f565b90508260208301529392505050565b606081525f61363c6060830186612f8f565b6020830194909452506001600160a01b0391909116604090910152919050565b608081525f61366e6080830187612f8f565b6001600160a01b039586166020840152604083019490945250921660609092019190915291905056fe64656c65746520746f6b656e20257320666f7220746f6b656e4f776e65722025736d696e7420707269636520257320706172616d6574657273206166746572207570646174652025732d2d2d2d2d2d2d3e50555243484153452c206d73672e76616c756520257320707269636520257370617953747265616d696e67526576656e756520746f6b656e4f776e6572202573207061796f75742025737075726368617365546f6b656e20746f6b656e4f776e657220257320746f6b656e496420257370617953747265616d696e67526576656e756520746f74616c5061796f7574202573a2646970667358221220c327679018d63503c2fb2926f1a94a2e00f07c1ea0019536a7186d845ac2421064736f6c634300081c0033",
  "deployedBytecode": "0x6080604052600436106101fc575f3560e01c80637d8dad1511610113578063b88d4fde1161009d578063cf63722c1161006d578063cf63722c146106b3578063d9d61655146106c6578063e1a44749146106f2578063e985e9c514610711578063ffc9969a14610730575f5ffd5b8063b88d4fde14610533578063c6ceb96b14610552578063c87b56dd14610680578063cc2ee1961461069f575f5ffd5b806395d89b41116100e357806395d89b41146104ba5780639dc29fac146104ce578063a15454ba146104ed578063a22cb46514610500578063b7c4eebd1461051f575f5ffd5b80637d8dad15146104295780637fc96619146104485780638805ff2f14610474578063893d20e814610488575f5ffd5b80632ba27019116101945780636352211e116101645780636352211e146103a35780636a2ed85d146103c25780636e995083146103d557806370a08231146103e9578063789c545214610416575f5ffd5b80632ba270191461031157806342842e0e14610324578063506dd50614610343578063525d464514610362575f5ffd5b8063095ea7b3116101cf578063095ea7b3146102ad5780631072cbea146102cc5780631cc2c911146102df57806323b872dd146102f2575f5ffd5b806301ffc9a71461020057806304b675351461023457806306fdde0314610255578063081812fc14610276575b5f5ffd5b34801561020b575f5ffd5b5061021f61021a366004612f3f565b61074f565b60405190151581526020015b60405180910390f35b34801561023f575f5ffd5b5061025361024e366004612f5a565b61075f565b005b348015610260575f5ffd5b5061026961080f565b60405161022b9190612fbd565b348015610281575f5ffd5b50610295610290366004612fcf565b61089e565b6040516001600160a01b03909116815260200161022b565b3480156102b8575f5ffd5b506102536102c7366004612ffa565b6108c5565b6102536102da366004612ffa565b6108d0565b6102536102ed366004612ffa565b61098e565b3480156102fd575f5ffd5b5061025361030c366004613024565b610a3e565b61025361031f366004613078565b610ac1565b34801561032f575f5ffd5b5061025361033e366004613024565b610bd3565b34801561034e575f5ffd5b5061025361035d366004612fcf565b610bf2565b34801561036d575f5ffd5b5061038161037c366004612fcf565b610c3a565b604080518251815260208084015190820152918101519082015260600161022b565b3480156103ae575f5ffd5b506102956103bd366004612fcf565b610cc1565b6102536103d03660046130a2565b610ccb565b3480156103e0575f5ffd5b506102956111a5565b3480156103f4575f5ffd5b50610408610403366004613164565b6111ff565b60405190815260200161022b565b610253610424366004612fcf565b611244565b348015610434575f5ffd5b50610253610443366004613164565b611317565b348015610453575f5ffd5b50610467610462366004612fcf565b6113ce565b60405161022b919061317f565b34801561047f575f5ffd5b50610295611452565b348015610493575f5ffd5b507f0000000000000000000000000000000000000000000000000000000000000000610295565b3480156104c5575f5ffd5b506102696114ac565b3480156104d9575f5ffd5b506102536104e8366004612ffa565b6114bb565b6102536104fb366004612fcf565b611580565b34801561050b575f5ffd5b5061025361051a3660046131d6565b611648565b34801561052a575f5ffd5b50610408600181565b34801561053e575f5ffd5b5061025361054d366004613225565b611653565b34801561055d575f5ffd5b5061061c61056c366004612fcf565b6040805160c0810182525f80825260208201819052918101829052606081018290526080810182905260a0810191909152505f908152600b6020908152604091829020825160c08101845281546001600160401b0381168252680100000000000000009004841b67ffffffffffffffff19169281019290925260018101549282019290925260028201546001600160a01b031660608201526003820154608082015260049091015460a082015290565b60405161022b919081516001600160401b0316815260208083015167ffffffffffffffff191690820152604080830151908201526060808301516001600160a01b0316908201526080808301519082015260a0918201519181019190915260c00190565b34801561068b575f5ffd5b5061026961069a366004612fcf565b61166b565b3480156106aa575f5ffd5b506104086116dc565b6102536106c1366004613303565b61172d565b3480156106d1575f5ffd5b506106e56106e0366004613164565b6118bb565b60405161022b9190613323565b3480156106fd575f5ffd5b5061025361070c366004612fcf565b611924565b34801561071c575f5ffd5b5061021f61072b36600461335a565b6119a8565b34801561073b575f5ffd5b5061025361074a366004613164565b6119d5565b5f61075982611a89565b92915050565b6007546001600160a01b0316331461079357604051634f04dc7d60e11b815260040161078a90613386565b60405180910390fd5b5f828152600c6020526040902054158015906107ae57508035155b156107d157505f908152600c602052604081208181556001810182905560020155565b80351561080b575f828152600c60205260409020819061080882828135815560208201356001820155604090910135600290910155565b50505b5050565b60605f805461081d906133a5565b80601f0160208091040260200160405190810160405280929190818152602001828054610849906133a5565b80156108945780601f1061086b57610100808354040283529160200191610894565b820191905f5260205f20905b81548152906001019060200180831161087757829003601f168201915b5050505050905090565b5f6108a882611ad8565b505f828152600460205260409020546001600160a01b0316610759565b61080b828233611b10565b6108d8611b1d565b600854600116156108fc57604051634f04dc7d60e11b815260040161078a906133dd565b803361090782610cc1565b6001600160a01b03161461094657604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b604482015260640161078a565b6109503383611b8c565b6001600160a01b0383165f90815260096020908152604082208054600181018255908352912001829055610985338484610bd3565b5061080b611c9d565b610996611b1d565b600854600116156109ba57604051634f04dc7d60e11b815260040161078a906133dd565b6109dd604051806060016040528060268152602001613733602691398383611cc7565b5f818152600b60205260408120546001600160401b03169003610a2b57604051634f04dc7d60e11b81526020600482015260056024820152645b6532305d60d81b604482015260640161078a565b610a36823383611d0e565b61080b611c9d565b6001600160a01b038216610a6757604051633250574960e11b81525f600482015260240161078a565b5f610a73838333611d28565b9050836001600160a01b0316816001600160a01b031614610808576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161078a565b610ac9611b1d565b60085460011615610aed57604051634f04dc7d60e11b815260040161078a906133dd565b8133610af882610cc1565b6001600160a01b031614610b3757604051634f04dc7d60e11b81526020600482015260056024820152645b6533305d60d81b604482015260640161078a565b5f838152600b60205260409020805467ffffffffffffffff19166001600160401b038416178155610b6784611580565b7f5c43325359179f4471448fd5c0247053caeec2178ee6378a1a3eb4b2030d31463385610b9886633b9aca00613411565b604080516001600160a01b03909416845260208401929092526001600160401b03169082015260600160405180910390a1505061080b611c9d565b610bed83838360405180602001604052805f815250611653565b505050565b6007546001600160a01b03163314610c1d57604051634f04dc7d60e11b815260040161078a90613386565b5f908152600c602052604081208181556001810182905560020155565b610c5b60405180606001604052805f81526020015f81526020015f81525090565b6007546001600160a01b03163314610c8657604051634f04dc7d60e11b815260040161078a90613386565b505f818152600c602090815260409182902082516060810184528154815260018201549281019290925260020154918101919091525b919050565b5f61075982611ad8565b610cd3611b1d565b60085460011615610cf757604051634f04dc7d60e11b815260040161078a906133dd565b323314610d3057604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65305d60e01b604082015260600190565b855f03610d6957604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65315d60e01b604082015260600190565b683635c9adc5dea00000876001600160401b03161115610db557604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65325d60e01b604082015260600190565b5f620fffff610dc66002600a61343a565b610dd190600a61343a565b610ddc90602061343a565b610de790602061343a565b610df290602061343a565b600854901c16905080821115610e3457604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65335d60e01b604082015260600190565b60095f336001600160a01b03166001600160a01b031681526020019081526020015f2089908060018154018082558091505060019003905f5260205f20015f90919091909150556040518060c00160405280896001600160401b03168152602001876001600160401b0319168152602001888152602001336001600160a01b0316815260200186815260200185815250600b5f8b81526020019081526020015f205f820151815f015f6101000a8154816001600160401b0302191690836001600160401b031602179055506020820151815f0160086101000a8154816001600160c01b03021916908360401c0217905550604082015181600101556060820151816002015f6101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816003015560a08201518160040155905050610fae6040518060600160405280602881526020016136b9602891395f8b8152600b60205260409020546001600160401b03808c1691166120e9565b811561117f575f5b8281101561117d575f848483818110610fd157610fd161344d565b610fe79260206040909202019081019150613164565b90506001600160a01b038116158061100757506001600160a01b03811630145b8061101a57506001600160a01b03811633145b1561105157604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65345d60e01b604082015260600190565b5f816001600160a01b0316311161109457604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65355d60e01b604082015260600190565b5f5b84811015611125578281141580156110e657508585828181106110bb576110bb61344d565b6110d19260206040909202019081019150613164565b6001600160a01b0316826001600160a01b0316145b1561111d57604051634f04dc7d60e11b815260040161078a906020808252600490820152635b65365d60e01b604082015260600190565b600101611096565b505f8b8152600a602052604090208585848181106111455761114561344d565b83546001810185555f94855260209094206040909102929092019260020290910190506111728282613461565b505050600101610fb6565b505b611189338a612130565b61119289612149565b5061119b611c9d565b5050505050505050565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146111ef57604051634f04dc7d60e11b815260040161078a90613497565b506006546001600160a01b031690565b5f6001600160a01b038216611229576040516322718ad960e21b81525f600482015260240161078a565b506001600160a01b03165f9081526003602052604090205490565b5f63ffffffff6112566002600a61343a565b61126190600a61343a565b61126c90602061343a565b61127790602061343a565b60085461128c92911c1664e8d4a510006134b6565b9050801561080b57803410156112cd57604051634f04dc7d60e11b81526020600482015260056024820152645b6536305d60d81b604482015260640161078a565b61080b827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70365d60e01b8152506001612202565b61131f611b1d565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461136857604051634f04dc7d60e11b815260040161078a90613497565b6001600160a01b0381166113a857604051634f04dc7d60e11b81526020600482015260066024820152655b737432305d60d01b604482015260640161078a565b600680546001600160a01b0319166001600160a01b0383161790556113cb611c9d565b50565b6060600a5f8381526020019081526020015f20805480602002602001604051908101604052809291908181526020015f905b82821015611447575f848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101611400565b505050509050919050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461149c57604051634f04dc7d60e11b815260040161078a90613497565b506007546001600160a01b031690565b60606001805461081d906133a5565b6114c3611b1d565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461150c57604051634f04dc7d60e11b815260040161078a90613497565b6115168282611b8c565b5f818152600c6020908152604080832083815560018082018590556002918201859055600b845282852085815590810185905590810180546001600160a01b031916905560038101849055600401839055600a909152812061157791612ee8565b610a3681612329565b5f63ffffffff6115926002600a61343a565b61159d90600a61343a565b6115a890602061343a565b6008546115bd92911c1664e8d4a510006134b6565b9050801561080b57803410156115fe57604051634f04dc7d60e11b81526020600482015260056024820152645b6533355d60d81b604482015260640161078a565b61080b827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70355d60e01b8152506001612202565b61080b338383612361565b61165e848484610a3e565b61080833858585856123ff565b606061167682611ad8565b505f61168c60408051602081019091525f815290565b90505f8151116116aa5760405180602001604052805f8152506116d5565b806116b484612527565b6040516020016116c59291906134e4565b6040516020818303038152906040525b9392505050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461172657604051634f04dc7d60e11b815260040161078a90613497565b5060085490565b611735611b1d565b6008546001161561175957604051634f04dc7d60e11b815260040161078a906133dd565b6006546001600160a01b0316331461179c57604051634f04dc7d60e11b81526020600482015260056024820152645b7374325d60d81b604482015260640161078a565b6117d46040518060400160405280601681526020017570617953747265616d696e67526576656e756520257360501b815250826125b6565b5f6117df83836125fb565b905080604001515f1461183a576118126040518060600160405280602281526020016137596022913982604001516125b6565b61183a8382604051806040016040528060058152602001645b7035315d60d81b815250612825565b5f61184484610cc1565b90506118786040518060600160405280602b8152602001613708602b91398284604001518661187391906134f8565b611cc7565b6118b1848284604001518661188d91906134f8565b604051806040016040528060048152602001635b70335d60e01b8152506001612202565b505061080b611c9d565b6001600160a01b0381165f9081526009602090815260409182902080548351818402810184019094528084526060939283018282801561191857602002820191905f5260205f20905b815481526020019060010190808311611904575b50505050509050919050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461196d57604051634f04dc7d60e11b815260040161078a90613497565b60088190556040518181527f12220fe348bfcd9d89bf856b98667916c5db45a8a2805aa90882d5c85f9c9ba19060200160405180910390a150565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b6119dd611b1d565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611a2657604051634f04dc7d60e11b815260040161078a90613497565b6001600160a01b038116611a6657604051634f04dc7d60e11b81526020600482015260066024820152655b737432315d60d01b604482015260640161078a565b600780546001600160a01b0319166001600160a01b0383161790556113cb611c9d565b5f6001600160e01b031982166380ac58cd60e01b1480611ab957506001600160e01b03198216635b5e139f60e01b145b8061075957506301ffc9a760e01b6001600160e01b0319831614610759565b5f818152600260205260408120546001600160a01b03168061075957604051637e27328960e01b81526004810184905260240161078a565b610bed8383836001612925565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005c15611b5d57604051633ee5aeb560e01b815260040160405180910390fd5b611b8a60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005b90612a29565b565b816001600160a01b0316611b9f82610cc1565b6001600160a01b031614611bde57604051634f04dc7d60e11b81526020600482015260056024820152645b6535315d60d81b604482015260640161078a565b6001600160a01b0382165f90815260096020526040812054905b81811015610808576001600160a01b0384165f908152600960205260409020805484919083908110611c2c57611c2c61344d565b905f5260205f20015403611c9557611c5d604051806060016040528060218152602001613698602191398486612a30565b6001600160a01b0384165f908152600960205260409020805482908110611c8657611c8661344d565b5f918252602082200155610808565b600101611bf8565b611b8a5f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00611b84565b610bed838383604051602401611cdf9392919061350b565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b179052612a73565b610bed83838360405180602001604052805f815250612a7c565b5f6001600854165f14611d4e57604051634f04dc7d60e11b815260040161078a906133dd565b611d8f6040518060400160405280601f81526020017f55706461746520746f20257320746f6b656e4964202573206175746820257300815250858585612a87565b5f838152600260205260408120546001600160a01b031690506001600160a01b03851615801590611dc757506001600160a01b038116155b15611e0c57611df96040518060400160405280600c81526020016b0b4b4b4b4b4b4b4f9352539560a21b815250612ad0565b611e04858585612b13565b9150506116d5565b6001600160a01b038516158015611e2a57506001600160a01b038316155b15611e5c57611df96040518060400160405280600c81526020016b169696969696969f212aa92760a11b815250612ad0565b6001600160a01b03851615801590611e7c57506001600160a01b03831633145b15611eed57611eb26040518060400160405280601081526020016f169696969696969f2a2920a729a322a960811b815250612ad0565b5f848152600b60205260408120805467ffffffffffffffff19169055611ed9868686612b13565b9050611ee485611580565b91506116d59050565b5f848152600b602052604081208054909190611f16906001600160401b0316633b9aca00613411565b6001600160401b03169050611f446040518060600160405280602781526020016136e16027913934836120e9565b6001600160a01b038716301480611f5a57508034105b15611f9057604051634f04dc7d60e11b81526020600482015260056024820152645b6534305d60d81b604482015260640161078a565b5f868152600b60205260408120805467ffffffffffffffff19169055611fb7888883612b13565b90505f6103e86103ff611fcc6002600a61343a565b600854611fdc92911c16346134b6565b611fe69190613538565b90505f611ff382346134f8565b90505f6120008a836125fb565b5f8b8152600a6020526040812091925061201a9190612ee8565b604081015161202990836134f8565b915080604001515f1461205e5761205e8a82604051806040016040528060058152602001645b7035305d60d81b815250612825565b6120898a8884604051806040016040528060058152602001645b7031305d60d81b8152506001612202565b82156120da576120da8a7f000000000000000000000000000000000000000000000000000000000000000085604051806040016040528060058152602001645b7031315d60d81b8152506001612202565b50919998505050505050505050565b610bed83838360405160240161210193929190613557565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b179052612a73565b61080b828260405180602001604052805f815250612c05565b5f63ffffffff61215b6002600a61343a565b61216690600a61343a565b60085461217b92911c1664e8d4a510006134b6565b9050801561080b57803410156121bc57604051634f04dc7d60e11b81526020600482015260056024820152645b6531305d60d81b604482015260640161078a565b61080b827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70315d60e01b81525060015b60405184907fbdab63af615e4e2519eb67a8d0c9a6a0b33087aae0f9a7dc98002099f6c01ea69061223a90889084908890889061357b565b60405180910390a15f816001600160a01b0316858560405160200161225f9190612fbd565b60408051601f1981840301815290829052612279916135b1565b5f6040518083038185875af1925050503d805f81146122b3576040519150601f19603f3d011682016040523d82523d5f602084013e6122b8565b606091505b50509050806123205782156122e25783604051634f04dc7d60e11b815260040161078a9190612fbd565b7f4fcbe9ac9cfddb4181f8d8b230f2e182c4064527110192d9f02da207a0ad0a0987878787604051612317949392919061357b565b60405180910390a15b50505050505050565b5f6123355f835f611d28565b90506001600160a01b03811661080b57604051637e27328960e01b81526004810183905260240161078a565b6001600160a01b03821661239357604051630b61174360e31b81526001600160a01b038316600482015260240161078a565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561252057604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906124419088908890879087906004016135bc565b6020604051808303815f875af192505050801561247b575060408051601f3d908101601f19168201909252612478918101906135ee565b60015b6124e2573d8080156124a8576040519150601f19603f3d011682016040523d82523d5f602084013e6124ad565b606091505b5080515f036124da57604051633250574960e11b81526001600160a01b038516600482015260240161078a565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b1461251e57604051633250574960e11b81526001600160a01b038516600482015260240161078a565b505b5050505050565b60605f61253383612c1c565b60010190505f816001600160401b0381111561255157612551613211565b6040519080825280601f01601f19166020018201604052801561257b576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461258557509392505050565b61080b82826040516024016125cc929190613609565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052612a73565b61261e604051806060016040528060608152602001606081526020015f81525090565b604080516060810182525f858152600a6020529182205481906001600160401b0381111561264e5761264e613211565b604051908082528060200260200182016040528015612677578160200160208202803683370190505b5081525f868152600a60209081526040909120549101906001600160401b038111156126a5576126a5613211565b6040519080825280602002602001820160405280156126ce578160200160208202803683370190505b5081526020015f81525090505f5b5f858152600a602052604090205481101561281d575f858152600a602052604081208054839081106127105761271061344d565b905f5260205f20906002020190505f6103e882600101548761273291906134b6565b61273c9190613538565b90508086106127e15781546001600160a01b0316156127dc578154845180516001600160a01b0390921691859081106127775761277761344d565b60200260200101906001600160a01b031690816001600160a01b03168152505080846020015184815181106127ae576127ae61344d565b60200260200101818152505080846040018181516127cc919061343a565b9052506127d981876134f8565b95505b612813565b604051634f04dc7d60e11b81526020600482015260066024820152655b707235325d60d01b604482015260640161078a565b50506001016126dc565b509392505050565b5f5b82515181101561080857825180515f9190839081106128485761284861344d565b60200260200101516001600160a01b03161461291d576128d76040518060400160405280601981526020017f6672616374696f6e616c5061796f757420257320746f20257300000000000000815250846020015183815181106128ad576128ad61344d565b6020026020010151855f015184815181106128ca576128ca61344d565b6020026020010151612a30565b61291d84845f015183815181106128f0576128f061344d565b60200260200101518560200151848151811061290e5761290e61344d565b6020026020010151855f612202565b600101612827565b808061293957506001600160a01b03821615155b156129fa575f61294884611ad8565b90506001600160a01b038316158015906129745750826001600160a01b0316816001600160a01b031614155b8015612987575061298581846119a8565b155b156129b05760405163a9fbf51f60e01b81526001600160a01b038416600482015260240161078a565b81156129f85783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b80825d5050565b610bed838383604051602401612a489392919061362a565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b1790525b6113cb81612cf3565b61165e848484612d12565b61080884848484604051602401612aa1949392919061365c565b60408051601f198184030181529190526020810180516001600160e01b03166363fb8bc560e01b179052612a73565b6113cb81604051602401612ae49190612fbd565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052612a73565b5f828152600260205260408120546001600160a01b0390811690831615612b3f57612b3f818486612dbf565b6001600160a01b03811615612b7957612b5a5f855f5f612925565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615612ba7576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b612c0f8383612e23565b610bed335f8585856123ff565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310612c5a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310612c86576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612ca457662386f26fc10000830492506010015b6305f5e1008310612cbc576305f5e100830492506008015b6127108310612cd057612710830492506004015b60648310612ce2576064830492506002015b600a83106107595760010192915050565b5f6a636f6e736f6c652e6c6f6790505f5f835160208501845afa505050565b6001600160a01b038216612d3b57604051633250574960e11b81525f600482015260240161078a565b5f612d4783835f611d28565b90506001600160a01b038116612d7357604051637e27328960e01b81526004810183905260240161078a565b836001600160a01b0316816001600160a01b031614610808576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161078a565b612dca838383612e84565b610bed576001600160a01b038316612df857604051637e27328960e01b81526004810182905260240161078a565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161078a565b6001600160a01b038216612e4c57604051633250574960e11b81525f600482015260240161078a565b5f612e5883835f611d28565b90506001600160a01b03811615610bed576040516339e3563760e11b81525f600482015260240161078a565b5f6001600160a01b03831615801590612ee05750826001600160a01b0316846001600160a01b03161480612ebd5750612ebd84846119a8565b80612ee057505f828152600460205260409020546001600160a01b038481169116145b949350505050565b5080545f8255600202905f5260205f20908101906113cb91905b80821115612f265780546001600160a01b03191681555f6001820155600201612f02565b5090565b6001600160e01b0319811681146113cb575f5ffd5b5f60208284031215612f4f575f5ffd5b81356116d581612f2a565b5f5f8284036080811215612f6c575f5ffd5b833592506060601f1982011215612f81575f5ffd5b506020830190509250929050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6116d56020830184612f8f565b5f60208284031215612fdf575f5ffd5b5035919050565b6001600160a01b03811681146113cb575f5ffd5b5f5f6040838503121561300b575f5ffd5b823561301681612fe6565b946020939093013593505050565b5f5f5f60608486031215613036575f5ffd5b833561304181612fe6565b9250602084013561305181612fe6565b929592945050506040919091013590565b80356001600160401b0381168114610cbc575f5ffd5b5f5f60408385031215613089575f5ffd5b8235915061309960208401613062565b90509250929050565b5f5f5f5f5f5f5f5f60e0898b0312156130b9575f5ffd5b883597506130c960208a01613062565b965060408901359550606089013567ffffffffffffffff19811681146130ed575f5ffd5b94506080890135935060a0890135925060c08901356001600160401b03811115613115575f5ffd5b8901601f81018b13613125575f5ffd5b80356001600160401b0381111561313a575f5ffd5b8b60208260061b840101111561314e575f5ffd5b989b979a50959850939692959194602001935050565b5f60208284031215613174575f5ffd5b81356116d581612fe6565b602080825282518282018190525f918401906040840190835b818110156131cb57835180516001600160a01b031684526020908101518185015290930192604090920191600101613198565b509095945050505050565b5f5f604083850312156131e7575f5ffd5b82356131f281612fe6565b915060208301358015158114613206575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215613238575f5ffd5b843561324381612fe6565b9350602085013561325381612fe6565b92506040850135915060608501356001600160401b03811115613274575f5ffd5b8501601f81018713613284575f5ffd5b80356001600160401b0381111561329d5761329d613211565b604051601f8201601f19908116603f011681016001600160401b03811182821017156132cb576132cb613211565b6040528181528282016020018910156132e2575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215613314575f5ffd5b50508035926020909101359150565b602080825282518282018190525f918401906040840190835b818110156131cb57835183526020938401939092019160010161333c565b5f5f6040838503121561336b575f5ffd5b823561337681612fe6565b9150602083013561320681612fe6565b6020808252600590820152645b7374335d60d81b604082015260600190565b600181811c908216806133b957607f821691505b6020821081036133d757634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600690820152655b737431355d60d01b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b6001600160401b038181168382160290811690818114613433576134336133fd565b5092915050565b80820180821115610759576107596133fd565b634e487b7160e01b5f52603260045260245ffd5b813561346c81612fe6565b81546001600160a01b0319166001600160a01b03919091161781556020919091013560019190910155565b6020808252600590820152645b7374315d60d81b604082015260600190565b8082028115828204841417610759576107596133fd565b5f81518060208401855e5f93019283525090919050565b5f612ee06134f283866134cd565b846134cd565b81810381811115610759576107596133fd565b606081525f61351d6060830186612f8f565b6001600160a01b039490941660208301525060400152919050565b5f8261355257634e487b7160e01b5f52601260045260245ffd5b500490565b606081525f6135696060830186612f8f565b60208301949094525060400152919050565b84815260018060a01b0384166020820152826040820152608060608201525f6135a76080830184612f8f565b9695505050505050565b5f6116d582846134cd565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906135a790830184612f8f565b5f602082840312156135fe575f5ffd5b81516116d581612f2a565b604081525f61361b6040830185612f8f565b90508260208301529392505050565b606081525f61363c6060830186612f8f565b6020830194909452506001600160a01b0391909116604090910152919050565b608081525f61366e6080830187612f8f565b6001600160a01b039586166020840152604083019490945250921660609092019190915291905056fe64656c65746520746f6b656e20257320666f7220746f6b656e4f776e65722025736d696e7420707269636520257320706172616d6574657273206166746572207570646174652025732d2d2d2d2d2d2d3e50555243484153452c206d73672e76616c756520257320707269636520257370617953747265616d696e67526576656e756520746f6b656e4f776e6572202573207061796f75742025737075726368617365546f6b656e20746f6b656e4f776e657220257320746f6b656e496420257370617953747265616d696e67526576656e756520746f74616c5061796f7574202573a2646970667358221220c327679018d63503c2fb2926f1a94a2e00f07c1ea0019536a7186d845ac2421064736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
