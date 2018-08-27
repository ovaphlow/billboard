import React from 'react'
import md5 from 'blueimp-md5'

import Tabbar from './component/TabbarCompany'

export default class CompanyRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({ message: '' })

    if (!!!document.getElementById('name').value || !!!document.getElementById('account').value ||
        !!!document.getElementById('password').value || !!!document.getElementById('password1').value) {
      this.setState({ message: '请完整填写注册信息。' })
      return false
    }

    if (document.getElementById('password').value !== document.getElementById('password1').value) {
      this.setState({ message: '两次输入的密码不一致，请重新输入。'})
      return false
    }

    let valid_len = [15, 18]
    if (valid_len.indexOf(document.getElementById('licence').value.length) < 0) {
      this.setState({ message: '统一社会信用代码/营业执照注册号 格式错误。' })
      return false
    }

    fetch('./api/company/register', {
      method: 'post',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        name: document.getElementById('name').value,
        licence_type: document.getElementById('licence_type').value,
        licence: document.getElementById('licence').value,
        account: document.getElementById('account').value,
        password: md5(document.getElementById('password').value)
      })
    })
    .then(res => res.json)
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      window.location.href = './#/company.login'
    })
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-12">
            <h1 className="text-center theme-dh">
              注册企业账号
              <i className="fa fa-fw fa-user-circle-o"></i>
            </h1>
          </div>

          <div className="col-12 form-group">
            <label className="theme-dh">企业名称</label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="col-12 form-group">
            <label className="theme-dh">统一社会信用代码/营业执照注册号</label>
            <select className="form-control" id="licence_type">
              <option value="统一社会信用代码">统一社会信用代码</option>
              <option value="营业执照注册号">营业执照注册号</option>
            </select>
            <input type="text" className="form-control mt-3" id="licence" />
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

          <div className="col-12">
            <div className="form-group">
              <label className="theme-dh">重复密码</label>
              <input type="password" className="form-control" id="password1" />
            </div>
          </div>

          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-warning">
                {this.state.message}
              </div>
            </div>
          }

          <div className="col-12">
            <button type="button" className="btn btn-outline-info btn-block btn-lg" id="submit" onClick={this.submit}>
              <i className="fa fa-fw fa-sign-in"></i>
              确　定
            </button>
          </div>

          <div className="col-12 mt-3 text-center">
            <a href="./#/company.login">返回至企业登录</a>
            <br />
            <br />
            <a href="./#/login">切换至用户登录</a>
          </div>
        </div>

        <Tabbar />
      </div>
    )
  }
}
