import React, { Component } from 'react';

import getWeb3 from './../utils/getWeb3';


function DisplayAccount(props) {
  const account = props.accounts.length ? props.accounts[0] : null;
  const username = props.username;

  if (username) {
    return (
      <a href="/profile">{username}</a>
    );
  } else if (account) {
    const short_account = account.substr(0, 5) + '...' + account.substr(-5, 5);

    return (
      <a href="/wizard" title={account}>{short_account}</a>
    );
  } else {
    return (
      <a href="/testnet">No Ethereum Account</a>
    );
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      username: null,
      identityFactoryInstance: null,
    };
  }

  componentWillMount() {
    getWeb3.then(this.ready.bind(this));
  }

  ready() {
    /*
    this.setState({
      accounts: window.web3.eth.accounts,
      identityFactoryInstance: new IdentityFactory(window.web3),
    });


    this.state.identityFactoryInstance.getForOwner().then((res, err) => {
      if (err || !res.length) {
        return;
      }

      const username = res[0];

      if (username !== '') {
        this.setState({
          username: username
        });
      }
    })
    */
  }

  render() {
    return (
      <div className="nav-container">
        <div className="bg-dark navbar-dark" data-sticky="top">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img alt="emint" src="assets/img/logo_white_small.png" height="40" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="icon-menu h4" />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <DisplayAccount accounts={this.state.accounts} username={this.state.username} />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
