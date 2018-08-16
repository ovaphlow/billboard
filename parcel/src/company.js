import React from 'react'
import ReactDOM from 'react-dom'

import Tabbar from './component/TabbarCompany'

class Company extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">{this.props.auth.name}</h3>
          <hr />
        </div>

        <div className="col-12">
          <i className="fa fa-fw fa-phone theme-dh"></i>
          <span className="theme-dh">电　　话：</span>
          {this.props.auth.phone}
        </div>

        <div className="col-12">
          <i className="fa fa-fw fa-envelope theme-dh"></i>
          <span className="theme-dh">电子邮箱：</span>
          {this.props.auth.email}
        </div>

        <div className="col-12">
          <ul className="list-inline">
      			<li className="list-inline-item theme-dh">
              <i className="fa fa-fw fa-map-marker"></i>
              地　　址：
            </li>
            <li className="list-inline-item">{this.props.auth.province}</li>
            <li className="list-inline-item">{this.props.auth.city}</li>
            <li className="list-inline-item">{this.props.auth.district}</li>
            <li className="list-inline-item">{this.props.auth.address}</li>
          </ul>
        </div>

        <div className="col-12">
          <p>{this.props.auth.intro}</p>
        </div>

        <div className="col-12">
          <a href="./company.update.html" className="btn btn-outline-info btn-block btn-sm">编辑公司信息</a>
          <hr/>
        </div>

        <div className="col-12">
          <div className="list-group">
            <a href="./company.job-list.html" className="list-group-item list-group-item-action theme-dh">
              <i className="fa fa-fw fa-calendar-o"></i>
              发布的职位
              <span className="pull-right"><i className="fa fa-fw fa-angle-right"></i></span>
            </a>

            <a href="./company.resume-list.html" className="list-group-item list-group-item-action theme-dh">
              <i className="fa fa-fw fa-address-book-o"></i>
              收到的简历
              <span className="pull-right"><i className="fa fa-fw fa-angle-right"></i></span>
            </a>

            <a href="./company.resume.filter.html" className="list-group-item list-group-item-action theme-dh">
              <i className="fa fa-fw fa-search"></i>
              搜索简历
              <span className="pull-right"><i className="fa fa-fw fa-angle-right"></i></span>
            </a>
          </div>
        </div>

        <div className="col-12">
          <hr />
          <a href="./company.login.html" className="btn btn-outline-info btn-block btn-sm">
            <i className="fa fa-fw fa-sign-out"></i>
            退出登录
          </a>
        </div>

        <Tabbar active="company" />
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('authCompany'))
if (!!!auth.uuid) location.href = './company.login.html'

ReactDOM.render(<Company auth={auth} />, document.getElementById('app'))
