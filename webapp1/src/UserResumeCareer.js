import React from 'react'

import Tabbar from './component/TabbarUser'

export default class ResumeExpCareer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', list: [], auth: {} }
    this.save = this.save.bind(this)
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    if (!!!auth) {
      window.location.href = './#/login'
    }
    this.setState({ auth: auth })
    document.getElementById('begin').value = '2017-03-01'
    document.getElementById('end').value = '2017-09-30'
    fetch('./api/resume/' + auth.uuid + '/career')
    .then(res => res.json())
    .then(response => this.setState({ list: response.content }))
  }

  save() {
    this.setState({ message: '' })
    fetch('./api/resume/' + this.state.auth.uuid + '/career', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        company: document.getElementById('company').value,
        title: document.getElementById('title').value,
        salary: document.getElementById('salary').value,
        duty: document.getElementById('duty').value,
        begin: document.getElementById('begin').value,
        end: document.getElementById('end').value
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      window.location.reload(true)
    })
    .then(err => this.setState({ message: '服务器通信异常' }))
  }

  remove(event) {
    this.setState({ message: '' })
    fetch('./api/resume/career/' + event.target.getAttribute('data-id'), {
      method: 'delete'
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      window.location.reload(true)
    })
    .catch(err => this.setState({ message: '服务器通信异常' }))
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-12">
            <h3 className="text-center theme-dh">我的简历 - 工作经历</h3>
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
              <a href="./#/user.resume" className="btn btn-outline-info btn-sm">
                <i className="fa fa-fw fa-arrow-left"></i>
                返回
              </a>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label className="theme-dh">单位名称</label>
                <input type="text" className="form-control" id="company" />
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label className="theme-dh">职位</label>
                <input type="text" className="form-control" id="title" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="theme-dh">薪资</label>
                <select className="form-control" id="salary">
                  <option value="2000元以下">2000及以下</option>
                  <option value="2000-4000元">2000-4000元</option>
                  <option value="4000-8000元">4000-8000元</option>
                  <option value="8000-15000元">8000-15000元</option>
                  <option value="15000-30000元">15000-30000元</option>
                  <option value="30000元以上">30000元以上</option>
                </select>
              </div>
            </div>

            <div className="col-12">
              <div className="form-group">
                <label className="theme-dh">工作内容</label>
                <textarea rows="2" className="form-control" id="duty" />
              </div>
            </div>

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
            <button type="button" className="btn btn-block btn-info" onClick={this.save}>
              <i className=" fa fa-fw fa-check-square-o"></i>
              确定
            </button>
          </div>

          <div className="col-12"><hr /></div>

          <div className="col-12">
            <div className="list-group">
              {this.state.list.map(item =>
                <li className="list-group-item theme-dh" key={item.id}>
                  {item.company} - {item.title}
                  <br />
                  薪资：
                  <i className=" fa fa-fw fa-cny"></i>
                  {item.salary}
                  <span className="pull-right text-secondary">{item.begin} 至 {item.end}</span>
                  <br />

                  <p>
                    工作内容：
                    {item.duty}
                  </p>

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
