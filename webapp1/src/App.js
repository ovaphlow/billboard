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
import CompanyRegister from './CompanyRegister'
import CompanyLogin from './CompanyLogin'
import Company from './Company'
import CompanyUpdate from './CompanyUpdate'
import CompanyJobList from './CompanyJobList'
import CompanyJobSave from './CompanyJobSave'
import CompanyJob from './CompanyJob'
import CompanyResumeList from './CompanyResumeList'
import CompanyResumeFilter from './CompanyResumeFilter'
import Resume from './Resume'

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
          <Route path="/company.register" component={CompanyRegister} />
          <Route path="/company.login" component={CompanyLogin} />
          <Route path="/company" component={Company} />
          <Route path="/company.update" component={CompanyUpdate} />
          <Route path="/company.job-list" component={CompanyJobList} />
          <Route path="/company.job-save" component={CompanyJobSave} />
          <Route path="/company.job" component={CompanyJob} />
          <Route path="/company.resume-list" component={CompanyResumeList} />
          <Route path="/company.resume-filter" component={CompanyResumeFilter} />
          <Route path="/resume" component={Resume} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
