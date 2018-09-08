import React from 'react'

export class DegreeSelect extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="theme-dh">学历</label>
        <select disabled={this.props.read ? true : false} className="form-control" id="component.degree-select" defaultValue={this.props.degree}>
          <option value="">选择学历</option>
          <option value="高中及以下">高中及以下</option>
          <option value="大学专科">大学专科</option>
          <option value="大学本科">大学本科</option>
          <option value="硕士">硕士</option>
          <option value="博士">博士</option>
        </select>
      </div>
    )
  }
}

export class CategorySelect extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="theme-dh">求职方向</label>
        <select disabled={this.props.read ? true : false} className="form-control" id="component.category-select" defaultValue={this.props.category}>
          <option value="">选择类别</option>
          <option value="产品技术">产品/技术</option>
          <option value="金融保险">金融/保险</option>
          <option value="销售市场">销售/市场</option>
          <option value="生产制造">生产/制造</option>
          <option value="地产建筑">地产/建筑</option>
          <option value="职能其它">职能/其它</option>
        </select>
      </div>
    )
  }
}

export class Message extends React.Component {
  render() {
    return (
      <div className="alert alert-info">
        {this.props.message}
      </div>
    )
  }
}

export class BackButton extends React.Component {
  constructor() {
    super()
    this.submit = this.submit.bind(this)
  }

  submit() { window.history.go(-1) }

  render() {
    return (
      <button type="button" className="btn btn-outline-secondary btn-block btn-lg" onClick={this.submit}>
        <i className="fa fa-fw fa-arrow-left"></i>
        返回
      </button>
    )
  }
}
