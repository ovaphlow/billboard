import React from 'react'
import ReactDOM from 'react-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }

    this.submit = this.submit.bind(this)
  }

  submit() {
    if (!!!document.getElementById('account').value || !!! document.getElementById('password').value) {
      this.setState({ message: '请完整填写用户信息。' })
      return false
    }

    axios({
      method: 'POST',
      url: '../api/hypervisor/login',
      data: {
        account: document.getElementById('account').value,
        password: document.getElementById('password').value
      },
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        location.href = './index.html'
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">龙江学子就业网</h2>
          <hr/>
        </div>

        <div className="col-12">
          <br/>
          <br/>
          <br/>
        </div>

        <div className="col-3 offset-9">
          <div className="card">
            <div className="card-title mt-3">
              <h5 className="text-center">用户登录</h5>
              <hr/>
            </div>

            {this.state.message && <div className="col-12 alert alert-danger">
              {this.state.message}
            </div>}

            <div className="col-12 form-group">
              <label>账号</label>
              <input type="text" id="account" className="form-control"/>
            </div>

            <div className="col-12 form-group">
              <label>密码</label>
              <input type="password" id="password" className="form-control"/>
            </div>

            <div class="col-12">
              <button type="button" id="submit" className="btn btn-primary btn-block" onClick={this.submit}>
                <i className="fa fa-fw fa-sign-in"></i> 确定
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Login/>,
  document.getElementById('app')
)