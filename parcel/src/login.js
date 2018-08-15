import React from 'react'
import ReactDOM from 'react-dom'

import Tabbar from './component/TabbarUser'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({ message: '' })
    if (!!!document.getElementById('account').value || !!!document.getElementById('password').value) {
      this.setState({ message: '账号或密码不能为空' })
      return false
    }
    axios({
      method: 'post',
      url: './api/user/login',
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
      sessionStorage.setItem('auth', JSON.stringify(response.data.content))
      location.href = './user.html'
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  render() {
    return (
      <div>
        <h1 className="text-center theme-dh">
          登　录
          <i className="fa fa-fw fa-user-circle-o"></i>
        </h1>

        <hr />

        {this.state.message &&
          <div className="col-12">
            <div className="alert alert-warning" role="alert">
              {this.state.message}
            </div>
          </div>
        }

        <div className="col-12 form-group">
          <label style={{color: '#17a2b8'}}>账　号</label>
          <input type="text" className="form-control" id="account" />
        </div>

        <div className="col-12 form-group">
          <label style={{color: '#17a2b8'}}>密　码</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="col-12 text-center">
          <button type="button" className="btn btn-info btn-block btn-lg" onClick={this.submit}>
            <i className="fa fa-sign-in fa-fw"></i> 登　录
          </button>

          <br/>

          <a href="./register.html">
            注册账号
          </a>

          <br />
          <br />

          <a href="./company.login.html">
            企业账号登录
          </a>
        </div>

        <Tabbar active={'user'} />
      </div>
    )
  }
}

ReactDOM.render(<Login />, document.getElementById('app'))
