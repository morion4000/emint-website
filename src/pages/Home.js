import React, { Component } from 'react';

import Menu from '../containers/Menu.js';
import Header from '../containers/Header.js';
import FooterSmall from '../containers/FooterSmall.js';


class Home extends Component {
  render() {
    return (
      <div>
        <Menu/>

        <div className="main-container">
          <Header/>
        </div>

        <FooterSmall/>
      </div>
    );
  }
}

export default Home;
