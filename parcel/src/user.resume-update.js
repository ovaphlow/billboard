import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'
import Tabbar from './component/TabbarUser'
import UserResumeMod from './component/UserResumeMod'

class UserResumeUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', resume: {} }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}

        <div className="container-fluid">
          <div className="col-12">
            <h3 className="text-center theme-dh">我的简历</h3>
          </div>

          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-danger">
                {this.state.message}
              </div>
            </div>
          }

          <UserResumeMod read={false} auth={this.props.auth} />
        </div>

        <Tabbar />
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('auth'))
if (!!!auth) {
  location.href = './login.html'
}
ReactDOM.render(<UserResumeUpdate auth={auth} />, document.getElementById('app'))
