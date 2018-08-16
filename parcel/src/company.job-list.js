import React from 'react'
import ReactDOM from 'react-dom'

import Tabbar from './component/TabbarCompany'
import JobItem from './component/JobItem'

class CompanyJobList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', jobList: [] }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: './api/company/' + this.props.auth.uuid + '/job/',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ jobList: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            <i className="fa fa-fw fa-list"></i>
            发布的职位
            <hr />
          </h3>
        </div>

        <div className="col-12">
          <div className="btn-group pull-right">
            <a href="./company.job.save.html" className="btn btn-outline-info btn-sm">
              <i className="fa fa-fw fa-plus"></i>
              添加新职位
            </a>
          </div>
        </div>

        <div className="clearfix"></div>

        {this.state.message &&
          <div className="col-12">
            <div className="alert alert-danger">
              {this.state.message}
            </div>
          </div>
        }

        <div className="col-12">
          <div className="list-group">
            {this.state.jobList.map(item =>
              <JobItem item={item} key={item.id} company={true} />
            )}
          </div>
        </div>

        <Tabbar active="job" />
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('authCompany'))
if (!!!auth.uuid) location.href = './company.login.html'

ReactDOM.render(<CompanyJobList auth={auth} />, document.getElementById('app'))
