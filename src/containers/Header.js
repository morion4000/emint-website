import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <section className="bg-dark space-lg">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5 section-intro">
              <h1 className="display-3">Electronic Mint</h1>
              <span className="lead">
                Create &amp; deploy ERC-20 tokens on Ethereum.
              </span>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
