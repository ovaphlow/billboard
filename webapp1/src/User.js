import React from 'react'

import Tabbar from './component/TabbarUser'

export default class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = { auth: {} }
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    if (!!!auth) {
      window.location.href = './#/login'
      return false
    }
    this.setState({ auth: auth })
  }

  render() {
    return (
      <div>
        <div className="contrainer-fluid">
          <div className="col-12">
            <div className="media workspace">
              <div className="media-body theme-dh">
                <h5 className="mt-0">
                  <i className="fa fa-fw fa-user"></i>
                  {this.state.auth.name}
                </h5>
              </div>
            </div>

            <div className="col-12">
              <br />
            </div>

            <div className="row">
              <div className="col">
                <a href="./#/user.resume" className="btn btn-block btn-outline-info btn-lg">
                  <i className="fa fa-fw fa-address-card-o"></i>
                  我的简历
                </a>
              </div>

              <div className="col">
                <a href="./#/user.resume-post" className="btn btn-block btn-outline-info btn-lg">
                  <i className="fa fa-fw fa-history"></i>
                  简历投递记录
                </a>
              </div>

              <br /><br />
              <div className="col">
                <a href="./#/user.message-list" className="btn btn-block btn-outline-info btn-lg">
                  <i className="fa fa-fw fa-commenting-o"></i>
                  收到的消息
                </a>
              </div>
              <br /><br /><br />
              <div className="col-12 text-center">
                <a href="./#/login" className="btn btn-outline-secondary">
                  <i className="fa fa-fw fa-sign-out"></i>
                  退出登录
                </a>
              </div>
            </div>
          </div>
        </div>

        <Tabbar active={'user'} />
      </div>
    )
  }
}
