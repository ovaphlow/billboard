import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'
import Tabbar from './component/TabbarUser'

class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', job: {} }
    this.submit = this.submit.bind(this)
    this.back = this.back.bind(this)
  }

  componentDidMount() {
    let job = sessionStorage.getItem('job')
    if (!!!job) {
      this.setState({ message: '数据异常'})
      return false
    }
    axios({
      method: 'get',
      url: './api/job/' + sessionStorage.getItem('job'),
      responseType: 'json'
    }).then(response => {
      console.info(response.data)
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ job: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  submit() {
    this.setState({ message: '' })
    axios({
      method: 'get',
      url: './api/job/' + sessionStorage.getItem('job') + '/judge/' + this.props.auth.uuid,
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      console.info(response.data)
      axios({
        method: 'post',
        url: './api/job/' + sessionStorage.getItem('job') + '/user',
        data: {
          user_uuid: this.props.auth.uuid
        },
        responseType: 'json'
      }).then(response => {
        if (response.data.message) {
          this.setState({ message: response.data.message })
          return false
        }
        // ---------------------------------------------------------
        this.setState({ message: '投递成功' })
        // ---------------------------------------------------------
      }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  back() {
    window.history.go(-1)
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}

        <div className="container-fluid">
          <div className="col-12">
            <h3 className="text-center theme-dh">招聘信息</h3>
          </div>

          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-danger">
                {this.state.message}
              </div>
            </div>
          }

          <div className="col-12">
            <div className="card">
              <div className="card-header theme-dh-title">
                <i className="fa fa-fw fa-file-text-o"></i>
                职位信息
              </div>

              <div className="card-body">
                <ul className="list-inline">
                  <li className="list-inline-item text-info">职位：</li>
                  <li className="list-inline-item">{this.state.job.title}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item text-info">任职要求：</li>
                  <li className="list-inline-item">{this.state.job.requirement}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item text-info">岗位责任：</li>
                  <li className="list-inline-item">{this.state.job.duty}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item text-info">详细内容</li>
                  <li className="list-inline-item">{this.state.job.content}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 mt-3">
            <div className="card">
              <div className="card-header theme-dh-title">
                <i className="fa fa-fw fa-university"></i>
                公司信息
              </div>

              <div className="card-body">
                <ul className="list-inline">
                  <li className="list-inline-item theme-dh">公司名称：</li>
                  <li className="list-inline-item">{this.state.job.name}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item theme-dh">地址：</li>
                  <li className="list-inline-item">{this.state.job.province}</li>
                  <li className="list-inline-item">{this.state.job.city}</li>
                  <li className="list-inline-item">{this.state.job.district}</li>
                  <li className="list-inline-item">{this.state.job.address}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item theme-dh">简介：</li>
                  <li className="list-inline-item">{this.state.job.intro}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 mt-3">
            <button type="button" className="btn btn-info btn-block btn-large" onClick={this.submit}>
              <i className="fa fa-fw fa-check-square-o"></i>
              投递简历
            </button>
          </div>

          <div className="col-12 mt-3">
            <button type="button" className="btn btn-sm btn-outline-info btn-block" onClick={this.back}>
              <i className="fa fa-fw fa-arrow-left"></i>
              返回
            </button>
          </div>
        </div>

        <Tabbar />
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('auth'))
if (!!!auth) {
  location.href = './login.html'
}

ReactDOM.render(<Job auth={auth} />, document.getElementById('app'))
