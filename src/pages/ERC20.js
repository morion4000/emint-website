import React, { Component } from 'react';
import contract from 'truffle-contract';

import getWeb3 from './../utils/getWeb3';
import AnnouncementFragment from '../containers/AnnouncementFragment.js';
import Web3, { getNetworkName, currentNetwork } from '../containers/Web3.js';
import Metamask from '../containers/Metamask.js';


function ProviderWarningMessage(props) {
  const network = getNetworkName(props.network);
  const metamask = props.metamask;

  if (metamask) {
    if (network !== currentNetwork) {
      return (
        <div>
          <AnnouncementFragment icon="icon-warning" text={"Please point Metamask to " + currentNetwork +" testnet."} linkText="Read More ›" linkAddress="/testnet" />
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  } else {
    return (
      <AnnouncementFragment icon="icon-warning" text="Please install Metamask." linkText="Read More ›" linkAddress="/" />
    );
  }
}


class ERC20 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      public: false,
      identityFactoryInstance: null,
      documentFactoryInstance: null,
      accounts: [],
      metamask: false,
      network: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    getWeb3.then(this.ready.bind(this));
  }

  ready() {
    /*
    this.setState({
      metamask: window.web3.currentProvider.isMetaMask,
      network: window.web3.version.network,
      accounts: window.web3.eth.accounts,
      identityFactoryInstance: new IdentityFactory(window.web3),
      documentFactoryInstance: new DocumentFactory(window.web3)
    });
    */
  }

  handleSubmit(event) {
    event.preventDefault();

    var batch = window.web3.createBatch();

    batch.add(this.state.identityFactoryInstance.create(this.state.username));
    batch.add(this.state.documentFactoryInstance.create('public', this.state.public));

    batch.execute();
  }

  render() {
    return (
      <div>
        <ProviderWarningMessage network={this.state.network} metamask={this.state.metamask} />

        <div className="main-container">
            <section class="space-sm">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col text-center">
                            <a href="/">
                                <img alt="Image" src="assets/img/logo_black_square.png" height="50" />
                            </a>
                        </div>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">Emint.io</a>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">Create ERC20 Token</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div class="row flex-md-row card card-lg">
                        <div class="col-12 col-md-7 card-body bg-secondary">
                            <div class="text-center mb-5">
                                <h1 class="h2 mb-2">Start creating immediately</h1>
                                <span>Deploy ERC20 tokens</span>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-lg-9">
                                    <form>
                                        <div class="form-row form-group">
                                            <div class="col">
                                                <input class="form-control form-control-lg" type="text" id="company" placeholder="Name" />
                                                <small>Token name. i.e. Ethereum</small>
                                            </div>
                                        </div>
                                        <div class="form-row form-group">
                                            <div class="col">
                                                <input class="form-control form-control-lg" type="text" id="firstname" placeholder="Symbol" />
                                                <small>Token symbol. i.e. ETH</small>
                                            </div>
                                            <div class="col">
                                                <input class="form-control form-control-lg" type="text" id="lastname" placeholder="Decimals" />
                                                <small>Token decimals. Most common is 18.</small>
                                            </div>
                                        </div>
                                        <div class="form-row form-group">
                                            <div class="col">
                                                <button class="btn btn-block btn-success btn-lg" type="submit" disabled>Create Token</button>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <span class="text-small text-muted">By clicking 'Create Token' you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 card-body">
                            <div>
                                <div class="mb-5 text-center">
                                    <h3 class="h2 mb-2">Deploy &amp; Manage</h3>
                                    <span>Safely manage your smart contract life-cycles</span>
                                </div>
                                <ul class="list-unstyled list-spacing-sm mb-5 ">
                                    <li class="row">
                                        <div class="col-2 col-md-1"><i class="icon-check h5 text-muted"></i>
                                        </div>
                                        <div class="col-10"><strong>Deploy</strong> - Emint lets you safely deploy your smart contracts to private, testnet or mainnet using browser compatible wallets</div>
                                    </li>
                                    <li class="row align-items-center">
                                        <div class="col-2 col-md-1"><i class="icon-check h5 text-muted"></i>
                                        </div>
                                        <div class="col-10"><strong>Monitor</strong> - View analytics, graphs, set up alerts, and log events to track the health your smart contracts in one place post-deployment</div>
                                    </li>
                                </ul>

                                {/*
                                <div class="card card-sm box-shadow text-left">
                                    <div class="card-body p-4">
                                        <div class="media">
                                            <img alt="Image" src="assets/img/avatar-male-1.jpg" class="avatar avatar-xs" />
                                            <div class="media-body">
                                                <p class="mb-1 text-small">
                                                    “Let’s get one thing straight, this theme’s a straight-up winner. No posers here, just beautiful design and code.”
                                                </p>
                                                <small>Daniel Cameron</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                */}

                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <span class="text-small">created by <a href="https://www.morion4000.com" target="_blank">morion4000</a>
                        </span>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
}

export default ERC20;
