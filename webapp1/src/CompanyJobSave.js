import React from 'react'

import Tabbar from './component/TabbarCompany'

export default class CompanyJobSave extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', auth: {} }
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('authCompany'))
    if (!!!auth) {
      window.location.href = './#/company.login'
      return false
    }
    this.setState({ auth: auth })
  }

  submit() {
    fetch('./api/company/' + this.state.auth.uuid + '/job/', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        category: document.getElementById('category').value,
        title: document.getElementById('title').value,
        requirement: document.getElementById('requirement').value,
        duty: document.getElementById('duty').value,
        content: document.getElementById('content').value
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      window.location.href = './#/company.job-list'
    })
    .catch(err => window.console && console.error(`${err}`))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <p className="lead theme-dh">
            <i className="fa fa-fw fa-plus"></i>
            发布新职位
          </p>
          <hr />
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {this.state.message &&
                <div className="col-12">
                  <div className="alert alert-warning">{this.state.message}</div>
                </div>
              }

              <div className="form-group">
                <label className="theme-dh">类别</label>
                <select className="form-control" id="category">
                  <option value="">未分类</option>
                  <option value="产品技术">产品/技术</option>
                  <option value="金融保险">金融/保险</option>
                  <option value="销售市场">销售/市场</option>
                  <option value="生产制造">生产/制造</option>
                  <option value="地产建筑">地产/建筑</option>
                  <option value="职能其它">职能/其它</option>
                </select>
              </div>

              <div className="form-group">
                <label className="theme-dh">标题</label>
                <input type="text" className="form-control" id="title"/>
              </div>

              <div className="form-group">
                <label className="theme-dh">任职要求</label>
                <textarea rows="3" className="form-control" id="requirement"/>
              </div>

              <div className="form-group">
                <label className="theme-dh">岗位责任</label>
                <textarea rows="3" className="form-control" id="duty"/>
              </div>

              <div className="form-group">
                <label className="theme-dh">详细内容</label>
                <textarea rows="3" className="form-control" id="content"/>
              </div>

              <div className="col-12">
                <button type="button" className="btn btn-info btn-block" onClick={this.submit}>
                  <i className="fa fa-fw fa-check-square-o"></i>
                  确定
                </button>

                <a href="./#/company.job-list" className="btn btn-outline-info btn-block btn-sm">
                  <i className="fa fa-fw fa-arrow-left"></i>
                  返回
                </a>
              </div>
            </div>
          </div>
        </div>

        <Tabbar />
      </div>
    )
  }
}
