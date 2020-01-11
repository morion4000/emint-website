import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';

import './css/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
