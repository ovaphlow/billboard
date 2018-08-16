import React from 'react'
import ReactDOM from 'react-dom'

import Tabbar from './component/TabbarCompany'
import ResumeItem from './component/ResumeItem'

class CompanyResumeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', resumeList: [] }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: './api/resume/company/' + this.props.auth.uuid,
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.message = response.data.message
        return false
      }
      console.info(response.data.content)
      this.setState({ resumeList: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            <i className="fa fa-fw fa-list"></i>
            收到的简历
            <hr />
          </h3>
        </div>

        {this.state.message &&
          <div className="col-12">
            <div className="alert alert-danger">
              {this.state.message}
            </div>
          </div>
        }

        <div className="col-12">
          {this.state.resumeList.map(item =>
            <ResumeItem key={item.id} item={item} />
          )}
        </div>

        <Tabbar />
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('authCompany'))
if (!!!auth.uuid) location.href = './company.login.html'

ReactDOM.render(<CompanyResumeList auth={auth} />, document.getElementById('app'))
