import ERC20Artifact from '../artifacts/erc20.json';


class ERC20Factory {
  constructor(web3) {
    this.wallet = web3.currentProvider.selectedAddress;
    this.contract = new web3.eth.Contract(ERC20Artifact.abi);
    this.contract.options.from = this.wallet;
    this.contract.options.gas = 1500000;
    this.contract.options.gasPrice = '30000000000000';
  }

  async create(name, symbol, decimals) {
    return this.contract.deploy({
      arguments: [name, symbol, decimals]
    });
  }
}

export default ERC20Factory;
