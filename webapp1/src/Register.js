import React from 'react'
import md5 from 'blueimp-md5'

import Tabbar from './component/TabbarUser'
import { Message, BackButton } from './component/Common'

export default class Register extends React.Component {
  constructor() {
    super()
    this.state = { message: '' }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({ message: '' })
    if (
        !!!document.getElementById('account').value ||
        !!!document.getElementById('password').value ||
        !!!document.getElementById('password1').value
    ) {
      this.setState({ message: '请完整填写注册信息' })
      return false
    }

    if (
        document.getElementById('password').value !== document.getElementById('password1').value
    ) {
      this.setState({ message: '两次输入的密码不一致，请重新输入。' })
      return false
    }

    fetch('./api/user/register', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        account: document.getElementById('account').value,
        password: md5(document.getElementById('password').value)
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      window.location.href = './#/login'
    })
    .catch(err => window.console && console.error(err) && this.setState({ message: '服务器通信异常' }))
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-12">
            <h3 className="theme-dh">注册账号</h3>
            <hr />
          </div>

          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label className="theme-dh">账号</label>
                  <input type="text" className="form-control form-control-lg" id="account" />
                </div>

                <div className="form-group">
                  <label className="theme-dh">密码</label>
                  <input type="password" className="form-control form-control-lg" id="password" />
                </div>

                <div className="form-group">
                  <label className="theme-dh">重复密码</label>
                  <input type="password" className="form-control form-control-lg" id="password1" />
                </div>

                {this.state.message &&
                  <div className="col-12">
                    <Message message={this.state.message} />
                  </div>
                }

                <div className="row">
                  <div className="col">
                    <BackButton />
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-info btn-block btn-lg" onClick={this.submit}>
                      <i className="fa fa-fw fa-user-plus"></i>
                      注册
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabbar />
      </div>
    )
  }
}
