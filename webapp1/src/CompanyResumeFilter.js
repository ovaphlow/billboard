import React from 'react'

import Tabbar from './component/TabbarCompany'
import ResumeItem from './component/ResumeItem'

export default class CompanyResumeFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', list: [] }
    this.filter = this.filter.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {
    if (sessionStorage.getItem('filter')) {
      this.filter()
      let filter = JSON.parse(sessionStorage.getItem('filter'))
      document.getElementById('category').value = filter.category
      document.getElementById('degree').value = filter.degree
      document.getElementById('major').value = filter.major
    }
  }

  filter() {
    this.setState({ message: '' })
    let body = {
      category: document.getElementById('category').value,
      degree: document.getElementById('degree').value,
      major: document.getElementById('major').value
    }
    fetch('./api/resume/filter', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      if (response.content.length === 0) {
        this.setState({ message: '未找到相符的简历' })
        return false
      }
      this.setState({ list: response.content })
      sessionStorage.setItem('filter', JSON.stringify(body))
    })
  }

  reset() {
    sessionStorage.removeItem('filter')
    window.location.reload(true)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            <i className="fa fa-fw fa-search"></i>
            搜索简历
            <hr />
          </h3>
        </div>

        <div className="col-12">
          <div className="form-group">
            <select className="form-control" id="category">
              <option value="">求职方向</option>
              <option value="产品技术">产品/技术</option>
              <option value="金融保险">金融/保险</option>
              <option value="销售市场">销售/市场</option>
              <option value="生产制造">生产/制造</option>
              <option value="地产建筑">地产/建筑</option>
              <option value="职能其它">职能/其它</option>
            </select>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <select className="form-control" id="degree">
              <option value="">学历</option>
              <option value="高中及以下">高中及以下</option>
              <option value="大学专科">大学专科</option>
              <option value="大学本科">大学本科</option>
              <option value="硕士">硕士</option>
              <option value="博士">博士</option>
            </select>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="专业" id="major" />
          </div>
        </div>

        <div className="col-12">
          <div className="btn-group pull-right">
            <button type="button" className="btn btn-outline-secondary" onClick={this.reset}>
              <i className="fa fa-fw fa-refresh"></i>
              重置
            </button>

            <button type="button" className="btn btn-outline-info" onClick={this.filter}>
              <i className="fa fa-fw fa-search"></i>
              搜索
            </button>
          </div>
        </div>

        <div className="clearfix"></div>

        {this.state.message &&
          <div className="col-12 mt-3">
            <div className="alert alert-info">{this.state.message}</div>
          </div>
        }

        {this.state.list.map(item =>
          <ResumeItem key={item.id} item={item} />
        )}

        <Tabbar />
      </div>
    )
  }
}
