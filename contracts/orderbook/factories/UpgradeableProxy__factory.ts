/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { UpgradeableProxy } from "../UpgradeableProxy";

export class UpgradeableProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<UpgradeableProxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<UpgradeableProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  attach(address: string): UpgradeableProxy {
    return super.attach(address) as UpgradeableProxy;
  }
  connect(signer: Signer): UpgradeableProxy__factory {
    return super.connect(signer) as UpgradeableProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeableProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeableProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516106c43803806106c48339818101604052604081101561002657600080fd5b81516020830180516040519294929383019291908464010000000082111561004d57600080fd5b90830190602082018581111561006257600080fd5b825164010000000081118282018810171561007c57600080fd5b82525081516020918201929091019080838360005b838110156100a9578181015183820152602001610091565b50505050905090810190601f1680156100d65780820380516001836020036101000a031916815260200191505b50604052506100e3915050565b6100ec82610110565b80511561010957610107828261018260201b6100311760201c565b505b505061035c565b610123816101ae60201b61005d1760201c565b61015e5760405162461bcd60e51b81526004018080602001828103825260368152602001806106686036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60606101a78383604051806060016040528060278152602001610641602791396101b4565b9392505050565b3b151590565b60606101bf846101ae565b6101fa5760405162461bcd60e51b815260040180806020018281038252602681526020018061069e6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106102385780518252601f199092019160209182019101610219565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610298576040519150601f19603f3d011682016040523d82523d6000602084013e61029d565b606091505b5090925090506102ae8282866102b8565b9695505050505050565b606083156102c75750816101a7565b8251156102d75782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610321578181015183820152602001610309565b50505050905090810190601f16801561034e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6102d68061036b6000396000f3fe60806040523661001357610011610017565b005b6100115b61001f61002f565b61002f61002a610063565b610088565b565b60606100568383604051806060016040528060278152602001610254602791396100ac565b9392505050565b3b151590565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156100a7573d6000f35b3d6000fd5b60606100b78461005d565b6100f25760405162461bcd60e51b815260040180806020018281038252602681526020018061027b6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106101305780518252601f199092019160209182019101610111565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610190576040519150601f19603f3d011682016040523d82523d6000602084013e610195565b606091505b50915091506101a58282866101af565b9695505050505050565b606083156101be575081610056565b8251156101ce5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610218578181015183820152602001610200565b50505050905090810190601f1680156102455780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a26469706673582212202787e953bb498e29fc416f7e68c40c3bd29e39f7999d7bfcad814a6da449449d64736f6c63430007050033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374";