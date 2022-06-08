/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Liquidation } from "../Liquidation";

export class Liquidation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    perpetualV1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Liquidation> {
    return super.deploy(perpetualV1, overrides || {}) as Promise<Liquidation>;
  }
  getDeployTransaction(
    perpetualV1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(perpetualV1, overrides || {});
  }
  attach(address: string): Liquidation {
    return super.attach(address) as Liquidation;
  }
  connect(signer: Signer): Liquidation__factory {
    return super.connect(signer) as Liquidation__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Liquidation {
    return new Contract(address, _abi, signerOrProvider) as Liquidation;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "perpetualV1",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oraclePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LogLiquidated",
    type: "event",
  },
  {
    inputs: [],
    name: "_PERPETUAL_V1_",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "trade",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "debtAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sizeAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isBuy",
            type: "bool",
          },
          {
            internalType: "bytes32",
            name: "traderFlags",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "flags",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateral",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "pnl",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterest",
                type: "uint256",
              },
            ],
            internalType: "struct Types.FreedCollateral",
            name: "makerCollat",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "flags",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateral",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "pnl",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterest",
                type: "uint256",
              },
            ],
            internalType: "struct Types.FreedCollateral",
            name: "takerCollat",
            type: "tuple",
          },
        ],
        internalType: "struct Types.TradeResult",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161148338038061148383398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b6113f2806100916000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063970c2ba11461006f578063d4bec8eb1461008f575b600080fd5b610059610054366004610fca565b6100a4565b6040516100669190611142565b60405180910390f35b61008261007d366004610efb565b6100be565b6040516100669190611315565b6100976103b2565b604051610066919061112e565b6001600160e01b0319811663970c2ba160e01b145b919050565b6100c6610de7565b6000546001600160a01b031633146100f95760405162461bcd60e51b81526004016100f0906112de565b60405180910390fd5b60005460405163052f72d760e01b81526001600160a01b039091169063052f72d790610129908b9060040161112e565b60206040518083038186803b15801561014157600080fd5b505afa158015610155573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101799190610fae565b6101955760405162461bcd60e51b81526004016100f0906112a7565b61019d610e2d565b6101a984860186611078565b90506101b3610e59565b600080546101ca906001600160a01b03168b6103c1565b5060005491935091506101ea90849084906001600160a01b03168b6104d3565b6000610207846000015184604001516001600160781b03166105bc565b9050600084604001511561023b5760408401518451610234916001600160781b03918216918591166105d6565b905061025d565b6040840151845161025a916001600160781b0391821691859116610627565b90505b610265610e87565b6102c08361029c87604001516001600160781b0316610296610285610637565b8a516001600160781b031690610643565b9061069c565b60008054906101000a90046001600160a01b03168f8a602001518b60400151610703565b90508b6001600160a01b03168d6001600160a01b03167f038f8673ce89474cd3d91d0eef31a88a39654153874c7fadd5f74b0c817dc0388589604001518f4260405161030f949392919061136f565b60405180910390a36040518060c00160405280838152602001848152602001876040015115158152602001600260001b81526020016040518060a00160405280600081526020016000815260200161038589604001516001600160781b0316610296898c6080015161064390919063ffffffff16565b8152602001600081526020018781525081526020018281525096505050505050505b979650505050505050565b6000546001600160a01b031681565b6103c9610e59565b60008080856103d6610e59565b604051632915140960e11b81526001600160a01b0383169063522a281290610402908a9060040161112e565b60a06040518083038186803b15801561041a57600080fd5b505afa15801561042e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104529190610ff2565b60808101516040820151919250906001600160781b0316156104c45761048a610479610637565b83516001600160781b031690610643565b935081606001516104a45761049f84826107cf565b6104c1565b81602001516104b75761049f848261082c565b6104c181856107cf565b93505b90989297509550909350505050565b6104de838383610886565b6104fa5760405162461bcd60e51b81526004016100f090611197565b836060015115806105195750835160408401516001600160781b031610155b6105355760405162461bcd60e51b81526004016100f0906111f4565b8260600151151584604001511515146105605760405162461bcd60e51b81526004016100f09061114d565b826020015180610578575082516001600160781b0316155b80610584575082606001515b8061059a575060408301516001600160781b0316155b6105b65760405162461bcd60e51b81526004016100f09061124a565b50505050565b60008183106105cb57816105cd565b825b90505b92915050565b60008315806105e3575082155b156105fa576105f360008361069c565b9050610620565b61061d600161061784610296836106118a8a610643565b906107cf565b9061082c565b90505b9392505050565b600061061d826102968686610643565b670de0b6b3a764000090565b600082610652575060006105d0565b8282028284828161065f57fe5b04146105cd5760405162461bcd60e51b815260040180806020018281038252602181526020018061139c6021913960400191505060405180910390fd5b60008082116106f2576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816106fb57fe5b049392505050565b61070b610e87565b610713610e59565b60008061072088886103c1565b92509250925082604001516001600160781b031660001480610749575084151583606001511515145b6107725761076d8383838d61076661075f610637565b8f90610643565b8b8b610936565b6107c1565b6040805160a081019091526001815260208101610799886107938d8f610643565b90610c1d565b815260200160008152602001600081526020016107be6107b7610637565b859061069c565b90525b9a9950505050505050505050565b600082821115610826576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000828201838110156105cd576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600080836001600160a01b031663a19543d06040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c257600080fd5b505afa1580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa91906110e6565b90506000806109098786610c35565b90925090506109188184610643565b61092a610923610637565b8490610643565b10979650505050505050565b61093e610e87565b604088015184906001600160781b0316156109795761097689604001516001600160781b031661029661096f610637565b8b90610643565b90505b836109a5576109a287610296838c604001516001600160781b031661064390919063ffffffff16565b93505b6109b76109b0610637565b899061069c565b975088604001516001600160781b03166000141580156109df57508215158960600151151514155b15610bd2576109ec610eb6565b50604080518082019091526000815260016020820152610a0a610eb6565b5060408051808201825283815260016020820152908b01516001600160781b03168811610a71576040518060400160405280610a608d604001516001600160781b03166102968c8e61064390919063ffffffff16565b815260006020909101529150610ae8565b6000610a9d88610a978e604001516001600160781b03168c6107cf90919063ffffffff16565b90610643565b9050610aa9818861069c565b90506040518060400160405280828c1015610acd57610ac8838d6107cf565b610ad7565b610ad78c846107cf565b8152602001828c1015158152509250505b610af0610eb6565b610afa8289610cc7565b90506000610b3e610b09610637565b6102968f604001516001600160781b03168d1115610b34578f604001516001600160781b0316610b36565b8c5b855190610643565b905060008d606001511515836020015115151415905080610b6657610b638583610d70565b94505b84600001519b5060008560200151610b7f576000610b82565b60015b60ff161781610b92576000610b95565b60025b60ff16811790506040518060a001604052808281526020018e8152602001848152602001600081526020018f8152509750505050505050506103a7565b6040518060a001604052806000815260200160006001600160781b0316815260200160006001600160781b031681526020016000815260200189815250915050979650505050505050565b60006105cd8261029685670de0b6b3a7640000610643565b600080600080856020015115610c6857610c61610c50610637565b87516001600160781b031690610643565b9150610c76565b610c73610c50610637565b90505b6040860151600090610c91906001600160781b031687610643565b9050866060015115610cae57610ca7838261082c565b9250610cbb565b610cb8828261082c565b91505b50909590945092505050565b610ccf610eb6565b8260200151610d0b576040518060400160405280610cfa85600001518561082c90919063ffffffff16565b8152600060209091015290506105d0565b8251821015610d3d576040805180820190915283518190610d2c90856107cf565b8152600160209091015290506105d0565b6040518060400160405280610d5f8560000151856107cf90919063ffffffff16565b815260006020909101529392505050565b610d78610eb6565b826020015115610da4576040518060400160405280610d2c85600001518561082c90919063ffffffff16565b8251821115610dcf576040518060400160405280610d2c8560000151856107cf90919063ffffffff16565b6040805180820190915283518190610d5f90856107cf565b6040518060c00160405280600081526020016000815260200160001515815260200160008019168152602001610e1b610e87565b8152602001610e28610e87565b905290565b604051806080016040528060008152602001600081526020016000151581526020016000151581525090565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604080518082019091526000808252602082015290565b80356001600160a01b03811681146100b957600080fd5b80516001600160781b03811681146100b957600080fd5b600080600080600080600060c0888a031215610f15578283fd5b610f1e88610ecd565b9650610f2c60208901610ecd565b9550610f3a60408901610ecd565b945060608801359350608088013567ffffffffffffffff80821115610f5d578485fd5b818a0191508a601f830112610f70578485fd5b813581811115610f7e578586fd5b8b6020828501011115610f8f578586fd5b60208301955080945050505060a0880135905092959891949750929550565b600060208284031215610fbf578081fd5b81516105cd8161138a565b600060208284031215610fdb578081fd5b81356001600160e01b0319811681146105cd578182fd5b600060a08284031215611003578081fd5b60405160a0810181811067ffffffffffffffff8211171561102057fe5b60405261102c83610ee4565b8152602083015161103c8161138a565b602082015261104d60408401610ee4565b604082015260608301516110608161138a565b60608201526080928301519281019290925250919050565b600060808284031215611089578081fd5b6040516080810181811067ffffffffffffffff821117156110a657fe5b8060405250823581526020830135602082015260408301356110c78161138a565b604082015260608301356110da8161138a565b60608201529392505050565b6000602082840312156110f7578081fd5b5051919050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301525050565b6001600160a01b0391909116815260200190565b901515815260200190565b6020808252602a908201527f6c69717569646174696f6e206d757374206e6f7420696e637265617365206d616040820152696b657227732073697a6560b01b606082015260800190565b60208082526037908201527f43616e6e6f74206c69717569646174652073696e6365206d616b65722069732060408201527f6e6f7420756e646572636f6c6c61746572616c697a6564000000000000000000606082015260800190565b60208082526036908201527f616c6c4f724e6f7468696e672069732073657420616e64206d616b65722073696040820152751e99481a5cc81b195cdcc81d1a185b88185b5bdd5b9d60521b606082015260800190565b6020808252603b908201527f43616e6e6f74206c6971756964617465207768656e206d616b65722073697a6560408201527f20616e6420646562742061726520626f7468206e656761746976650000000000606082015260800190565b6020808252601f908201527f53656e646572206973206e6f74206120676c6f62616c206f70657261746f7200604082015260600190565b6020808252601e908201527f6d73672e73656e646572206d7573742062652050657270657475616c56310000604082015260600190565b60006101c082019050825182526020830151602083015260408301511515604083015260608301516060830152608083015161135460808401826110fe565b5060a08301516113686101208401826110fe565b5092915050565b93845291151560208401526040830152606082015260800190565b801515811461139857600080fd5b5056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212208e11cad4857a13d48fc474a1bfa35f3713fd6198e5cd98e1cb670407ba4c17c664736f6c63430007050033";