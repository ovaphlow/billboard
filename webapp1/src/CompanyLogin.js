import React from 'react'
import md5 from 'blueimp-md5'

import Tabbar from './component/TabbarCompany'

export default class CompanyLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({ message: '' })

    if (!!!document.getElementById('account').value || !!!document.getElementById('password').value) {
      this.setState({ message: '请完整填写登录信息。' })
      return false
    }

    fetch('./api/company/login', {
      method: 'post',
      headers: {
        'content-type': 'application/json; charset=utf-8'
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
      sessionStorage.setItem('authCompany', JSON.stringify(response.content))
      window.location.href = './#/company'
    })
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-12">
            <h1 className="text-center theme-dh">
              登录企业账号
              <i className="fa fa-fw fa-user-circle-o"></i>
            </h1>
          </div>

          <div className="col-12">
            <div className="form-group">
              <label className="theme-dh">账　号</label>
              <input type="text" className="form-control" id="account" />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <label className="theme-dh">密　码</label>
              <input type="password" className="form-control" id="password" />
            </div>
          </div>

          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-warning">
                {this.state.message}
              </div>
            </div>
          }

          <div className="row">
            <div className="col-6">
              <a href="./#/company.register" className="btn btn-outline-danger btn-block btn-lg">
                <i className="fa fa-fw fa-user-plus"></i>
                注册企业账号
              </a>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-info btn-block btn-lg" id="submit" onClick={this.submit}>
                <i className="fa fa-fw fa-sign-in"></i>
                确　定
              </button>
            </div>
          </div>

          <div className="col-12 mt-3">
            <div className="text-center">
              <a href="./#/login">个人用户登录</a>
            </div>
          </div>
        </div>

        <Tabbar />
      </div>
    )
  }
}
