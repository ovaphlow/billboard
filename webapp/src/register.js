import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '' }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({ message: '' })

    if (!!!document.getElementById('account').value ||
        !!!document.getElementById('password').value || !!!document.getElementById('password1').value) {
      this.setState({ message: '请完整填写注册信息。' })
      return false
    }

    if (document.getElementById('password').value !== document.getElementById('password1').value) {
      this.setState({ message: '两次输入的密码不一致，请重新输入。'})
      return false
    }

    axios({
      method: 'post',
      url: './api/user/register',
      data: {
        account: document.getElementById('account').value,
        password: md5(document.getElementById('password').value)
      },
      responseType: 'json'
    }).then(response => {
      console && console.info(response.data)
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        location.href = './login.html'
      }
    })
  }

  render() {
    return (
      <div className="card">
        <div className="row card-body">
          <div className="col-12 card-title">
            <h4>注册账号</h4>
            <hr/>
          </div>

          <div className="col-12 form-group">
            <label>账号</label>
            <input type="text" className="form-control" id="account"/>
          </div>

          <div className="col-12 form-group">
            <label>密码</label>
            <input type="password" className="form-control" id="password"/>
          </div>

          <div className="col-12 form-group">
            <label>重复密码</label>
            <input type="password" className="form-control" id="password1"/>
          </div>

          {this.state.message && <div className="col-12 alert alert-danger">
            {this.state.message}
          </div>}

          <div className="col-12">
            <button type="button" className="btn btn-outline-dark btn-block btn-lg" onClick={this.submit}>
              <i className="fa fa-fw fa-sign-in"></i> 确定
            </button>
          </div>

          <div className="col-12 text-center">
            <br/>
            <a href="./login.html">已有账号，切换至登录页面。</a>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Register/>,
  document.getElementById('app')
)