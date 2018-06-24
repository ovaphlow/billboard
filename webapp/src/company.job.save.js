import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)

class CompanyJobSave extends React.Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit() {
    axios({
      method: 'post',
      url: './api/company/' + this.props.auth.uuid + '/job/',
      data: {
        title: document.getElementById('title').value,
        requirement: document.getElementById('requirement').value,
        duty: document.getElementById('duty').value,
        content: document.getElementById('content').value
      },
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
          <p className="lead"><i className="fa fa-fw fa-plus"></i> 发布新职位<hr/></p>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label>标题</label>
                <input type="text" className="form-control" id="title"/>
              </div>

              <div className="form-group">
                <label>任职要求</label>
                <textarea rows="3" className="form-control" id="requirement"/>
              </div>

              <div className="form-group">
                <label>岗位责任</label>
                <textarea rows="3" className="form-control" id="duty"/>
              </div>

              <div className="form-group">
                <label>详细内容</label>
                <textarea rows="3" className="form-control" id="content"/>
              </div>

              <div className="col-12">
                <button type="button" className="btn btn-primary btn-block" onClick={this.submit}>
                  <i className="fa fa-fw fa-check-square-o"></i> 确定
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

let auth = JSON.parse(sessionStorage.getItem('auth'))
if (!!!auth) location.href = './company.login.html'
ReactDOM.render(<CompanyJobSave auth={auth}/>, document.getElementById('app'))