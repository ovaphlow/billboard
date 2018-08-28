import React from 'react'

import Tabbar from './component/TabbarUser'
import { DegreeSelect } from './component/Common'

export default class ResumeExpEducation extends React.Component {
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

    document.getElementById('begin').value = '2013-09-01'
    document.getElementById('end').value = '2017-07-10'
    fetch('./api/resume/' + auth.uuid + '/education', {
      method: 'get',
    })
    .then(res => res.json())
    .then(response => this.setState({ list: response.content }))
    .catch(err => console.error(`服务器通信异常 ${err}`))
  }

  save() {
    this.setState({ message: '' })
    fetch('./api/resume/' + this.state.auth.uuid + '/education', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        school: document.getElementById('school').value,
        major: document.getElementById('major').value,
        degree: document.getElementById('component.degree-list').value,
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

    fetch('./api/resume/education/' + event.target.getAttribute('data-id'), {
      method: 'delete',
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
              <DegreeSelect />
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
