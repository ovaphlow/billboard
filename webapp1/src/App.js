import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import User from './User'
import UserResume from './UserResume'
import UserResumeUpdate from './UserResumeUpdate'
import UserResumeEducation from './UserResumeEducation'
import UserResumeCareer from './UserResumeCareer'
import UserResumePost from './UserResumePost'
import UserMessageList from './UserMessageList'
import UserMessage from './UserMessage'
import Job from './Job'

class App extends Component {
  render() {
    return (
      <HashRouter>

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={User} />
          <Route path="/user.resume" component={UserResume} />
          <Route path="/user.resume-update" component={UserResumeUpdate} />
          <Route path="/user.resume-post" component={UserResumePost} />
          <Route path="/user.message-list" component={UserMessageList} />
          <Route path="/user.message" component={UserMessage} />
          <Route path="/resume.exp-education" component={UserResumeEducation} />
          <Route path="/resume.exp-career" component={UserResumeCareer} />
          <Route path="/job" component={Job} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
