import React from 'react'

import Tabbar from './component/TabbarCompany'
import ResumeItem from './component/ResumeItem'

export default class CompanyJob extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', job: {}, listResume: [], auth: {} }
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('authCompany'))
    if (!!!auth) {
      window.location.href = './#/company.login'
      return false
    }
    this.setState({ auth: auth })
    fetch('./api/company/' + auth.uuid + '/job/' + sessionStorage.getItem('job'))
    .then(res => res.json())
    .then(response => this.setState({ job: response.content }))

    fetch('./api/resume/job/' + sessionStorage.getItem('job'))
    .then(res => res.json())
    .then(response => this.setState({ listResume: response.content }))
  }

  remove(event) {
    fetch('./api/job/' + sessionStorage.getItem('job'), {
      method: 'delete'
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      window.location.href = './#/company.job-list'
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            招聘职位
            <hr />
          </h3>
        </div>


        {this.state.message &&
          <div className="col-12">
            <div className="alert alert-primary">{this.state.message}</div>
          </div>
        }

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <ul className="list-inline">
                <li className="list-inline-item text-info">标题</li>
                <li className="list-inlien-item">{this.state.job.title}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item text-info">任职要求</li>
                <li className="list-inlien-item">{this.state.job.requirement}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item text-info">岗位责任</li>
                <li className="list-inlien-item">{this.state.job.duty}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item text-info">详细内容</li>
                <li className="list-inlien-item">{this.state.job.content}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 mt-3">
          <h5 className="theme-dh">该职位收到的简历</h5>

          <div className="list-group">
            {this.state.listResume.map(item => <ResumeItem key={item.id} item={item}/>)}
          </div>
        </div>

        <div className="col-12 mt-3">
          <div className="form-group">
            <button type="button" className="btn btn-outline-danger btn-block" onClick={this.remove}>
              <i className="fa fa-fw fa-trash"></i>
              删除职位
            </button>
          </div>
        </div>
        <Tabbar />
      </div>
    )
  }
}
