import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'
import Tabbar from './component/TabbarUser'

class ResumeExpEducation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', list: [] }
    this.save = this.save.bind(this)
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    document.getElementById('begin').value = '2013-09-01'
    document.getElementById('end').value = '2017-07-10'
    axios({
      method: 'get',
      url: './api/resume/' + this.props.auth.uuid + '/education',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ list: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常` }))
  }

  save() {
    this.setState({ message: '' })
    axios({
      method: 'post',
      url: './api/resume/' + this.props.auth.uuid + '/education',
      data: {
        school: document.getElementById('school').value,
        major: document.getElementById('major').value,
        degree: document.getElementById('degree').value,
        begin: document.getElementById('begin').value,
        end: document.getElementById('end').value
      },
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      location.reload(true)
    }).catch(err => this.setState({ message: `服务器通信异常` }))
  }

  remove(event) {
    this.setState({ message: '' })
    axios({
      method: 'delete',
      url: './api/resume/education/' + event.target.getAttribute('data-id'),
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      location.reload(true)
    }).catch(err => this.setState({ message: `服务器通信异常` }))
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}

        <div className="container-fluid">
          <div className="col-12">
            <h3 className="text-center theme-dh">我的简历 - 教育经历</h3>
          </div>

          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-danger">
                {this.state.message}
              </div>
            </div>
          }

          <div className="col-12">
            <div className="btn-group pull-right">
              <a href="./user.resume.html" className="btn btn-outline-info btn-sm">
                <i className="fa fa-fw fa-arrow-left"></i>
                返回
              </a>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label className="theme-dh">学校</label>
                <input type="text" className="form-control" id="school" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="theme-dh">专业</label>
                <input type="text" className="form-control" id="major" />
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label className="theme-dh">学历</label>
                <select className="form-control" id="degree">
                  <option value="高中及以下">高中及以下</option>
                  <option value="大学专科">大学专科</option>
                  <option value="大学本科">大学本科</option>
                  <option value="硕士">硕士</option>
                  <option value="博士">博士</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="theme-dh">起止日期</label>
                <input type="date" className="form-control" id="begin" />
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label className="theme-dh">&nbsp;</label>
                <input type="date" className="form-control" id="end" />
              </div>
            </div>
          </div>

          <div className="col-12">
            <button type="button" className="btn btn-info btn-block" onClick={this.save}>
              <i className="fa fa-fw fa-check-square-o"></i>
              确定
            </button>
          </div>

          <div className="col-12"><hr /></div>

          <div className="col-12">
            <div className="list-group">
              {this.state.list.map(item =>
                <li className="list-group-item theme-dh" key={item.id}>
                  {item.school} - {item.major}
                  <br />
                  {item.degree}
                  <span className="pull-right text-secondary">{item.begin} - {item.end}</span>
                  <br />

                  <button type="button" className="btn btn-sm btn-outline-warning pull-right mt-3" data-id={item.uuid} onClick={this.remove}>
                    <i className="fa fa-fw fa-remove"></i>
                    删除
                  </button>
                </li>
              )}
            </div>
          </div>
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
ReactDOM.render(<ResumeExpEducation auth={auth} />, document.getElementById('app'))
