import React from 'react'

export default class TabbarUser extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs tab-bottom" role="tablist">
        <li className="nav-item tab-bottom-item">
          <a className={this.props.active === 'job' ? 'nav-link active theme-dh' : 'nav-link theme-dh'} href="index.html">
            <i className="fa fa-fw fa-quora fa-3x" ></i>
            <br />
            职位
          </a>
        </li>
        <li className="nav-item tab-bottom-item">
          <a className={this.props.active === 'resume' ? 'nav-link active theme-dh' : 'nav-link theme-dh'} href="user.resume.html">
            <i className="fa fa-fw fa-envelope-open fa-3x"></i>
            <br />
            简历
          </a>
        </li>
        <li className="nav-item tab-bottom-item">
          <a className={this.props.active === 'user' ? 'nav-link active theme-dh' : 'nav-link theme-dh'} href="user.html">
            <i className="fa fa-fw fa-user fa-3x"></i>
            <br />
            我的
          </a>
        </li>
      </ul>
    )
  }
}