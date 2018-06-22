import React from 'react'
import ReactDOM from 'react-dom'

class Login extends React.Component {
  render() {
    return (
      <div className="col-12">
        <div className="card">
          <div className="card-title">
            <h5>用户登录</h5>
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