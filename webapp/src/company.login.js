import React from 'react'
import ReactDOM from 'react-dom'

//import Navbar from './component/navbar'

//ReactDOM.render(<Navbar/>, document.getElementById('navbar'))

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
      location.href = './company.index.html'
    })
  }

  render() {
	   const word={
		color: '#17a2b8',
	  }
    return (
      <div className="card">
        <div className="row card-body">
          <div className="col-12 card-title">
            <h4 style={word}>登录企业账号</h4>
            <hr/>
          </div>

          <div className="col-12 form-group">
            <label style={word}>账　号</label>
            <input type="text" id="account" className="form-control"/>
          </div>

          <div className="col-12 form-group">
            <label style={word}>密　码</label>
            <input type="password" id="password" className="form-control"/>
          </div>

          {this.state.message && <div className="col-12 alert alert-warning">
            {this.state.message}
          </div>}

          <div className="col-12">
            <button type="button" id="submit" className="btn btn-outline-info btn-block" onClick={this.submit}>
              <i className="fa fa-fw fa-sign-in"></i> 确　定
            </button>
          </div>

          <div className="col-12 text-center">
            <br/>
            <a href="company.register.html">没有账号，我要注册。</a>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <CompanyLogin/>,
  document.getElementById('app')
)
