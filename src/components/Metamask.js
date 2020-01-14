import React, { Component } from 'react';

import Announcement from './Announcement';
import getWeb3, {getNetworkName} from '../utils/web3';


function MetamaskMessage(props) {
  const installed = props.installed;
  const network = getNetworkName(props.network);
  const account = props.account;

  if (installed) {
    return (
      <Announcement icon="icon-done" text={`Metamask is using ${account} on ${network}`}></Announcement>
    );
  } else {
    return (  
      <Announcement text="Metamask is not installed." linkAddress="https://metamask.io" linkText="Install Metamask"></Announcement>
    );
  }
}

class Metamask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      installed: false,
      network: null,
      accounts: []
    };
  }

  componentWillMount() {
    getWeb3.then(this.ready.bind(this));
  }

  ready(web3) {
    if (web3) {
      this.setState({
        installed: web3.currentProvider.isMetaMask,
        network: web3.currentProvider.networkVersion,
        account: web3.currentProvider.selectedAddress
      });
    }
  }

  render() {
    return (
      <div className="Metamask">
        <MetamaskMessage installed={this.state.installed} network={this.state.network} account={this.state.account} />
      </div>
    );
  }
}

export default Metamask;
