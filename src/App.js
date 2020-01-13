import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import ERC20 from './pages/ERC20.js';

import './css/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ERC20} />
        </div>
      </Router>
    );
  }
}

export default App;
