import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)

class CompanyRegister extends React.Component {
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

    axios({
      method: 'POST',
      url: './api/company/register',
      data: {
        name: document.getElementById('name').value,
        licence_type: document.getElementById('licence_type').value,
        licence: document.getElementById('licence').value,
        account: document.getElementById('account').value,
        password: md5(document.getElementById('password').value)
      },
      responseType: 'json'
    }).then(response => {
      if (response.data.status === 200) {
        sessionStorage.setItem('auth', JSON.stringify(response.data.content))
        location.href = './company.index.html'
      } else {
        this.setState({ message: response.data.message })
      }
    })
  }

  render() {
    return (
      <div className="card">
        <div className="row card-body">
          <div className="col-12 card-title">
            <h4>注册公司账号</h4>
            <hr/>
          </div>

          <div className="col-12 form-group">
            <label>公司名称</label>
            <input type="text" id="name" className="form-control"/>
          </div>

          <div className="col-12 form-group">
            <label>统一社会信用代码/营业执照注册号</label>
            <select id="licence_type" className="form-control">
              <option value="统一社会信用代码">统一社会信用代码</option>
              <option value="营业执照注册号">营业执照注册号</option>
            </select>
            <input type="text" id="licence" className="form-control mt-2"/>
          </div>

          <div className="col-12 form-group">
            <label>账号</label>
            <input type="text" id="account" className="form-control"/>
          </div>

          <div className="col-12 form-group">
            <label>密码</label>
            <input type="password" id="password" className="form-control"/>
          </div>

          <div className="col-12 form-group">
            <label>重复密码</label>
            <input type="password" id="password1" className="form-control"/>
          </div>

          {this.state.message && <div className="col-12 alert alert-danger">
            {this.state.message}
          </div>}

          <div className="col-12">
            <button type="button" id="submit" className="btn btn-outline-dark btn-block" onClick={this.submit}>
              <i className="fa fa-fw fa-sign-in"></i> 确定
            </button>
          </div>

          <div className="col-12 text-center">
            <br/>
            <a href="company.login.html">已有账号，切换至登录页面。</a>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <CompanyRegister/>,
  document.getElementById('app')
)