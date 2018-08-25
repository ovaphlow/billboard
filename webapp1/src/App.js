import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import User from './User'
import UserResume from './UserResume'
import Job from './Job'

class App extends Component {
  render() {
    return (
      <HashRouter>

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/User" component={User} />
          <Route path="/UserResume" component={UserResume} />
          <Route path="/job" component={Job} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
