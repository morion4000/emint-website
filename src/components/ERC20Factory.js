import ERC20Artifact from '../artifacts/erc20.json';


class ERC20Factory {
  constructor(web3) {
    this.wallet = web3.currentProvider.selectedAddress;
    this.contract = new web3.eth.Contract(ERC20Artifact.abi);
    this.contract.options.from = web3.currentProvider.selectedAddress;
    this.contract.options.gas = 3000000;
    this.contract.options.gasPrice = '3000000000'; // 3 Gwei
    this.contract.options.data = ERC20Artifact.bytecode;
  }

  async create(name, symbol, decimals) {
    return this.contract.deploy({
      arguments: [name, symbol, decimals]
    })
    .send()
    .on('error', (error) => {
      console.log(error);
    })
    .on('transactionHash', (transactionHash) => {
      console.log(transactionHash);
    })
    .on('receipt', (receipt) => {
      console.log(receipt);
    })
    .on('confirmation', (confirmationNumber, receipt) => {
      console.log(receipt);
    })
    .then(function(newContractInstance){
      console.log(newContractInstance);
    });
  }
}

export default ERC20Factory;
