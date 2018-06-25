import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'
import ResumeItem from './component/ResumeItem'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)

class CompanyJob extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '', job: {}, resumeList: [] }
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: './api/company/' + this.props.auth.uuid + '/job/' + urlParameter('uuid'),
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        this.setState({ job: response.data.content })
      }
    })

    axios({
      method: 'get',
      url: './api/resume/job/' + urlParameter('uuid'),
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        this.setState({ resumeList: response.data.content })
      }
    })
  }

  remove() {
    axios({
      method: 'delete',
      url: './api/company/' + this.props.auth.uuid + '/job/' + urlParameter('uuid'),
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        location.href = './company.job.list.html'
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <p className="lead">招聘职位<hr/></p>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {this.state.message && <div className="col-12">
                <div className="alert alert-danger">{this.state.message}</div>
              </div>}

              <ul className="list-inline">
                <li className="list-inline-item text-secondary">标题</li>
                <li className="list-inlien-item">{this.state.job.title}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item text-secondary">任职要求</li>
                <li className="list-inlien-item">{this.state.job.requirement}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item text-secondary">岗位责任</li>
                <li className="list-inlien-item">{this.state.job.duty}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item text-secondary">详细内容</li>
                <li className="list-inlien-item">{this.state.job.content}</li>
              </ul>

              <hr/>

              <div className="list-group">
                {this.state.resumeList.map( item => <ResumeItem item={item}/>)}
              </div>
              
              <hr/>

              <div className="form-group">
                <button type="button" className="btn btn-danger btn-block" onClick={this.remove}>
                  <i className="fa fa-fw fa-check-square-o"></i> 删除
                </button>

                <a href="./company.job.list.html" className="btn btn-outline-secondary btn-block btn-sm">
                  <i className="fa fa-fw fa-arrow-left"></i> 返回
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('authCompany'))
if (!!!auth) location.href = './company.login.html'

ReactDOM.render(<CompanyJob auth={auth}/>, document.getElementById('app'))