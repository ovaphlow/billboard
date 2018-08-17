import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'
import Tabbar from './component/TabbarUser'
import JobItem from './component/JobItem'

class UserResumePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', list: [] }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: './api/resume/user/' + this.props.auth.uuid + '/post',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ list: response.data.content })
    }).catch(err => this.setSTate({ message: `服务器通信异常` }))
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}

        <div className="container-fluid">
          <div className="col-12">
            <h3 className="theme-dh">简历投递记录</h3>
          </div>

          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-danger">
                {this.state.message}
              </div>
            </div>
          }
          
          <ul className="list-group">
            {this.state.list.map(item => 
              <JobItem key={item.id} item={item} />
            )}
          </ul>
        </div>

        <Tabbar active={'resume'} />
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('auth'))
if (!!!auth) {
  location.href = './login.html'
}

ReactDOM.render(<UserResumePost auth={auth} />, document.getElementById('app'))
