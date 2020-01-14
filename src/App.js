import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Metamask from './components/Metamask'
import ERC20 from './pages/ERC20';

import './css/App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Metamask></Metamask>
        <Router>
          <div>
            <Route exact path="/" component={ERC20} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
