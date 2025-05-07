export const HARMONIZE_ADDRESS = '0xE82C37C01B8877E2f6d0F8b44CAeC87318d58F8a'
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
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "eventType",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenOwner",
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
          "name": "numShares",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "pricePerShare",
          "type": "uint256"
        }
      ],
      "name": "ShareEvent",
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
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "shareholder",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "numSharesToBuy",
          "type": "uint256"
        }
      ],
      "name": "buyShareholderShares",
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
        },
        {
          "internalType": "uint256",
          "name": "numShares",
          "type": "uint256"
        }
      ],
      "name": "buyShares",
      "outputs": [],
      "stateMutability": "payable",
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
      "name": "creatorRoyalties",
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
      "inputs": [],
      "name": "fingerprint",
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
      "name": "getIssue",
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
        },
        {
          "internalType": "address",
          "name": "partner",
          "type": "address"
        }
      ],
      "name": "getPartnerShares",
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
          "internalType": "struct Harmonize.CreatorRoyalty",
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
      "name": "getShareholders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
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
      "inputs": [],
      "name": "mediaHash",
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
      "inputs": [],
      "name": "mediaId",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
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
          "name": "tokenPrice",
          "type": "uint256"
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
          "internalType": "uint256",
          "name": "finger",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "id",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "issue",
          "type": "uint256"
        }
      ],
      "name": "offering",
      "outputs": [],
      "stateMutability": "payable",
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
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
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
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "numShares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePerShare",
          "type": "uint256"
        }
      ],
      "name": "shareholderOffering",
      "outputs": [],
      "stateMutability": "payable",
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
  "bytecode": "0x60a060405234801561000f575f5ffd5b50604051806040016040528060098152602001684861726d6f6e697a6560b81b815250604051806040016040528060098152602001684841524d4f4e495a4560b81b815250815f90816100629190610113565b50600161006f8282610113565b505033608052506101cd565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100a357607f821691505b6020821081036100c157634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561010e57805f5260205f20601f840160051c810160208510156100ec5750805b601f840160051c820191505b8181101561010b575f81556001016100f8565b50505b505050565b81516001600160401b0381111561012c5761012c61007b565b6101408161013a845461008f565b846100c7565b6020601f821160018114610172575f831561015b5750848201515b5f19600385901b1c1916600184901b17845561010b565b5f84815260208120601f198516915b828110156101a15787850151825560209485019460019092019101610181565b50848210156101be57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6080516145366102165f395f81816104e001528181610b8f0152818161134b015281816114d501528181611ab701528181611ee8015281816129e10152612dd501526145365ff3fe60806040526004361061021d575f3560e01c806395d89b411161011e578063cf85a77c116100a8578063e75722301161006d578063e75722301461069c578063e985e9c5146106d0578063eae71eeb146106ef578063f7d9757714610702578063f9dd6ea714610715575f5ffd5b8063cf85a77c14610616578063d092837f1461062b578063d9d616551461063e578063dae2e4571461066a578063e1a447491461067d575f5ffd5b8063a22cb465116100ee578063a22cb46514610578578063b88d4fde14610597578063bcd53992146105b6578063c5350e07146105cb578063c87b56dd146105f7575f5ffd5b806395d89b4114610504578063976b3113146105185780639dc29fac14610546578063a15454ba14610565575f5ffd5b80631af9cf49116101aa5780634ef98ff91161016f5780634ef98ff9146104225780636352211e146104375780636c7555aa1461045657806370a08231146104b3578063893d20e8146104d2575f5ffd5b80631af9cf491461036f5780631cc2c911146103b257806323b872dd146103c557806342842e0e146103e45780634abf825d14610403575f5ffd5b80631069143a116101f05780631069143a146102ce5780631072cbea146102f157806317f69222146103045780631a16bf45146103175780631af2e07b1461032a575f5ffd5b806301ffc9a71461022157806306fdde0314610255578063081812fc14610276578063095ea7b3146102ad575b5f5ffd5b34801561022c575f5ffd5b5061024061023b366004613c4c565b610734565b60405190151581526020015b60405180910390f35b348015610260575f5ffd5b50610269610744565b60405161024c9190613c95565b348015610281575f5ffd5b50610295610290366004613ca7565b6107d3565b6040516001600160a01b03909116815260200161024c565b3480156102b8575f5ffd5b506102cc6102c7366004613cd2565b6107fa565b005b3480156102d9575f5ffd5b506102e360095481565b60405190815260200161024c565b6102cc6102ff366004613cd2565b610809565b6102cc610312366004613cfc565b6108c9565b6102cc610325366004613d2e565b610c5a565b348015610335575f5ffd5b506102e3610344366004613d4e565b5f828152600c602090815260408083206001600160a01b038516845260030190915290205492915050565b34801561037a575f5ffd5b5061038e610389366004613ca7565b6110e6565b6040805182516001600160a01b03168152602092830151928101929092520161024c565b6102cc6103c0366004613cd2565b611166565b3480156103d0575f5ffd5b506102cc6103df366004613d7c565b61120c565b3480156103ef575f5ffd5b506102cc6103fe366004613d7c565b611295565b34801561040e575f5ffd5b506102e361041d366004613cd2565b6112af565b34801561042d575f5ffd5b506102e360085481565b348015610442575f5ffd5b50610295610451366004613ca7565b6112da565b348015610461575f5ffd5b50610494610470366004613ca7565b600d6020525f9081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b03909316835260208301919091520161024c565b3480156104be575f5ffd5b506102e36104cd366004613dba565b6112e4565b3480156104dd575f5ffd5b507f0000000000000000000000000000000000000000000000000000000000000000610295565b34801561050f575f5ffd5b50610269611329565b348015610523575f5ffd5b506102e3610532366004613ca7565b5f908152600c602052604090206001015490565b348015610551575f5ffd5b506102cc610560366004613cd2565b611338565b6102cc610573366004613ca7565b611486565b348015610583575f5ffd5b506102cc610592366004613dd5565b611517565b3480156105a2575f5ffd5b506102cc6105b1366004613e19565b611522565b3480156105c1575f5ffd5b506102e360065481565b3480156105d6575f5ffd5b506105ea6105e5366004613ca7565b61153a565b60405161024c9190613ef7565b348015610602575f5ffd5b50610269610611366004613ca7565b6115a6565b348015610621575f5ffd5b506102e360075481565b6102cc610639366004613f37565b61160b565b348015610649575f5ffd5b5061065d610658366004613dba565b611752565b60405161024c9190613f6f565b6102cc610678366004613fa6565b6117ba565b348015610688575f5ffd5b506102cc610697366004613ca7565b611aac565b3480156106a7575f5ffd5b506102e36106b6366004613ca7565b5f908152600c60205260409020546001600160401b031690565b3480156106db575f5ffd5b506102406106ea36600461404b565b611b47565b6102cc6106fd366004614077565b611b74565b6102cc610710366004613d2e565b611fc6565b348015610720575f5ffd5b5061049461072f366004613d2e565b612123565b5f61073e82612165565b92915050565b60605f8054610752906140bc565b80601f016020809104026020016040519081016040528092919081815260200182805461077e906140bc565b80156107c95780601f106107a0576101008083540402835291602001916107c9565b820191905f5260205f20905b8154815290600101906020018083116107ac57829003601f168201915b5050505050905090565b5f6107dd826121b4565b505f828152600460205260409020546001600160a01b031661073e565b6108058282336121ec565b5050565b6108116121f9565b6009546001161561083d5760405162461bcd60e51b8152600401610834906140f4565b60405180910390fd5b61084681612268565b600103610891576108573382612303565b6001600160a01b0382165f908152600b602090815260408220805460018101825590835291200181905561088c338383611295565b6108c1565b60405162461bcd60e51b81526020600482015260056024820152645b6535305d60d81b6044820152606401610834565b6108056123ff565b6108d16121f9565b600954600116156108f45760405162461bcd60e51b8152600401610834906140f4565b600954600416156109175760405162461bcd60e51b815260040161083490614114565b5f828152600c60205260409020600181015480158061093a575060016003821614155b156109705760405162461bcd60e51b81526020600482015260066024820152655b707232305d60d01b6044820152606401610834565b5f620fffff60408061098460026014614148565b61098e9190614148565b6109989190614148565b83901c169050808411156109d75760405162461bcd60e51b81526020600482015260066024820152655b707232315d60d01b6044820152606401610834565b620fffff600283901c8116905f906109f16003600a614148565b6109fc90600a614148565b610a07906014614148565b610a12906014614148565b600954901c16905080610a26836001614148565b1115610a5d5760405162461bcd60e51b81526020600482015260066024820152655b707232325d60d01b6044820152606401610834565b5f6001600160401b036040610a7460026014614148565b610a7e9190614148565b86901c1687610a8d919061415b565b610a9b90633b9aca0061415b565b905080341015610ad65760405162461bcd60e51b81526020600482015260066024820152655b707232335d60d01b6044820152606401610834565b610ae1863389612429565b5f610aec8886614172565b9050604080610afd60026014614148565b610b079190614148565b610b119190614148565b81901b6001600160cc1b03604080610b2b60026014614148565b610b359190614148565b610b3f9190614148565b620fffff901b18600c5f8c81526020019081526020015f206001015416178760010181905550805f03610b785760018701805460031790555b5f610b816124ad565b90508015610bd257610bd28a7f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060058152602001645b7032315d60d81b8152506124df565b610c048a8c610be18487614172565b604051806040016040528060058152602001645b7032305d60d81b8152506124df565b7f3d65e6693c7e18b6ba2fcb558b3d890f2a2ed090615681ca9f0d82c20fe5048c335f8d8d8d88604051610c3d96959493929190614185565b60405180910390a15050505050505050610c556123ff565b505050565b610c626121f9565b60095460011615610c855760405162461bcd60e51b8152600401610834906140f4565b60095460041615610ca85760405162461bcd60e51b815260040161083490614114565b610cd56040518060400160405280600b81526020016a4f66666572696e6720257360a81b815250836125c1565b33610cdf836112da565b6001600160a01b031614610d1d5760405162461bcd60e51b81526020600482015260056024820152645b7072315d60d81b6044820152606401610834565b5f600c5f8481526020019081526020015f209050610d626040518060400160405280600b81526020016a2e2e2e697373756520257360a81b81525082600101546125c1565b60026003831603610d7c57600101805460021790556108c1565b600181015460031615610db95760405162461bcd60e51b81526020600482015260056024820152645b7072325d60d81b6044820152606401610834565b5f6103ff604080610dcc60026014614148565b610dd69190614148565b610de09190614148565b610deb906014614148565b84901c1690505f620fffff604080610e0560026014614148565b610e0f9190614148565b610e199190614148565b85901c1690505f6001600160401b03610e3460026014614148565b86901c1690505f6001600160401b036040610e5160026014614148565b610e5b9190614148565b87901c169050610e8560405180608001604052806043815260200161447760439139858585612606565b610ebd604051806040016040528060168152602001754f66666572696e67207368617265507269636520257360501b815250826125c1565b821580610ec8575081155b80610ed1575080155b80610ee2575066038d7ea4c6800081115b80610f0a575084546001600160401b031682118015610f0a575084546001600160401b031615155b15610f3f5760405162461bcd60e51b81526020600482015260056024820152645b7072335d60d81b6044820152606401610834565b620fffff610f4f6003600a614148565b610f5a90600a614148565b610f65906014614148565b610f70906014614148565b610f7b906014614148565b610f86906014614148565b600954901c16831180610fee5750836103ff610fa46003600a614148565b610faf90600a614148565b610fba906014614148565b610fc5906014614148565b610fd0906014614148565b610fdb906014614148565b610fe6906014614148565b600954901c16105b80610ff9575083600a115b1561102e5760405162461bcd60e51b81526020600482015260056024820152645b7072345d60d81b6044820152606401610834565b5f8361103d620f42408761415b565b61104791906141be565b90506004600160cc1b0387166001176001600160cc1b0360408061106d60026014614148565b6110779190614148565b6110819190614148565b61108c906014614148565b63ffffffff901b18166040806110a460026014614148565b6110ae9190614148565b6110b89190614148565b6110c3906014614148565b82901b17600187018190556110d789611486565b505050505050506108056123ff565b604080518082019091525f8082526020820152600954600216156111345760405162461bcd60e51b81526020600482015260056024820152645b7374355d60d81b6044820152606401610834565b505f908152600d6020908152604091829020825180840190935280546001600160a01b03168352600101549082015290565b61116e6121f9565b600954600116156111915760405162461bcd60e51b8152600401610834906140f4565b6111b46040518060600160405280602681526020016144db60269139838361264f565b5f818152600c60205260408120546001600160401b031690036112015760405162461bcd60e51b81526020600482015260056024820152645b6532305d60d81b6044820152606401610834565b6108c1823383612696565b6001600160a01b03821661123557604051633250574960e11b81525f6004820152602401610834565b5f6112418383336126b0565b9050836001600160a01b0316816001600160a01b03161461128f576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610834565b50505050565b610c5583838360405180602001604052805f815250611522565b600b602052815f5260405f2081815481106112c8575f80fd5b905f5260205f20015f91509150505481565b5f61073e826121b4565b5f6001600160a01b03821661130e576040516322718ad960e21b81525f6004820152602401610834565b506001600160a01b03165f9081526003602052604090205490565b606060018054610752906140bc565b6113406121f9565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146113a05760405162461bcd60e51b81526020600482015260056024820152645b7374315d60d81b6044820152606401610834565b6113aa8282612303565b5f818152600c60205260408120600201905b815481101561141857600c5f8481526020019081526020015f206003015f8383815481106113ec576113ec6141dd565b5f9182526020808320909101546001600160a01b031683528201929092526040018120556001016113bc565b505f828152600c60205260408120818155600181018290559061143e6002830182613bc1565b50505f828152600d6020908152604080832080546001600160a01b0319168155600101839055600a909152812061147491613bdc565b61147d82612a36565b506108056123ff565b5f61148f612a6e565b9050801561080557803410156114cf5760405162461bcd60e51b81526020600482015260056024820152645b6533355d60d81b6044820152606401610834565b610805827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70355d60e01b8152506124df565b610805338383612aaa565b61152d84848461120c565b61128f3385858585612b48565b5f818152600c602090815260409182902060020180548351818402810184019094528084526060939283018282801561159a57602002820191905f5260205f20905b81546001600160a01b0316815260019091019060200180831161157c575b50505050509050919050565b60606115b1826121b4565b505f6115bb612c70565b90505f8151116115d95760405180602001604052805f815250611604565b806115e384612c90565b6040516020016115f4929190614208565b6040516020818303038152906040525b9392505050565b6116136121f9565b600954600116156116365760405162461bcd60e51b8152600401610834906140f4565b600954600416156116595760405162461bcd60e51b815260040161083490614114565b5f838152600c60209081526040808320338452600301909152902054620fffff16828110156116b35760405162461bcd60e51b81526020600482015260066024820152655b707234305d60d01b6044820152606401610834565b6014620fffff8416901b811790506014806116ce9190614148565b5f858152600c6020908152604080832033845260030190915290206001600160401b03841690911b919091179081905561170784611486565b7f3d65e6693c7e18b6ba2fcb558b3d890f2a2ed090615681ca9f0d82c20fe5048c3360018787878760405161174196959493929190614185565b60405180910390a15061128f6123ff565b6001600160a01b0381165f908152600b602090815260409182902080548351818402810184019094528084526060939283018282801561159a57602002820191905f5260205f20905b81548152602001906001019080831161179b5750505050509050919050565b6117c26121f9565b600954600116156117e55760405162461bcd60e51b8152600401610834906140f4565b845f0361181d5760405162461bcd60e51b8152600401610834906020808252600490820152635b65315d60e01b604082015260600190565b66038d7ea4c680006001600160401b03881611156118665760405162461bcd60e51b8152600401610834906020808252600490820152635b65325d60e01b604082015260600190565b600685905560088490556007839055335f908152600b602090815260408083208054600181018255908452828420018b90558a8352600c8252918290206001600160401b038a169055815160608101909252602c8083526118de9291614403908301395f8a8152600c60205260409020548990612d1f565b85156119295760408051808201825233815260208082018981525f8c8152600d909252929020905181546001600160a01b0319166001600160a01b0390911617815590516001909101555b8015611a66575f5b81811015611a64575f83838381811061194c5761194c6141dd565b6119629260206040909202019081019150613dba565b90506001600160a01b038116158061198257506001600160a01b03811630145b8061199557506001600160a01b03811633145b156119cb5760405162461bcd60e51b8152600401610834906020808252600490820152635b65335d60e01b604082015260600190565b806001600160a01b0316315f03611a0d5760405162461bcd60e51b8152600401610834906020808252600490820152635b65345d60e01b604082015260600190565b5f8a8152600a60205260409020848484818110611a2c57611a2c6141dd565b83546001810185555f9485526020909420604090910292909201926002029091019050611a59828261421c565b505050600101611931565b505b611a703389612d66565b611a9a88620fffff611a846003600a614148565b611a8f90600a614148565b600954901c16612d7f565b611aa26123ff565b5050505050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611b0c5760405162461bcd60e51b81526020600482015260056024820152645b7374315d60d81b6044820152606401610834565b60098190556040518181527f12220fe348bfcd9d89bf856b98667916c5db45a8a2805aa90882d5c85f9c9ba19060200160405180910390a150565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b611b7c6121f9565b60095460011615611b9f5760405162461bcd60e51b8152600401610834906140f4565b60095460041615611bc25760405162461bcd60e51b815260040161083490614114565b5f838152600c602052604081206001810154909103611c0b5760405162461bcd60e51b81526020600482015260056024820152645b7072355d60d81b6044820152606401610834565b6001600160a01b0383165f908152600382016020819052604090912054601481901c620fffff1684811015611c6b5760405162461bcd60e51b81526020600482015260066024820152655b707236305d60d01b6044820152606401610834565b5f856001600160401b03611c80601480614148565b85901c16611c8e919061415b565b611c9c90633b9aca0061415b565b905080341015611cd75760405162461bcd60e51b81526020600482015260066024820152655b707236315d60d01b6044820152606401610834565b600185015460021c620fffff908116905f90611cf69089908716614172565b9050805f03611dc1576001600160a01b0389165f9081526020879052604081208190555b82811015611d9457896001600160a01b0316886002018281548110611d4157611d416141dd565b5f918252602090912001546001600160a01b031603611d8c57876002018181548110611d6f57611d6f6141dd565b5f91825260209091200180546001600160a01b0319169055611d94565b600101611d1a565b5081611d9f81614252565b600189018054623ffffd600160cc1b0316600283901b1790559250611e079050565b611ddf868a836cfffffffffffffffffffff000005f620fffff612e17565b611e07868a611dee8b88614172565b6cffffffffffffffff00000fffff6014620fffff612e17565b335f90815260208790526040902054620fffff168015611e4d57611e488733611e308c85614148565b6cfffffffffffffffffffff000005f620fffff612e17565b611ed1565b620fffff611e5d6003600a614148565b611e6890600a614148565b611e73906014614148565b611e7e906014614148565b600954901c16611e8f846001614148565b1115611ec65760405162461bcd60e51b81526020600482015260066024820152655b707232325d60d01b6044820152606401610834565b611ed188338b612429565b5f611eda6124ad565b90508015611f2b57611f2b8c7f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060058152602001645b7036315d60d81b8152506124df565b611f5d8c8c611f3a8489614172565b604051806040016040528060058152602001645b7036305d60d81b8152506124df565b7f3d65e6693c7e18b6ba2fcb558b3d890f2a2ed090615681ca9f0d82c20fe5048c3360028f8f8e6001600160401b03611f97601480614148565b8e901c16604051611fad96959493929190614185565b60405180910390a150505050505050505061128f6123ff565b611fce6121f9565b60095460011615611ff15760405162461bcd60e51b8152600401610834906140f4565b33611ffb836112da565b6001600160a01b0316146120395760405162461bcd60e51b81526020600482015260056024820152645b6533305d60d81b6044820152606401610834565b5f828152600c60205260408120906001600160401b0361205b60026014614148565b8360010154901c1690508083101561209d5760405162461bcd60e51b81526020600482015260056024820152645b6533315d60d81b6044820152606401610834565b815467ffffffffffffffff19166001600160401b0384161782556120c084611486565b7f5c43325359179f4471448fd5c0247053caeec2178ee6378a1a3eb4b2030d314633856120f186633b9aca0061415b565b604080516001600160a01b03909416845260208401929092529082015260600160405180910390a150506108056123ff565b600a602052815f5260405f20818154811061213c575f80fd5b5f918252602090912060029091020180546001909101546001600160a01b039091169250905082565b5f6001600160e01b031982166380ac58cd60e01b148061219557506001600160e01b03198216635b5e139f60e01b145b8061073e57506301ffc9a760e01b6001600160e01b031983161461073e565b5f818152600260205260408120546001600160a01b03168061073e57604051637e27328960e01b815260048101849052602401610834565b610c558383836001612e44565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005c1561223957604051633ee5aeb560e01b815260040160405180910390fd5b61226660017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005b90612f48565b565b5f5f612273836112da565b5f848152600d6020908152604080832054600c90925290912060018101549293506001600160a01b039182169290918416331480156122b95750600281901c620fffff16155b80156122e75750836001600160a01b0316836001600160a01b031614806122e757506001600160a01b038316155b156122f85750600195945050505050565b505f95945050505050565b6001600160a01b0382165f908152600b602052604081205490805b828110156123c7576001600160a01b0385165f908152600b60205260409020805485919083908110612352576123526141dd565b905f5260205f200154036123bf5761238360405180606001604052806021815260200161442f602191398587612f4f565b6001600160a01b0385165f908152600b602052604090208054829081106123ac576123ac6141dd565b5f918252602082200155600191506123c7565b60010161231e565b50805f0361128f5760405162461bcd60e51b81526020600482015260056024820152645b6535315d60d81b6044820152606401610834565b6122665f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00612260565b60028381018054600180820183555f928352602080842090920180546001600160a01b0319166001600160a01b0388169081179091558352600387019091526040909120620fffff84811690915581860154831c16919061248b908390614148565b60019095018054623ffffd600160cc1b03169590911b94909417909355505050565b5f6103e86103ff6124c06003600a614148565b6009546124d092911c163461415b565b6124da91906141be565b905090565b5f8390505f816001600160a01b031684846040516020016125009190613c95565b60408051601f198184030181529082905261251a91614267565b5f6040518083038185875af1925050503d805f8114612554576040519150601f19603f3d011682016040523d82523d5f602084013e612559565b606091505b505090508061257c578260405162461bcd60e51b81526004016108349190613c95565b7fbdab63af615e4e2519eb67a8d0c9a6a0b33087aae0f9a7dc98002099f6c01ea6868686866040516125b19493929190614272565b60405180910390a1505050505050565b61080582826040516024016125d79291906142a8565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052612f92565b61128f8484848460405160240161262094939291906142c9565b60408051601f198184030181529190526020810180516001600160e01b031663a7a8785360e01b179052612f92565b610c55838383604051602401612667939291906142f7565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b179052612f92565b610c5583838360405180602001604052805f815250612f9e565b5f6001600954165f146126d55760405162461bcd60e51b8152600401610834906140f4565b6127166040518060400160405280601f81526020017f55706461746520746f20257320746f6b656e4964202573206175746820257300815250858585612fa9565b5f838152600260205260408120546001600160a01b031690506001600160a01b0385161580159061274e57506001600160a01b038116155b15612793576127806040518060400160405280600c81526020016b0b4b4b4b4b4b4b4f9352539560a21b815250612ff2565b61278b858585613035565b915050611604565b6001600160a01b0385161580156127b157506001600160a01b038316155b156127e3576127806040518060400160405280600c81526020016b169696969696969f212aa92760a11b815250612ff2565b6001600160a01b0385161580159061280357506001600160a01b03831633145b15612859576128396040518060400160405280601081526020016f169696969696969f2a2920a729a322a960811b815250612ff2565b5f612845868686613035565b905061285085611486565b91506116049050565b5f848152600c602052604081208054909190612882906001600160401b0316633b9aca0061415b565b90506128a7604051806060016040528060278152602001614450602791393483612d1f565b6001600160a01b0387163014806128bd57508034105b156128f25760405162461bcd60e51b81526020600482015260056024820152645b6534305d60d81b6044820152606401610834565b5f6128fe88885f613035565b90505f6129096124ad565b90505f6129168234614172565b90505f6129238a83613127565b90505f6129308284614172565b90505f61293d8c8361318a565b905080604001518261294f9190614172565b91505f61295c8d84613294565b905080604001518361296e9190614172565b604083015190935015612986576129868d835f6134cc565b60408101511561299c5761299c8d8260016134cc565b83156129ac576129ac8d85613597565b6129d58d8b85604051806040016040528060058152602001645b7031305d60d81b8152506124df565b8515612a2457612a248d7f000000000000000000000000000000000000000000000000000000000000000088604051806040016040528060058152602001645b7031315d60d81b8152506124df565b50949c9b505050505050505050505050565b5f612a425f835f6126b0565b90506001600160a01b03811661080557604051637e27328960e01b815260048101839052602401610834565b5f620fffff612a7f6003600a614148565b612a8a90600a614148565b612a95906014614148565b6009546124da92911c1664e8d4a5100061415b565b6001600160a01b038216612adc57604051630b61174360e31b81526001600160a01b0383166004820152602401610834565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15612c6957604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290612b8a908890889087908790600401614324565b6020604051808303815f875af1925050508015612bc4575060408051601f3d908101601f19168201909252612bc191810190614356565b60015b612c2b573d808015612bf1576040519150601f19603f3d011682016040523d82523d5f602084013e612bf6565b606091505b5080515f03612c2357604051633250574960e11b81526001600160a01b0385166004820152602401610834565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14612c6757604051633250574960e11b81526001600160a01b0385166004820152602401610834565b505b5050505050565b60606040518060600160405280602181526020016144ba60219139905090565b60605f612c9c836135f1565b60010190505f816001600160401b03811115612cba57612cba613e05565b6040519080825280601f01601f191660200182016040528015612ce4576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084612cee57509392505050565b610c55838383604051602401612d3793929190614371565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b179052612f92565b610805828260405180602001604052805f8152506136c8565b5f612d8f8264e8d4a5100061415b565b90508015610c555780341015612dcf5760405162461bcd60e51b81526020600482015260056024820152645b6531305d60d81b6044820152606401610834565b610c55837f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70315d60e01b8152506124df565b6001600160a01b039094165f908152602095909552604090942080549290931690931b9216919091179055565b8080612e5857506001600160a01b03821615155b15612f19575f612e67846121b4565b90506001600160a01b03831615801590612e935750826001600160a01b0316816001600160a01b031614155b8015612ea65750612ea48184611b47565b155b15612ecf5760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610834565b8115612f175783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b80825d5050565b610c55838383604051602401612f6793929190614395565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b1790525b612f9b816136df565b50565b61152d8484846136fe565b61128f84848484604051602401612fc394939291906143c7565b60408051601f198184030181529190526020810180516001600160e01b03166363fb8bc560e01b179052612f92565b612f9b816040516024016130069190613c95565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052612f92565b5f828152600260205260408120546001600160a01b0390811690831615613061576130618184866137ab565b6001600160a01b0381161561309b5761307c5f855f5f612e44565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156130c9576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f828152600d60209081526040808320815180830190925280546001600160a01b03168083526001909101549282019290925290829015613182576103e8826020015185613175919061415b565b61317f91906141be565b90505b949350505050565b6131ad604051806060016040528060608152602001606081526020015f81525090565b604080515f60608201818152608083018452825282518181526020818101855280840191909152828401829052868252600c9052919091206001810154801561328a576131fa868661380f565b925082604001518561320c9190614172565b9450600282015f5b815481101561326057836003015f838381548110613234576132346141dd565b5f9182526020808320909101546001600160a01b03168352820192909252604001812055600101613214565b505f878152600c6020526040812081815560018101829055906132866002830182613bc1565b5050505b5090949350505050565b6132b7604051806060016040528060608152602001606081526020015f81525090565b604080516060810182525f858152600a6020529182205481906001600160401b038111156132e7576132e7613e05565b604051908082528060200260200182016040528015613310578160200160208202803683370190505b5081525f868152600a60209081526040909120549101906001600160401b0381111561333e5761333e613e05565b604051908082528060200260200182016040528015613367578160200160208202803683370190505b5081526020015f81525090505f5b5f858152600a60205260409020548110156134b5575f858152600a602052604081208054839081106133a9576133a96141dd565b905f5260205f20906002020190505f6103e88260010154876133cb919061415b565b6133d591906141be565b905080861061347a5781546001600160a01b031615613475578154845180516001600160a01b039092169185908110613410576134106141dd565b60200260200101906001600160a01b031690816001600160a01b0316815250508084602001518481518110613447576134476141dd565b60200260200101818152505080846040018181516134659190614148565b9052506134728187614172565b95505b6134ab565b60405162461bcd60e51b81526020600482015260066024820152655b707235325d60d01b6044820152606401610834565b5050600101613375565b505f848152600a6020526040812061160491613bdc565b5f5b82515181101561128f57825180515f9190839081106134ef576134ef6141dd565b60200260200101516001600160a01b03161461358f5761358f84845f0151838151811061351e5761351e6141dd565b60200260200101518560200151848151811061353c5761353c6141dd565b60200260200101518561356c57604051806040016040528060058152602001645b7035315d60d81b8152506124df565b604051806040016040528060058152602001645b7035305d60d81b8152506124df565b6001016134ce565b5f828152600d60209081526040918290208251808401845281546001600160a01b031680825260019092015481840152835180850190945260048452635b70325d60e01b928401929092529091610c5591859185906124df565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061362f5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061365b576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061367957662386f26fc10000830492506010015b6305f5e1008310613691576305f5e100830492506008015b61271083106136a557612710830492506004015b606483106136b7576064830492506002015b600a831061073e5760010192915050565b6136d28383613aff565b610c55335f858585612b48565b5f6a636f6e736f6c652e6c6f6790505f5f835160208501845afa505050565b6001600160a01b03821661372757604051633250574960e11b81525f6004820152602401610834565b5f61373383835f6126b0565b90506001600160a01b03811661375f57604051637e27328960e01b815260048101839052602401610834565b836001600160a01b0316816001600160a01b03161461128f576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610834565b6137b6838383613b60565b610c55576001600160a01b0383166137e457604051637e27328960e01b815260048101829052602401610834565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610834565b613832604051806060016040528060608152602001606081526020015f81525090565b5f838152600c602052604080822081516060810190925260028101549092919081906001600160401b0381111561386b5761386b613e05565b604051908082528060200260200182016040528015613894578160200160208202803683370190505b50815260200183600201805490506001600160401b038111156138b9576138b9613e05565b6040519080825280602002602001820160405280156138e2578160200160208202803683370190505b5081526020015f81525090505f63ffffffff604080600260146139059190614148565b61390f9190614148565b6139199190614148565b613924906014614148565b6001850154901c1690505f613939868361415b565b5f600186018190559091505b6002850154811015613ae6575f856002018281548110613967576139676141dd565b5f9182526020808320909101546001600160a01b031680835260038901909152604090912054909150620fffff168015613aa5575f6139aa62989680606461415b565b6139b4868461415b565b6139be91906141be565b9050808a10613a6e5782875f015185815181106139dd576139dd6141dd565b60200260200101906001600160a01b031690816001600160a01b0316815250508087602001518581518110613a1457613a146141dd565b602002602001018181525050876003015f846001600160a01b03166001600160a01b031681526020019081526020015f205f90558087604001818151613a5a9190614148565b905250613a67818b614172565b9950613a9f565b60405162461bcd60e51b81526020600482015260066024820152655b707235315d60d01b6044820152606401610834565b50613adc565b5f865f01518481518110613abb57613abb6141dd565b60200260200101906001600160a01b031690816001600160a01b0316815250505b5050600101613945565b50613af4600285015f613bc1565b509095945050505050565b6001600160a01b038216613b2857604051633250574960e11b81525f6004820152602401610834565b5f613b3483835f6126b0565b90506001600160a01b03811615610c55576040516339e3563760e11b81525f6004820152602401610834565b5f6001600160a01b038316158015906131825750826001600160a01b0316846001600160a01b03161480613b995750613b998484611b47565b806131825750505f908152600460205260409020546001600160a01b03908116911614919050565b5080545f8255905f5260205f2090810190612f9b9190613bfa565b5080545f8255600202905f5260205f2090810190612f9b9190613c12565b5b80821115613c0e575f8155600101613bfb565b5090565b5b80821115613c0e5780546001600160a01b03191681555f6001820155600201613c13565b6001600160e01b031981168114612f9b575f5ffd5b5f60208284031215613c5c575f5ffd5b813561160481613c37565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6116046020830184613c67565b5f60208284031215613cb7575f5ffd5b5035919050565b6001600160a01b0381168114612f9b575f5ffd5b5f5f60408385031215613ce3575f5ffd5b8235613cee81613cbe565b946020939093013593505050565b5f5f5f60608486031215613d0e575f5ffd5b8335613d1981613cbe565b95602085013595506040909401359392505050565b5f5f60408385031215613d3f575f5ffd5b50508035926020909101359150565b5f5f60408385031215613d5f575f5ffd5b823591506020830135613d7181613cbe565b809150509250929050565b5f5f5f60608486031215613d8e575f5ffd5b8335613d9981613cbe565b92506020840135613da981613cbe565b929592945050506040919091013590565b5f60208284031215613dca575f5ffd5b813561160481613cbe565b5f5f60408385031215613de6575f5ffd5b8235613df181613cbe565b915060208301358015158114613d71575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215613e2c575f5ffd5b8435613e3781613cbe565b93506020850135613e4781613cbe565b92506040850135915060608501356001600160401b03811115613e68575f5ffd5b8501601f81018713613e78575f5ffd5b80356001600160401b03811115613e9157613e91613e05565b604051601f8201601f19908116603f011681016001600160401b0381118282101715613ebf57613ebf613e05565b604052818152828201602001891015613ed6575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b602080825282518282018190525f918401906040840190835b81811015613af45783516001600160a01b0316835260209384019390920191600101613f10565b5f5f5f5f60808587031215613f4a575f5ffd5b8435613f5581613cbe565b966020860135965060408601359560600135945092505050565b602080825282518282018190525f918401906040840190835b81811015613af4578351835260209384019390920191600101613f88565b5f5f5f5f5f5f5f5f60e0898b031215613fbd575f5ffd5b883597506020890135965060408901359550606089013594506080890135935060a0890135925060c08901356001600160401b03811115613ffc575f5ffd5b8901601f81018b1361400c575f5ffd5b80356001600160401b03811115614021575f5ffd5b8b60208260061b8401011115614035575f5ffd5b989b979a50959850939692959194602001935050565b5f5f6040838503121561405c575f5ffd5b823561406781613cbe565b91506020830135613d7181613cbe565b5f5f5f5f6080858703121561408a575f5ffd5b843561409581613cbe565b93506020850135925060408501356140ac81613cbe565b9396929550929360600135925050565b600181811c908216806140d057607f821691505b6020821081036140ee57634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600690820152655b737431355d60d01b604082015260600190565b6020808252600690820152655b737431305d60d01b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561073e5761073e614134565b808202811582820484141761073e5761073e614134565b8181038181111561073e5761073e614134565b6001600160a01b03968716815260208101959095529290941660408401526060830152608082019290925260a081019190915260c00190565b5f826141d857634e487b7160e01b5f52601260045260245ffd5b500490565b634e487b7160e01b5f52603260045260245ffd5b5f81518060208401855e5f93019283525090919050565b5f61318261421683866141f1565b846141f1565b813561422781613cbe565b81546001600160a01b0319166001600160a01b03919091161781556020919091013560019190910155565b5f8161426057614260614134565b505f190190565b5f61160482846141f1565b84815260018060a01b0384166020820152826040820152608060608201525f61429e6080830184613c67565b9695505050505050565b604081525f6142ba6040830185613c67565b90508260208301529392505050565b608081525f6142db6080830187613c67565b6020830195909552506040810192909252606090910152919050565b606081525f6143096060830186613c67565b6001600160a01b039490941660208301525060400152919050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061429e90830184613c67565b5f60208284031215614366575f5ffd5b815161160481613c37565b606081525f6143836060830186613c67565b60208301949094525060400152919050565b606081525f6143a76060830186613c67565b6020830194909452506001600160a01b0391909116604090910152919050565b608081525f6143d96080830187613c67565b6001600160a01b039586166020840152604083019490945250921660609092019190915291905056fe6d696e74207072696365202573207072696365416e644973737565732061667465722075706461746520257364656c65746520746f6b656e20257320666f7220746f6b656e4f776e65722025732d2d2d2d2d2d2d3e50555243484153452c206d73672e76616c75652025732070726963652025734f66666572696e6720746f74616c536861726550657263656e74202573207368617265734f666665726564202573206d696e546f6b656e53616c65507269636520257368747470733a2f2f6e66742e6861726d6f6e697a652e736f6369616c2f6e66742f7075726368617365546f6b656e20746f6b656e4f776e657220257320746f6b656e4964202573a26469706673582212200f29552223d92d16a110e29b0b4466943fe403231edbbb229c7a8dca1296e11864736f6c634300081c0033",
  "deployedBytecode": "0x60806040526004361061021d575f3560e01c806395d89b411161011e578063cf85a77c116100a8578063e75722301161006d578063e75722301461069c578063e985e9c5146106d0578063eae71eeb146106ef578063f7d9757714610702578063f9dd6ea714610715575f5ffd5b8063cf85a77c14610616578063d092837f1461062b578063d9d616551461063e578063dae2e4571461066a578063e1a447491461067d575f5ffd5b8063a22cb465116100ee578063a22cb46514610578578063b88d4fde14610597578063bcd53992146105b6578063c5350e07146105cb578063c87b56dd146105f7575f5ffd5b806395d89b4114610504578063976b3113146105185780639dc29fac14610546578063a15454ba14610565575f5ffd5b80631af9cf49116101aa5780634ef98ff91161016f5780634ef98ff9146104225780636352211e146104375780636c7555aa1461045657806370a08231146104b3578063893d20e8146104d2575f5ffd5b80631af9cf491461036f5780631cc2c911146103b257806323b872dd146103c557806342842e0e146103e45780634abf825d14610403575f5ffd5b80631069143a116101f05780631069143a146102ce5780631072cbea146102f157806317f69222146103045780631a16bf45146103175780631af2e07b1461032a575f5ffd5b806301ffc9a71461022157806306fdde0314610255578063081812fc14610276578063095ea7b3146102ad575b5f5ffd5b34801561022c575f5ffd5b5061024061023b366004613c4c565b610734565b60405190151581526020015b60405180910390f35b348015610260575f5ffd5b50610269610744565b60405161024c9190613c95565b348015610281575f5ffd5b50610295610290366004613ca7565b6107d3565b6040516001600160a01b03909116815260200161024c565b3480156102b8575f5ffd5b506102cc6102c7366004613cd2565b6107fa565b005b3480156102d9575f5ffd5b506102e360095481565b60405190815260200161024c565b6102cc6102ff366004613cd2565b610809565b6102cc610312366004613cfc565b6108c9565b6102cc610325366004613d2e565b610c5a565b348015610335575f5ffd5b506102e3610344366004613d4e565b5f828152600c602090815260408083206001600160a01b038516845260030190915290205492915050565b34801561037a575f5ffd5b5061038e610389366004613ca7565b6110e6565b6040805182516001600160a01b03168152602092830151928101929092520161024c565b6102cc6103c0366004613cd2565b611166565b3480156103d0575f5ffd5b506102cc6103df366004613d7c565b61120c565b3480156103ef575f5ffd5b506102cc6103fe366004613d7c565b611295565b34801561040e575f5ffd5b506102e361041d366004613cd2565b6112af565b34801561042d575f5ffd5b506102e360085481565b348015610442575f5ffd5b50610295610451366004613ca7565b6112da565b348015610461575f5ffd5b50610494610470366004613ca7565b600d6020525f9081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b03909316835260208301919091520161024c565b3480156104be575f5ffd5b506102e36104cd366004613dba565b6112e4565b3480156104dd575f5ffd5b507f0000000000000000000000000000000000000000000000000000000000000000610295565b34801561050f575f5ffd5b50610269611329565b348015610523575f5ffd5b506102e3610532366004613ca7565b5f908152600c602052604090206001015490565b348015610551575f5ffd5b506102cc610560366004613cd2565b611338565b6102cc610573366004613ca7565b611486565b348015610583575f5ffd5b506102cc610592366004613dd5565b611517565b3480156105a2575f5ffd5b506102cc6105b1366004613e19565b611522565b3480156105c1575f5ffd5b506102e360065481565b3480156105d6575f5ffd5b506105ea6105e5366004613ca7565b61153a565b60405161024c9190613ef7565b348015610602575f5ffd5b50610269610611366004613ca7565b6115a6565b348015610621575f5ffd5b506102e360075481565b6102cc610639366004613f37565b61160b565b348015610649575f5ffd5b5061065d610658366004613dba565b611752565b60405161024c9190613f6f565b6102cc610678366004613fa6565b6117ba565b348015610688575f5ffd5b506102cc610697366004613ca7565b611aac565b3480156106a7575f5ffd5b506102e36106b6366004613ca7565b5f908152600c60205260409020546001600160401b031690565b3480156106db575f5ffd5b506102406106ea36600461404b565b611b47565b6102cc6106fd366004614077565b611b74565b6102cc610710366004613d2e565b611fc6565b348015610720575f5ffd5b5061049461072f366004613d2e565b612123565b5f61073e82612165565b92915050565b60605f8054610752906140bc565b80601f016020809104026020016040519081016040528092919081815260200182805461077e906140bc565b80156107c95780601f106107a0576101008083540402835291602001916107c9565b820191905f5260205f20905b8154815290600101906020018083116107ac57829003601f168201915b5050505050905090565b5f6107dd826121b4565b505f828152600460205260409020546001600160a01b031661073e565b6108058282336121ec565b5050565b6108116121f9565b6009546001161561083d5760405162461bcd60e51b8152600401610834906140f4565b60405180910390fd5b61084681612268565b600103610891576108573382612303565b6001600160a01b0382165f908152600b602090815260408220805460018101825590835291200181905561088c338383611295565b6108c1565b60405162461bcd60e51b81526020600482015260056024820152645b6535305d60d81b6044820152606401610834565b6108056123ff565b6108d16121f9565b600954600116156108f45760405162461bcd60e51b8152600401610834906140f4565b600954600416156109175760405162461bcd60e51b815260040161083490614114565b5f828152600c60205260409020600181015480158061093a575060016003821614155b156109705760405162461bcd60e51b81526020600482015260066024820152655b707232305d60d01b6044820152606401610834565b5f620fffff60408061098460026014614148565b61098e9190614148565b6109989190614148565b83901c169050808411156109d75760405162461bcd60e51b81526020600482015260066024820152655b707232315d60d01b6044820152606401610834565b620fffff600283901c8116905f906109f16003600a614148565b6109fc90600a614148565b610a07906014614148565b610a12906014614148565b600954901c16905080610a26836001614148565b1115610a5d5760405162461bcd60e51b81526020600482015260066024820152655b707232325d60d01b6044820152606401610834565b5f6001600160401b036040610a7460026014614148565b610a7e9190614148565b86901c1687610a8d919061415b565b610a9b90633b9aca0061415b565b905080341015610ad65760405162461bcd60e51b81526020600482015260066024820152655b707232335d60d01b6044820152606401610834565b610ae1863389612429565b5f610aec8886614172565b9050604080610afd60026014614148565b610b079190614148565b610b119190614148565b81901b6001600160cc1b03604080610b2b60026014614148565b610b359190614148565b610b3f9190614148565b620fffff901b18600c5f8c81526020019081526020015f206001015416178760010181905550805f03610b785760018701805460031790555b5f610b816124ad565b90508015610bd257610bd28a7f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060058152602001645b7032315d60d81b8152506124df565b610c048a8c610be18487614172565b604051806040016040528060058152602001645b7032305d60d81b8152506124df565b7f3d65e6693c7e18b6ba2fcb558b3d890f2a2ed090615681ca9f0d82c20fe5048c335f8d8d8d88604051610c3d96959493929190614185565b60405180910390a15050505050505050610c556123ff565b505050565b610c626121f9565b60095460011615610c855760405162461bcd60e51b8152600401610834906140f4565b60095460041615610ca85760405162461bcd60e51b815260040161083490614114565b610cd56040518060400160405280600b81526020016a4f66666572696e6720257360a81b815250836125c1565b33610cdf836112da565b6001600160a01b031614610d1d5760405162461bcd60e51b81526020600482015260056024820152645b7072315d60d81b6044820152606401610834565b5f600c5f8481526020019081526020015f209050610d626040518060400160405280600b81526020016a2e2e2e697373756520257360a81b81525082600101546125c1565b60026003831603610d7c57600101805460021790556108c1565b600181015460031615610db95760405162461bcd60e51b81526020600482015260056024820152645b7072325d60d81b6044820152606401610834565b5f6103ff604080610dcc60026014614148565b610dd69190614148565b610de09190614148565b610deb906014614148565b84901c1690505f620fffff604080610e0560026014614148565b610e0f9190614148565b610e199190614148565b85901c1690505f6001600160401b03610e3460026014614148565b86901c1690505f6001600160401b036040610e5160026014614148565b610e5b9190614148565b87901c169050610e8560405180608001604052806043815260200161447760439139858585612606565b610ebd604051806040016040528060168152602001754f66666572696e67207368617265507269636520257360501b815250826125c1565b821580610ec8575081155b80610ed1575080155b80610ee2575066038d7ea4c6800081115b80610f0a575084546001600160401b031682118015610f0a575084546001600160401b031615155b15610f3f5760405162461bcd60e51b81526020600482015260056024820152645b7072335d60d81b6044820152606401610834565b620fffff610f4f6003600a614148565b610f5a90600a614148565b610f65906014614148565b610f70906014614148565b610f7b906014614148565b610f86906014614148565b600954901c16831180610fee5750836103ff610fa46003600a614148565b610faf90600a614148565b610fba906014614148565b610fc5906014614148565b610fd0906014614148565b610fdb906014614148565b610fe6906014614148565b600954901c16105b80610ff9575083600a115b1561102e5760405162461bcd60e51b81526020600482015260056024820152645b7072345d60d81b6044820152606401610834565b5f8361103d620f42408761415b565b61104791906141be565b90506004600160cc1b0387166001176001600160cc1b0360408061106d60026014614148565b6110779190614148565b6110819190614148565b61108c906014614148565b63ffffffff901b18166040806110a460026014614148565b6110ae9190614148565b6110b89190614148565b6110c3906014614148565b82901b17600187018190556110d789611486565b505050505050506108056123ff565b604080518082019091525f8082526020820152600954600216156111345760405162461bcd60e51b81526020600482015260056024820152645b7374355d60d81b6044820152606401610834565b505f908152600d6020908152604091829020825180840190935280546001600160a01b03168352600101549082015290565b61116e6121f9565b600954600116156111915760405162461bcd60e51b8152600401610834906140f4565b6111b46040518060600160405280602681526020016144db60269139838361264f565b5f818152600c60205260408120546001600160401b031690036112015760405162461bcd60e51b81526020600482015260056024820152645b6532305d60d81b6044820152606401610834565b6108c1823383612696565b6001600160a01b03821661123557604051633250574960e11b81525f6004820152602401610834565b5f6112418383336126b0565b9050836001600160a01b0316816001600160a01b03161461128f576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610834565b50505050565b610c5583838360405180602001604052805f815250611522565b600b602052815f5260405f2081815481106112c8575f80fd5b905f5260205f20015f91509150505481565b5f61073e826121b4565b5f6001600160a01b03821661130e576040516322718ad960e21b81525f6004820152602401610834565b506001600160a01b03165f9081526003602052604090205490565b606060018054610752906140bc565b6113406121f9565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146113a05760405162461bcd60e51b81526020600482015260056024820152645b7374315d60d81b6044820152606401610834565b6113aa8282612303565b5f818152600c60205260408120600201905b815481101561141857600c5f8481526020019081526020015f206003015f8383815481106113ec576113ec6141dd565b5f9182526020808320909101546001600160a01b031683528201929092526040018120556001016113bc565b505f828152600c60205260408120818155600181018290559061143e6002830182613bc1565b50505f828152600d6020908152604080832080546001600160a01b0319168155600101839055600a909152812061147491613bdc565b61147d82612a36565b506108056123ff565b5f61148f612a6e565b9050801561080557803410156114cf5760405162461bcd60e51b81526020600482015260056024820152645b6533355d60d81b6044820152606401610834565b610805827f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70355d60e01b8152506124df565b610805338383612aaa565b61152d84848461120c565b61128f3385858585612b48565b5f818152600c602090815260409182902060020180548351818402810184019094528084526060939283018282801561159a57602002820191905f5260205f20905b81546001600160a01b0316815260019091019060200180831161157c575b50505050509050919050565b60606115b1826121b4565b505f6115bb612c70565b90505f8151116115d95760405180602001604052805f815250611604565b806115e384612c90565b6040516020016115f4929190614208565b6040516020818303038152906040525b9392505050565b6116136121f9565b600954600116156116365760405162461bcd60e51b8152600401610834906140f4565b600954600416156116595760405162461bcd60e51b815260040161083490614114565b5f838152600c60209081526040808320338452600301909152902054620fffff16828110156116b35760405162461bcd60e51b81526020600482015260066024820152655b707234305d60d01b6044820152606401610834565b6014620fffff8416901b811790506014806116ce9190614148565b5f858152600c6020908152604080832033845260030190915290206001600160401b03841690911b919091179081905561170784611486565b7f3d65e6693c7e18b6ba2fcb558b3d890f2a2ed090615681ca9f0d82c20fe5048c3360018787878760405161174196959493929190614185565b60405180910390a15061128f6123ff565b6001600160a01b0381165f908152600b602090815260409182902080548351818402810184019094528084526060939283018282801561159a57602002820191905f5260205f20905b81548152602001906001019080831161179b5750505050509050919050565b6117c26121f9565b600954600116156117e55760405162461bcd60e51b8152600401610834906140f4565b845f0361181d5760405162461bcd60e51b8152600401610834906020808252600490820152635b65315d60e01b604082015260600190565b66038d7ea4c680006001600160401b03881611156118665760405162461bcd60e51b8152600401610834906020808252600490820152635b65325d60e01b604082015260600190565b600685905560088490556007839055335f908152600b602090815260408083208054600181018255908452828420018b90558a8352600c8252918290206001600160401b038a169055815160608101909252602c8083526118de9291614403908301395f8a8152600c60205260409020548990612d1f565b85156119295760408051808201825233815260208082018981525f8c8152600d909252929020905181546001600160a01b0319166001600160a01b0390911617815590516001909101555b8015611a66575f5b81811015611a64575f83838381811061194c5761194c6141dd565b6119629260206040909202019081019150613dba565b90506001600160a01b038116158061198257506001600160a01b03811630145b8061199557506001600160a01b03811633145b156119cb5760405162461bcd60e51b8152600401610834906020808252600490820152635b65335d60e01b604082015260600190565b806001600160a01b0316315f03611a0d5760405162461bcd60e51b8152600401610834906020808252600490820152635b65345d60e01b604082015260600190565b5f8a8152600a60205260409020848484818110611a2c57611a2c6141dd565b83546001810185555f9485526020909420604090910292909201926002029091019050611a59828261421c565b505050600101611931565b505b611a703389612d66565b611a9a88620fffff611a846003600a614148565b611a8f90600a614148565b600954901c16612d7f565b611aa26123ff565b5050505050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611b0c5760405162461bcd60e51b81526020600482015260056024820152645b7374315d60d81b6044820152606401610834565b60098190556040518181527f12220fe348bfcd9d89bf856b98667916c5db45a8a2805aa90882d5c85f9c9ba19060200160405180910390a150565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b611b7c6121f9565b60095460011615611b9f5760405162461bcd60e51b8152600401610834906140f4565b60095460041615611bc25760405162461bcd60e51b815260040161083490614114565b5f838152600c602052604081206001810154909103611c0b5760405162461bcd60e51b81526020600482015260056024820152645b7072355d60d81b6044820152606401610834565b6001600160a01b0383165f908152600382016020819052604090912054601481901c620fffff1684811015611c6b5760405162461bcd60e51b81526020600482015260066024820152655b707236305d60d01b6044820152606401610834565b5f856001600160401b03611c80601480614148565b85901c16611c8e919061415b565b611c9c90633b9aca0061415b565b905080341015611cd75760405162461bcd60e51b81526020600482015260066024820152655b707236315d60d01b6044820152606401610834565b600185015460021c620fffff908116905f90611cf69089908716614172565b9050805f03611dc1576001600160a01b0389165f9081526020879052604081208190555b82811015611d9457896001600160a01b0316886002018281548110611d4157611d416141dd565b5f918252602090912001546001600160a01b031603611d8c57876002018181548110611d6f57611d6f6141dd565b5f91825260209091200180546001600160a01b0319169055611d94565b600101611d1a565b5081611d9f81614252565b600189018054623ffffd600160cc1b0316600283901b1790559250611e079050565b611ddf868a836cfffffffffffffffffffff000005f620fffff612e17565b611e07868a611dee8b88614172565b6cffffffffffffffff00000fffff6014620fffff612e17565b335f90815260208790526040902054620fffff168015611e4d57611e488733611e308c85614148565b6cfffffffffffffffffffff000005f620fffff612e17565b611ed1565b620fffff611e5d6003600a614148565b611e6890600a614148565b611e73906014614148565b611e7e906014614148565b600954901c16611e8f846001614148565b1115611ec65760405162461bcd60e51b81526020600482015260066024820152655b707232325d60d01b6044820152606401610834565b611ed188338b612429565b5f611eda6124ad565b90508015611f2b57611f2b8c7f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060058152602001645b7036315d60d81b8152506124df565b611f5d8c8c611f3a8489614172565b604051806040016040528060058152602001645b7036305d60d81b8152506124df565b7f3d65e6693c7e18b6ba2fcb558b3d890f2a2ed090615681ca9f0d82c20fe5048c3360028f8f8e6001600160401b03611f97601480614148565b8e901c16604051611fad96959493929190614185565b60405180910390a150505050505050505061128f6123ff565b611fce6121f9565b60095460011615611ff15760405162461bcd60e51b8152600401610834906140f4565b33611ffb836112da565b6001600160a01b0316146120395760405162461bcd60e51b81526020600482015260056024820152645b6533305d60d81b6044820152606401610834565b5f828152600c60205260408120906001600160401b0361205b60026014614148565b8360010154901c1690508083101561209d5760405162461bcd60e51b81526020600482015260056024820152645b6533315d60d81b6044820152606401610834565b815467ffffffffffffffff19166001600160401b0384161782556120c084611486565b7f5c43325359179f4471448fd5c0247053caeec2178ee6378a1a3eb4b2030d314633856120f186633b9aca0061415b565b604080516001600160a01b03909416845260208401929092529082015260600160405180910390a150506108056123ff565b600a602052815f5260405f20818154811061213c575f80fd5b5f918252602090912060029091020180546001909101546001600160a01b039091169250905082565b5f6001600160e01b031982166380ac58cd60e01b148061219557506001600160e01b03198216635b5e139f60e01b145b8061073e57506301ffc9a760e01b6001600160e01b031983161461073e565b5f818152600260205260408120546001600160a01b03168061073e57604051637e27328960e01b815260048101849052602401610834565b610c558383836001612e44565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005c1561223957604051633ee5aeb560e01b815260040160405180910390fd5b61226660017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005b90612f48565b565b5f5f612273836112da565b5f848152600d6020908152604080832054600c90925290912060018101549293506001600160a01b039182169290918416331480156122b95750600281901c620fffff16155b80156122e75750836001600160a01b0316836001600160a01b031614806122e757506001600160a01b038316155b156122f85750600195945050505050565b505f95945050505050565b6001600160a01b0382165f908152600b602052604081205490805b828110156123c7576001600160a01b0385165f908152600b60205260409020805485919083908110612352576123526141dd565b905f5260205f200154036123bf5761238360405180606001604052806021815260200161442f602191398587612f4f565b6001600160a01b0385165f908152600b602052604090208054829081106123ac576123ac6141dd565b5f918252602082200155600191506123c7565b60010161231e565b50805f0361128f5760405162461bcd60e51b81526020600482015260056024820152645b6535315d60d81b6044820152606401610834565b6122665f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00612260565b60028381018054600180820183555f928352602080842090920180546001600160a01b0319166001600160a01b0388169081179091558352600387019091526040909120620fffff84811690915581860154831c16919061248b908390614148565b60019095018054623ffffd600160cc1b03169590911b94909417909355505050565b5f6103e86103ff6124c06003600a614148565b6009546124d092911c163461415b565b6124da91906141be565b905090565b5f8390505f816001600160a01b031684846040516020016125009190613c95565b60408051601f198184030181529082905261251a91614267565b5f6040518083038185875af1925050503d805f8114612554576040519150601f19603f3d011682016040523d82523d5f602084013e612559565b606091505b505090508061257c578260405162461bcd60e51b81526004016108349190613c95565b7fbdab63af615e4e2519eb67a8d0c9a6a0b33087aae0f9a7dc98002099f6c01ea6868686866040516125b19493929190614272565b60405180910390a1505050505050565b61080582826040516024016125d79291906142a8565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052612f92565b61128f8484848460405160240161262094939291906142c9565b60408051601f198184030181529190526020810180516001600160e01b031663a7a8785360e01b179052612f92565b610c55838383604051602401612667939291906142f7565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b179052612f92565b610c5583838360405180602001604052805f815250612f9e565b5f6001600954165f146126d55760405162461bcd60e51b8152600401610834906140f4565b6127166040518060400160405280601f81526020017f55706461746520746f20257320746f6b656e4964202573206175746820257300815250858585612fa9565b5f838152600260205260408120546001600160a01b031690506001600160a01b0385161580159061274e57506001600160a01b038116155b15612793576127806040518060400160405280600c81526020016b0b4b4b4b4b4b4b4f9352539560a21b815250612ff2565b61278b858585613035565b915050611604565b6001600160a01b0385161580156127b157506001600160a01b038316155b156127e3576127806040518060400160405280600c81526020016b169696969696969f212aa92760a11b815250612ff2565b6001600160a01b0385161580159061280357506001600160a01b03831633145b15612859576128396040518060400160405280601081526020016f169696969696969f2a2920a729a322a960811b815250612ff2565b5f612845868686613035565b905061285085611486565b91506116049050565b5f848152600c602052604081208054909190612882906001600160401b0316633b9aca0061415b565b90506128a7604051806060016040528060278152602001614450602791393483612d1f565b6001600160a01b0387163014806128bd57508034105b156128f25760405162461bcd60e51b81526020600482015260056024820152645b6534305d60d81b6044820152606401610834565b5f6128fe88885f613035565b90505f6129096124ad565b90505f6129168234614172565b90505f6129238a83613127565b90505f6129308284614172565b90505f61293d8c8361318a565b905080604001518261294f9190614172565b91505f61295c8d84613294565b905080604001518361296e9190614172565b604083015190935015612986576129868d835f6134cc565b60408101511561299c5761299c8d8260016134cc565b83156129ac576129ac8d85613597565b6129d58d8b85604051806040016040528060058152602001645b7031305d60d81b8152506124df565b8515612a2457612a248d7f000000000000000000000000000000000000000000000000000000000000000088604051806040016040528060058152602001645b7031315d60d81b8152506124df565b50949c9b505050505050505050505050565b5f612a425f835f6126b0565b90506001600160a01b03811661080557604051637e27328960e01b815260048101839052602401610834565b5f620fffff612a7f6003600a614148565b612a8a90600a614148565b612a95906014614148565b6009546124da92911c1664e8d4a5100061415b565b6001600160a01b038216612adc57604051630b61174360e31b81526001600160a01b0383166004820152602401610834565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15612c6957604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290612b8a908890889087908790600401614324565b6020604051808303815f875af1925050508015612bc4575060408051601f3d908101601f19168201909252612bc191810190614356565b60015b612c2b573d808015612bf1576040519150601f19603f3d011682016040523d82523d5f602084013e612bf6565b606091505b5080515f03612c2357604051633250574960e11b81526001600160a01b0385166004820152602401610834565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14612c6757604051633250574960e11b81526001600160a01b0385166004820152602401610834565b505b5050505050565b60606040518060600160405280602181526020016144ba60219139905090565b60605f612c9c836135f1565b60010190505f816001600160401b03811115612cba57612cba613e05565b6040519080825280601f01601f191660200182016040528015612ce4576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084612cee57509392505050565b610c55838383604051602401612d3793929190614371565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b179052612f92565b610805828260405180602001604052805f8152506136c8565b5f612d8f8264e8d4a5100061415b565b90508015610c555780341015612dcf5760405162461bcd60e51b81526020600482015260056024820152645b6531305d60d81b6044820152606401610834565b610c55837f000000000000000000000000000000000000000000000000000000000000000083604051806040016040528060048152602001635b70315d60e01b8152506124df565b6001600160a01b039094165f908152602095909552604090942080549290931690931b9216919091179055565b8080612e5857506001600160a01b03821615155b15612f19575f612e67846121b4565b90506001600160a01b03831615801590612e935750826001600160a01b0316816001600160a01b031614155b8015612ea65750612ea48184611b47565b155b15612ecf5760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610834565b8115612f175783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b80825d5050565b610c55838383604051602401612f6793929190614395565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b1790525b612f9b816136df565b50565b61152d8484846136fe565b61128f84848484604051602401612fc394939291906143c7565b60408051601f198184030181529190526020810180516001600160e01b03166363fb8bc560e01b179052612f92565b612f9b816040516024016130069190613c95565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052612f92565b5f828152600260205260408120546001600160a01b0390811690831615613061576130618184866137ab565b6001600160a01b0381161561309b5761307c5f855f5f612e44565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156130c9576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f828152600d60209081526040808320815180830190925280546001600160a01b03168083526001909101549282019290925290829015613182576103e8826020015185613175919061415b565b61317f91906141be565b90505b949350505050565b6131ad604051806060016040528060608152602001606081526020015f81525090565b604080515f60608201818152608083018452825282518181526020818101855280840191909152828401829052868252600c9052919091206001810154801561328a576131fa868661380f565b925082604001518561320c9190614172565b9450600282015f5b815481101561326057836003015f838381548110613234576132346141dd565b5f9182526020808320909101546001600160a01b03168352820192909252604001812055600101613214565b505f878152600c6020526040812081815560018101829055906132866002830182613bc1565b5050505b5090949350505050565b6132b7604051806060016040528060608152602001606081526020015f81525090565b604080516060810182525f858152600a6020529182205481906001600160401b038111156132e7576132e7613e05565b604051908082528060200260200182016040528015613310578160200160208202803683370190505b5081525f868152600a60209081526040909120549101906001600160401b0381111561333e5761333e613e05565b604051908082528060200260200182016040528015613367578160200160208202803683370190505b5081526020015f81525090505f5b5f858152600a60205260409020548110156134b5575f858152600a602052604081208054839081106133a9576133a96141dd565b905f5260205f20906002020190505f6103e88260010154876133cb919061415b565b6133d591906141be565b905080861061347a5781546001600160a01b031615613475578154845180516001600160a01b039092169185908110613410576134106141dd565b60200260200101906001600160a01b031690816001600160a01b0316815250508084602001518481518110613447576134476141dd565b60200260200101818152505080846040018181516134659190614148565b9052506134728187614172565b95505b6134ab565b60405162461bcd60e51b81526020600482015260066024820152655b707235325d60d01b6044820152606401610834565b5050600101613375565b505f848152600a6020526040812061160491613bdc565b5f5b82515181101561128f57825180515f9190839081106134ef576134ef6141dd565b60200260200101516001600160a01b03161461358f5761358f84845f0151838151811061351e5761351e6141dd565b60200260200101518560200151848151811061353c5761353c6141dd565b60200260200101518561356c57604051806040016040528060058152602001645b7035315d60d81b8152506124df565b604051806040016040528060058152602001645b7035305d60d81b8152506124df565b6001016134ce565b5f828152600d60209081526040918290208251808401845281546001600160a01b031680825260019092015481840152835180850190945260048452635b70325d60e01b928401929092529091610c5591859185906124df565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061362f5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061365b576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061367957662386f26fc10000830492506010015b6305f5e1008310613691576305f5e100830492506008015b61271083106136a557612710830492506004015b606483106136b7576064830492506002015b600a831061073e5760010192915050565b6136d28383613aff565b610c55335f858585612b48565b5f6a636f6e736f6c652e6c6f6790505f5f835160208501845afa505050565b6001600160a01b03821661372757604051633250574960e11b81525f6004820152602401610834565b5f61373383835f6126b0565b90506001600160a01b03811661375f57604051637e27328960e01b815260048101839052602401610834565b836001600160a01b0316816001600160a01b03161461128f576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610834565b6137b6838383613b60565b610c55576001600160a01b0383166137e457604051637e27328960e01b815260048101829052602401610834565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610834565b613832604051806060016040528060608152602001606081526020015f81525090565b5f838152600c602052604080822081516060810190925260028101549092919081906001600160401b0381111561386b5761386b613e05565b604051908082528060200260200182016040528015613894578160200160208202803683370190505b50815260200183600201805490506001600160401b038111156138b9576138b9613e05565b6040519080825280602002602001820160405280156138e2578160200160208202803683370190505b5081526020015f81525090505f63ffffffff604080600260146139059190614148565b61390f9190614148565b6139199190614148565b613924906014614148565b6001850154901c1690505f613939868361415b565b5f600186018190559091505b6002850154811015613ae6575f856002018281548110613967576139676141dd565b5f9182526020808320909101546001600160a01b031680835260038901909152604090912054909150620fffff168015613aa5575f6139aa62989680606461415b565b6139b4868461415b565b6139be91906141be565b9050808a10613a6e5782875f015185815181106139dd576139dd6141dd565b60200260200101906001600160a01b031690816001600160a01b0316815250508087602001518581518110613a1457613a146141dd565b602002602001018181525050876003015f846001600160a01b03166001600160a01b031681526020019081526020015f205f90558087604001818151613a5a9190614148565b905250613a67818b614172565b9950613a9f565b60405162461bcd60e51b81526020600482015260066024820152655b707235315d60d01b6044820152606401610834565b50613adc565b5f865f01518481518110613abb57613abb6141dd565b60200260200101906001600160a01b031690816001600160a01b0316815250505b5050600101613945565b50613af4600285015f613bc1565b509095945050505050565b6001600160a01b038216613b2857604051633250574960e11b81525f6004820152602401610834565b5f613b3483835f6126b0565b90506001600160a01b03811615610c55576040516339e3563760e11b81525f6004820152602401610834565b5f6001600160a01b038316158015906131825750826001600160a01b0316846001600160a01b03161480613b995750613b998484611b47565b806131825750505f908152600460205260409020546001600160a01b03908116911614919050565b5080545f8255905f5260205f2090810190612f9b9190613bfa565b5080545f8255600202905f5260205f2090810190612f9b9190613c12565b5b80821115613c0e575f8155600101613bfb565b5090565b5b80821115613c0e5780546001600160a01b03191681555f6001820155600201613c13565b6001600160e01b031981168114612f9b575f5ffd5b5f60208284031215613c5c575f5ffd5b813561160481613c37565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6116046020830184613c67565b5f60208284031215613cb7575f5ffd5b5035919050565b6001600160a01b0381168114612f9b575f5ffd5b5f5f60408385031215613ce3575f5ffd5b8235613cee81613cbe565b946020939093013593505050565b5f5f5f60608486031215613d0e575f5ffd5b8335613d1981613cbe565b95602085013595506040909401359392505050565b5f5f60408385031215613d3f575f5ffd5b50508035926020909101359150565b5f5f60408385031215613d5f575f5ffd5b823591506020830135613d7181613cbe565b809150509250929050565b5f5f5f60608486031215613d8e575f5ffd5b8335613d9981613cbe565b92506020840135613da981613cbe565b929592945050506040919091013590565b5f60208284031215613dca575f5ffd5b813561160481613cbe565b5f5f60408385031215613de6575f5ffd5b8235613df181613cbe565b915060208301358015158114613d71575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215613e2c575f5ffd5b8435613e3781613cbe565b93506020850135613e4781613cbe565b92506040850135915060608501356001600160401b03811115613e68575f5ffd5b8501601f81018713613e78575f5ffd5b80356001600160401b03811115613e9157613e91613e05565b604051601f8201601f19908116603f011681016001600160401b0381118282101715613ebf57613ebf613e05565b604052818152828201602001891015613ed6575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b602080825282518282018190525f918401906040840190835b81811015613af45783516001600160a01b0316835260209384019390920191600101613f10565b5f5f5f5f60808587031215613f4a575f5ffd5b8435613f5581613cbe565b966020860135965060408601359560600135945092505050565b602080825282518282018190525f918401906040840190835b81811015613af4578351835260209384019390920191600101613f88565b5f5f5f5f5f5f5f5f60e0898b031215613fbd575f5ffd5b883597506020890135965060408901359550606089013594506080890135935060a0890135925060c08901356001600160401b03811115613ffc575f5ffd5b8901601f81018b1361400c575f5ffd5b80356001600160401b03811115614021575f5ffd5b8b60208260061b8401011115614035575f5ffd5b989b979a50959850939692959194602001935050565b5f5f6040838503121561405c575f5ffd5b823561406781613cbe565b91506020830135613d7181613cbe565b5f5f5f5f6080858703121561408a575f5ffd5b843561409581613cbe565b93506020850135925060408501356140ac81613cbe565b9396929550929360600135925050565b600181811c908216806140d057607f821691505b6020821081036140ee57634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600690820152655b737431355d60d01b604082015260600190565b6020808252600690820152655b737431305d60d01b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561073e5761073e614134565b808202811582820484141761073e5761073e614134565b8181038181111561073e5761073e614134565b6001600160a01b03968716815260208101959095529290941660408401526060830152608082019290925260a081019190915260c00190565b5f826141d857634e487b7160e01b5f52601260045260245ffd5b500490565b634e487b7160e01b5f52603260045260245ffd5b5f81518060208401855e5f93019283525090919050565b5f61318261421683866141f1565b846141f1565b813561422781613cbe565b81546001600160a01b0319166001600160a01b03919091161781556020919091013560019190910155565b5f8161426057614260614134565b505f190190565b5f61160482846141f1565b84815260018060a01b0384166020820152826040820152608060608201525f61429e6080830184613c67565b9695505050505050565b604081525f6142ba6040830185613c67565b90508260208301529392505050565b608081525f6142db6080830187613c67565b6020830195909552506040810192909252606090910152919050565b606081525f6143096060830186613c67565b6001600160a01b039490941660208301525060400152919050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061429e90830184613c67565b5f60208284031215614366575f5ffd5b815161160481613c37565b606081525f6143836060830186613c67565b60208301949094525060400152919050565b606081525f6143a76060830186613c67565b6020830194909452506001600160a01b0391909116604090910152919050565b608081525f6143d96080830187613c67565b6001600160a01b039586166020840152604083019490945250921660609092019190915291905056fe6d696e74207072696365202573207072696365416e644973737565732061667465722075706461746520257364656c65746520746f6b656e20257320666f7220746f6b656e4f776e65722025732d2d2d2d2d2d2d3e50555243484153452c206d73672e76616c75652025732070726963652025734f66666572696e6720746f74616c536861726550657263656e74202573207368617265734f666665726564202573206d696e546f6b656e53616c65507269636520257368747470733a2f2f6e66742e6861726d6f6e697a652e736f6369616c2f6e66742f7075726368617365546f6b656e20746f6b656e4f776e657220257320746f6b656e4964202573a26469706673582212200f29552223d92d16a110e29b0b4466943fe403231edbbb229c7a8dca1296e11864736f6c634300081c0033"
}
