import React from 'react'

export default class TabbarUser extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs tab-bottom" role="tablist">
        <li className="nav-item col">
          <a className={this.props.active === 'job' ? 'nav-link active theme-dh' : 'nav-link theme-dh'} href="./#/">
            <i className="fa fa-fw fa-bookmark-o fa-3x" ></i>
            <br />
            职位
          </a>
        </li>
        <li className="nav-item col">
          <a className={this.props.active === 'resume' ? 'nav-link active theme-dh' : 'nav-link theme-dh'} href="./#/user.resume">
            <i className="fa fa-fw fa-address-card-o fa-3x"></i>
            <br />
            简历
          </a>
        </li>
        <li className="nav-item col">
          <a className={this.props.active === 'user' ? 'nav-link active theme-dh' : 'nav-link theme-dh'} href="./#/user">
            <i className="fa fa-fw fa-user fa-3x"></i>
            <br />
            我的
          </a>
        </li>
      </ul>
    )
  }
}
