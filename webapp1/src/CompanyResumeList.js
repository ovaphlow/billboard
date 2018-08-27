import React from 'react'

import Tabbar from './component/TabbarCompany'
import ResumeItem from './component/ResumeItem'

export default class CompanyResumeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', resumeList: [], auth: {} }
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('authCompany'))
    if (!!!auth) {
      window.location.href = './#/company.login'
      return false
    }
    this.setState({ auth: auth })
    fetch('./api/resume/company/' + auth.uuid)
    .then(res => res.json())
    .then(response => this.setState({ resumeList: response.content }))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            <i className="fa fa-fw fa-list"></i>
            收到的简历
            <hr />
          </h3>
        </div>

        {this.state.message &&
          <div className="col-12">
            <div className="alert alert-danger">
              {this.state.message}
            </div>
          </div>
        }

        <div className="col-12">
          {this.state.resumeList.map(item =>
            <ResumeItem key={item.id} item={item} />
          )}
        </div>

        <Tabbar active={'resume'} />
      </div>
    )
  }
}
