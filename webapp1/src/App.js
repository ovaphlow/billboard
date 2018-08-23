import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
      </HashRouter>
    );
  }
}

export default App;
