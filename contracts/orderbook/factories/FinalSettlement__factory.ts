/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { FinalSettlement } from "../FinalSettlement";

export class FinalSettlement__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FinalSettlement> {
    return super.deploy(overrides || {}) as Promise<FinalSettlement>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FinalSettlement {
    return super.attach(address) as FinalSettlement;
  }
  connect(signer: Signer): FinalSettlement__factory {
    return super.connect(signer) as FinalSettlement__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FinalSettlement {
    return new Contract(address, _abi, signerOrProvider) as FinalSettlement;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPositive",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFundingRatePositive",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundingRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "LogAccountSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "index",
        type: "bytes32",
      },
    ],
    name: "LogIndex",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
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
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
    ],
    name: "LogWithdrawFinalSettlement",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountBalanceAfterSettlement",
    outputs: [
      {
        components: [
          {
            internalType: "uint120",
            name: "debt",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "debtIsPositive",
            type: "bool",
          },
          {
            internalType: "uint120",
            name: "size",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "sizeIsPositive",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
        ],
        internalType: "struct Types.PositionBalance",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maintenanceMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialMargin",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "timestamp",
                type: "uint32",
              },
              {
                internalType: "bool",
                name: "isPositive",
                type: "bool",
              },
              {
                internalType: "uint128",
                name: "value",
                type: "uint128",
              },
            ],
            internalType: "struct Types.Index",
            name: "index",
            type: "tuple",
          },
        ],
        internalType: "struct Types.Context",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmin",
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
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFinalSettlement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100467fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610333610050602090811b6104c517901c565b6001600055610054565b9055565b611904806100636000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063142c69b3146100515780635e17fec31461005b5780636e9960c314610085578063704b6c021461009a575b600080fd5b6100596100ba565b005b61006e610069366004611487565b6103a6565b60405161007c9291906117a8565b60405180910390f35b61008d610420565b60405161007c919061159d565b6100ad6100a8366004611487565b610450565b60405161007c91906115b1565b600f5460ff166100e55760405162461bcd60e51b81526004016100dc90611620565b60405180910390fd5b60001960005414156101095760405162461bcd60e51b81526004016100dc90611771565b6000196000556101176113f5565b50604080516080810182526010548152600c54602080830191909152600d548284015282516060808201855260085463ffffffff81168352640100000000810460ff16151593830193909352600160281b9092046001600160801b031693810193909352810191909152610189611422565b61019382336104c9565b90506000806101a6838560000151610699565b91509150808210156101bb575050505061039f565b60006101d86101c861072b565b6101d28585610737565b90610794565b6001546040516370a0823160e01b81529192506000916001600160a01b03909116906370a082319061020e90309060040161159d565b60206040518083038186803b15801561022657600080fd5b505afa15801561023a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025e91906114df565b9050600061026c82846107fb565b9050600061028261027d8584610737565b610813565b6040805160a0810182526001600160781b03808416808352151560208084019182526000848601818152606086018281526080870183815233808552600790955297909220865181549551925193511515600160f81b026001600160f81b03948816600160801b02600160801b600160f81b0319941515600160781b0260ff60781b19939099166001600160781b031990981697909717919091169690961791909116939093171692909217815592516001938401559154909950919250610354916001600160a01b0316908461083c565b337fc3b34c584e097adcd5d59ecaf4107928698a4f075c7753b5dbe28cd20d7ac1fd836103808a610893565b60405161038e929190611843565b60405180910390a250505050505050505b6001600055565b6103ae611422565b6103b66113f5565b6103be611450565b60006103c86108fa565b915091506103d46113f5565b6040518060800160405280838152602001600c548152602001600d548152602001848152509050610403611422565b61040d8288610b2f565b5093995094975050505050505050915091565b600061044b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103610e0e565b905090565b600061045a610420565b6001600160a01b0316336001600160a01b03161461048a5760405162461bcd60e51b81526004016100dc906116f4565b6104bd7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036001600160a01b0384166104c5565b506001919050565b9055565b6104d1611422565b6104d9611422565b60008060006104e6611450565b6104ee611470565b6104f88989610b2f565b6001600160a01b038e1660009081526009602090815260409182902084518154928601519386015163ffffffff1990931663ffffffff9091161764ff000000001916640100000000931515939093029290921774ffffffffffffffffffffffffffffffff00000000001916600160281b6001600160801b0390921691909102179055949a50929850909650945092509050821561068a576001600160a01b03881660008181526007602090815260409182902089518154838c0151948c015160608d01511515600160f81b026001600160f81b036001600160781b03928316600160801b02600160801b600160f81b0319981515600160781b0260ff60781b19949096166001600160781b0319909516949094179290921693909317959095161793909316929092178255608089015160019092019190915582015182518b517f1c719d763b0c66fc06b842e1f0bafc88b78f8a03df2f31f9da94810b2aba898c92899290918991904261066b8e610893565b60116040516106819897969594939291906115bc565b60405180910390a25b50939450505050505b92915050565b6000806000808560200151156106cc576106c56106b461072b565b87516001600160781b031690610e12565b91506106da565b6106d76106b461072b565b90505b60408601516000906106f5906001600160781b031687610e12565b90508660600151156107125761070b8382610e6b565b925061071f565b61071c8282610e6b565b91505b50909590945092505050565b670de0b6b3a764000090565b60008282111561078e576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008082116107ea576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816107f357fe5b049392505050565b600081831061080a578161080c565b825b9392505050565b6000600160781b82106108385760405162461bcd60e51b81526004016100dc90611666565b5090565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261088e908490610ec5565b505050565b60008082606001516108a65760006108ac565b600160781b5b83602001516108bc5760006108c2565b600160f81b5b845160408601516001600160781b03166effffffffffffffffffffffffffffff60801b60809290921b91909116171717915050919050565b610902611450565b600061090c611450565b506040805160608101825260085463ffffffff81168252640100000000810460ff1615156020830152600160281b90046001600160801b031681830152600254915163524f388960e01b815290916000916001600160a01b039091169063524f38899061097e9060119060040161160d565b604080518083038186803b15801561099557600080fd5b505afa1580156109a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cd91906114f7565b50905060006109ef836000015163ffffffff164261073790919063ffffffff16565b90508015610b25576109ff611470565b50604080518082018252848201516001600160801b031681526020808601511515908201526003549151633afb52f560e21b8152909160009182916001600160a01b03169063ebed4bd490610a5890879060040161183a565b604080518083038186803b158015610a6f57600080fd5b505afa158015610a83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa791906114ae565b9092509050610ab68186610f76565b90508115610acf57610ac88382610f8e565b9250610adc565b610ad98382611027565b92505b6040518060600160405280610af0426110ae565b63ffffffff168152602001846020015115158152602001610b1485600001516110d4565b6001600160801b0316905295505050505b5090925090509091565b610b37611422565b6000806000610b44611450565b610b4c611470565b610b54611450565b506060880151610b62611450565b506001600160a01b0388166000908152600960209081526040918290208251606081018452905463ffffffff81168252640100000000810460ff16151592820192909252600160281b9091046001600160801b031691810191909152610bc6611422565b506001600160a01b038916600090815260076020908152604091829020825160a08101845281546001600160781b03808216835260ff600160781b83048116151595840195909552600160801b82041694820194909452600160f81b90930490911615156060830152600101546080820152610c40611470565b50604080518082018252908401516001600160801b031681526020808501511515908201528351835163ffffffff918216911610610ca55760608201516040830151929a5098506001600160781b03909116965060009550919350909150610e049050565b60408201516001600160781b0316610ce45760608201516040830151929a5098506001600160781b03909116965060009550919350909150610e049050565b826020015115610d0e576040830151610d079082906001600160801b0316611027565b9050610d2a565b6040830151610d279082906001600160801b0316610f8e565b90505b60608201516020820151151590151514801590600090610d935760408401518351610d5d916001600160781b0316610f76565b9050610d6984826110f9565b610d89610d7e610d7761072b565b8390610e12565b608086015190610e6b565b6080850152610df0565b60408401518351610dac916001600160781b0316611122565b90506000610dbb610d7761072b565b9050610dc78583611167565b8085608001511015610dda576000610de9565b6080850151610de99082610737565b6080860152505b929a50985090965060019550919350909150505b9295509295509295565b5490565b600082610e2157506000610693565b82820282848281610e2e57fe5b041461080c5760405162461bcd60e51b81526004018080602001828103825260218152602001806118846021913960400191505060405180910390fd5b60008282018381101561080c576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6060610f1a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111849092919063ffffffff16565b80519091501561088e57808060200190516020811015610f3957600080fd5b505161088e5760405162461bcd60e51b815260040180806020018281038252602a8152602001806118a5602a913960400191505060405180910390fd5b600061080c670de0b6b3a76400006101d28585610e12565b610f96611470565b826020015115610fd3576040518060400160405280610fc2856000015185610e6b90919063ffffffff16565b815260016020909101529050610693565b8251821115610ffe576040518060400160405280610fc285600001518561073790919063ffffffff16565b60408051808201909152835181906110169085610737565b815260006020909101529392505050565b61102f611470565b826020015161106b57604051806040016040528061105a856000015185610e6b90919063ffffffff16565b815260006020909101529050610693565b825182101561108c576040805180820190915283518190610fc29085610737565b604051806040016040528061101685600001518561073790919063ffffffff16565b600064010000000082106108385760405162461bcd60e51b81526004016100dc9061172b565b6000600160801b82106108385760405162461bcd60e51b81526004016100dc906116ad565b611101611470565b61110a8361119b565b90506111168183610f8e565b905061088e83826111cc565b600082158061112f575081155b1561113c57506000610693565b61080c6001611161670de0b6b3a76400006101d28361115b8989610e12565b90610737565b90610e6b565b61116f611470565b6111788361119b565b90506111168183611027565b606061119384846000856111ef565b949350505050565b6111a3611470565b506040805180820190915281516001600160781b03168152602080830151151590820152919050565b80516111d790610813565b6001600160781b031682526020908101511515910152565b6060824710156112305760405162461bcd60e51b815260040180806020018281038252602681526020018061185e6026913960400191505060405180910390fd5b6112398561134b565b61128a576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106112c95780518252601f1990920191602091820191016112aa565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461132b576040519150601f19603f3d011682016040523d82523d6000602084013e611330565b606091505b5091509150611340828286611351565b979650505050505050565b3b151590565b6060831561136057508161080c565b8251156113705782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113ba5781810151838201526020016113a2565b50505050905090810190601f1680156113e75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b604051806080016040528060008152602001600081526020016000815260200161141d611450565b905290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604080516060810182526000808252602082018190529181019190915290565b604080518082019091526000808252602082015290565b600060208284031215611498578081fd5b81356001600160a01b038116811461080c578182fd5b600080604083850312156114c0578081fd5b825180151581146114cf578182fd5b6020939093015192949293505050565b6000602082840312156114f0578081fd5b5051919050565b60008060408385031215611509578182fd5b505080516020909101519092909150565b60008154600180821660008114611538576001811461155657611594565b60028304607f16865260ff1983166020870152604086019350611594565b6002830480875261156686611851565b60005b8281101561158a5781546020828b0101528482019150602081019050611569565b8801602001955050505b50505092915050565b6001600160a01b0391909116815260200190565b901515815260200190565b60006101008a1515835289151560208401528860408401528760608401528660808401528560a08401528460c08401528060e08401526115fe8184018561151a565b9b9a5050505050505050505050565b60006020825261080c602083018461151a565b60208082526026908201527f4f6e6c79207065726d697474656420647572696e672066696e616c20736574746040820152651b195b595b9d60d21b606082015260800190565b60208082526027908201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316040820152663230206269747360c81b606082015260800190565b60208082526027908201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316040820152663238206269747360c81b606082015260800190565b6020808252601e908201527f41646d696e61626c653a2063616c6c6572206973206e6f742061646d696e0000604082015260600190565b60208082526026908201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360408201526532206269747360d01b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b82516001600160781b0390811682526020808501511515818401526040808601519092168284015260608086015115158185015260809586015195840195909552835160a08401528381015160c08401528382015160e08401529290930151805163ffffffff166101008301529182015115156101208201529101516001600160801b03166101408201526101600190565b90815260200190565b918252602082015260400190565b6000908152602090209056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122097ecee2deb2a46466db7debe9e8005e5573ca538c9093923f7c6d479e13b792f64736f6c63430007050033";