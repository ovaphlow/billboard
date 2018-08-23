import React from 'react'

export default class TabbarCompany extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs tab-bottom" role="tablist">
        <li className="nav-item tab-bottom-item">
          <a href="./company.resume-list.html" className={this.props.active === 'resume' ? 'nav-link active theme-dh' : 'nav-link theme-dh'}>
            <i className="fa fa-fw fa-quora fa-3x" ></i>
            <br />
            收到的简历
          </a>
        </li>
        <li className="nav-item tab-bottom-item">
          <a href="./company.job-list.html" className={this.props.active === 'job' ? 'nav-link active theme-dh' : 'nav-link theme-dh'}>
            <i className="fa fa-fw fa-envelope-open fa-3x"></i>
            <br />
            发布招聘
          </a>
        </li>
        <li className="nav-item tab-bottom-item">
          <a href="./company.html" className={this.props.active === 'company' ? 'nav-link active theme-dh' : 'nav-link theme-dh'}>
            <i className="fa fa-fw fa-user fa-3x"></i>
            <br />
            企业信息
          </a>
        </li>
      </ul>
    )
  }
}