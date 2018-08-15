import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/NavbarCompany'
import Tabbar from './component/TabbarCompany'

class CompanyLogin extends React.Component {
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

    axios({
      method: 'post',
      url: './api/company/login',
      data: {
        account: document.getElementById('account').value,
        password: md5(document.getElementById('password').value)
      },
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      sessionStorage.setItem('authCompany', JSON.stringify(response.data.content))
      location.href = './company.html'
    })
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}

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

          <div className="col-12">
            <button type="button" className="btn btn-outline-info btn-block btn-lg" id="submit" onClick={this.submit}>
              <i className="fa fa-fw fa-sign-in"></i> 确　定
            </button>
          </div>

          <div className="col-12">
            <div className="text-center">
              <br/>
              <a href="./company.register.html">没有账号，我要注册。</a>
            </div>
          </div>
        </div>

        <Tabbar active={'company'} />
      </div>
    )
  }
}

ReactDOM.render(<CompanyLogin />, document.getElementById('app'))
