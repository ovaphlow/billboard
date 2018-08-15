import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'
import UserResumeMod from './component/UserResumeMod'

class UserResume extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', resume: {} }
    this.resumeHandler = this.resumeHandler.bind(this)
  }

  componentDidMount() {
  }

  resumeHandler() {
    sessionStorage.setItem('resume', this.state.resume.uuid)
    location.href = './user.resume-update.html'
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="contrainer-fluid">
          <div className="col-12">
            <h3 className="text-center theme-dh">
              我的简历
              <small className="pull-right mt-2">
                <button className="btn btn-outline-info btn-sm" onClick={this.resumeHandler}>
                  <i className="fa fa-fw fa-edit"></i>
                  编辑简历
                </button>
              </small>
            </h3>
            <hr />
          </div>

          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-warning">
                {this.state.message}
              </div>
            </div>
          }

          <UserResumeMod read={true} auth={this.props.auth} />

          <div className="col-12">
            <label className="theme-dh">教育经历</label>
            <ul className="list-group">
              <a href="./resume.exp-education" className="list-group-item list-group-item-action" style={{height: '45px'}}>
                编辑教育经历
                <span className="pull-right text-secondary">
                  <i className="fa fa-fw fa-angle-right"></i>
                </span>
              </a>
            </ul>
          </div>

          <div className="col-12">
            <br />
            <label className="theme-dh">工作经历</label>
            <ul className="list-group">
              <a href="./resume.exp-career.html" className="list-group-item list-group-item-action" style={{height: '45px'}}>
                编辑工作经历
                <span className="pull-right text-secondary ">
                  <i className="fa fa-fw fa-angle-right " aria-hidden="true "></i>
                </span>
              </a>
            </ul>
          </div>

          <div className="col-12">
            <br />
            <a href="./user.html " className="btn btn-outline-info btn-block">
              <i className="fa fa-fw fa-arrow-left "></i> 返回
            </a>
          </div>
        </div>
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('auth'))
if (!!!auth) {
  location.href = './login.html'
}

ReactDOM.render(<UserResume auth={auth} />, document.getElementById('app'))