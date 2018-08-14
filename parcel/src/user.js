import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = { auth: {} }
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    if (!!!auth) {
      location.href = './login.html'
      return false
    }
    this.setState({ auth: auth })
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="contrainer-fluid">
          <div className="col-12">
            <div className="media workspace">
              <div className="media-body" style={{color: '#17a2b8'}}>
                <h5 className="mt-0"><i className="fa fa-fw fa-user"></i> {this.state.auth.name}</h5>
              </div>
            </div>

            <div className="col-12">
              <br />
            </div>

            <div className="row">
              <div className="col">
                <a href="./user.resume.html" className="btn btn-block btn-outline-info">我的简历</a>
              </div>

              <div className="col">
                <a href="./user.resume.post.html" className="btn btn-block btn-outline-info">简历投递记录</a>
              </div>

              <br /><br />
              <div className="col">
                <a href="./user.message-list.html" className="btn btn-block btn-outline-info">收到的消息</a>
              </div>
              <br /><br /><br />
              <div className="col-12">
                <a href="./login.html" className="btn btn-info btn-block btn-lg">
                  <i className="fa fa-fw fa-sign-out"></i> 退出登录
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<User />, document.getElementById('app'))