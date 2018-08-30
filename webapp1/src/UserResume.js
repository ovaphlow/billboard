import React from 'react'

import Tabbar from './component/TabbarUser'
import { EducationItem, CareerItem } from './component/UserComponent'

export default class UserResume extends React.Component {
  constructor(props) {
    super(props)
    this.state = { auth: {}, educationList: [], careerList: [] }
    this.resumeHandler = this.resumeHandler.bind(this)
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    if (!!!auth) {
      window.location.href = './#/login'
      return false
    }

    fetch(`./api/resume/user/${auth.uuid}`)
    .then(res => res.json())
    .then(response => this.setState({ auth: response.content }))

    fetch(`./api/resume/${auth.uuid}/education`)
    .then(res => res.json())
    .then(response => this.setState({ educationList: response.content }))

    fetch(`./api/resume/${auth.uuid}/career`)
    .then(res => res.json())
    .then(response => this.setState({ careerList: response.content }))
  }

  resumeHandler() {
    window.location.href = './#/user.resume-update'
  }

  render() {
    return (
      <div>
        <div className="contrainer-fluid">
          <div className="col-12">
            <h2 className="text-center theme-dh">
              我的简历
              <small className="pull-right mt-2">
                <button className="btn btn-outline-info btn-sm" onClick={this.resumeHandler}>
                  <i className="fa fa-fw fa-edit"></i>
                  编辑简历
                </button>
              </small>
            </h2>
            <hr />
          </div>

          <div className="col-12">
            <div className="card">
              <div className="card-header theme-dh-title">
                基本信息
              </div>

              <div className="card-body">
                <ul className="list-inline">
                  <li className="list-inline-item">姓名</li>
                  <li className="list-inline-item">{this.state.auth.name}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item">性别</li>
                  <li className="list-inline-item">{this.state.auth.gender}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item">出生日期</li>
                  <li className="list-inline-item">{this.state.auth.birthday}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item">毕业院校</li>
                  <li className="list-inline-item">{this.state.auth.school}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item">专业</li>
                  <li className="list-inline-item">{this.state.auth.major}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item">学历</li>
                  <li className="list-inline-item">{this.state.auth.degree}</li>
                </ul>

                <ul className="list-inline">
                  <li className="list-inline-item">联系电话</li>
                  <li className="list-inline-item">{this.state.auth.phone}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 mt-3"></div>

          <div className="col-12">
            <div className="card">
              <div className="card-header theme-dh-title">
                教育经历
                <span className="pull-right">
                  <a href="./#/user.resume-education" className="btn btn-outline-light">
                    编辑教育经历
                  </a>
                </span>
              </div>

              <div className="card-body">
                <ul className="list-group">
                  {this.state.educationList.map(item =>
                    <EducationItem key={item.id} item={item} />
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 mt-3"></div>

          <div className="col">
            <div className="card">
              <div className="card-header theme-dh-title">
                工作经历
                <span className="pull-right">
                  <a href="./#/user.resume-career" className="btn btn-outline-light">
                    编辑工作经历
                  </a>
                </span>
              </div>

              <div className="card-body">
                <ul className="list-group">
                  {this.state.careerList.map(item =>
                    <CareerItem item={item} key={item.id} />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Tabbar active={'resume'} />
      </div>
    )
  }
}
