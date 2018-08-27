import React from 'react'

import Tabbar from './component/TabbarCompany'
import JobItem from './component/JobItem'

export default class CompanyJobList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', jobList: [], auth: {} }
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('authCompany'))
    if (!!!auth) {
      window.location.href = './#/company.login'
      return false
    }
    this.setState({ auth: auth })

    fetch('./api/company/' + auth.uuid + '/job/')
    .then(res => res.json())
    .then(response => this.setState({ jobList: response.content }))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            <i className="fa fa-fw fa-list"></i>
            发布的职位
            <hr />
          </h3>
        </div>

        <div className="col-12">
          <div className="btn-group pull-right">
            <a href="./#/company.job-save" className="btn btn-outline-info btn-sm">
              <i className="fa fa-fw fa-plus"></i>
              添加新职位
            </a>
          </div>
        </div>

        <div className="clearfix"></div>

        {this.state.message &&
          <div className="col-12">
            <div className="alert alert-danger">
              {this.state.message}
            </div>
          </div>
        }

        <div className="col-12">
          <div className="list-group">
            {this.state.jobList.map(item =>
              <JobItem item={item} key={item.id} company={true} />
            )}
          </div>
        </div>

        <Tabbar active="job" />
      </div>
    )
  }
}
