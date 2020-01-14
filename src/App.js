import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ERC20 from './pages/ERC20';
import Notfound from './pages/NotFound';

import './css/App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ERC20} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
