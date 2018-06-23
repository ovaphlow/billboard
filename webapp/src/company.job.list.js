import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)

class JobList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.jobList)
  }

  render() {
    return (
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          123321
          <span className="pull-right">
            <i className="fa fa-fw fa-angle-right"></i>
          </span>
        </a>
      </div>
    )
  }
}

class CompanyJobList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { jobList: [] }
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))

    axios({
      method: 'get',
      url: './api/company/' + auth.uuid + '/job/',
      reponseType: 'json'
    }).then(response => {
      this.setState({ jobList: response.data.content })
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <p className="lead">发布的职位<hr/></p>
        </div>

        <div className="col-12">
          <div className="btn-group pull-right">
            <a href="./company.job.save.html" className="btn btn-outline-secondary btn-sm">
              <i className="fa fa-fw fa-plus"></i> 添加新职位
            </a>
          </div>
        </div>

        <div className="col-12">
          <br/>
        </div>

        <div className="col-12">
          <JobList jobList={this.state.jobList}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<CompanyJobList/>, document.getElementById('app'))

