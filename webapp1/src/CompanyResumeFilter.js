import React from 'react'

import Tabbar from './component/TabbarCompany'
import ResumeItem from './component/ResumeItem'
import { DegreeSelect, CategorySelect } from './component/Common'

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
      document.getElementById('component.category-select').value = filter.category
      document.getElementById('component.degree-select').value = filter.degree
      document.getElementById('major').value = filter.major
    }
  }

  filter() {
    this.setState({ message: '' })
    let body = {
      category: document.getElementById('component.category-select').value,
      degree: document.getElementById('component.degree-select').value,
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
          <CategorySelect />
        </div>

        <div className="col-12">
          <DegreeSelect />
        </div>

        <div className="col-12">
          <div className="form-group">
            <label>专业</label>
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
