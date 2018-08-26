import React from 'react'

import Tabbar from './component/TabbarUser'

export default class UserMessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', messageList: [] }
    this.detail = this.detail.bind(this)
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    fetch('./api/message/user/' + auth.uuid)
    .then(res => res.json())
    .then(response => this.setState({ messageList: response.content }))
  }

  detail(event) {
    sessionStorage.setItem('message', event.target.getAttribute('data-id'))
    window.location.href = './#/user.message'
  }

  render() {
    return (
      <div>
        <div className="card-body">
          <div className="card-title">
            <h4 className="text-center theme-dh-title">我的消息</h4>
            <hr/>
          </div>
          <p>
            <br/><br/><br/><br/>
          </p>
          <p className="theme-dh-title">
          <i className="fa fa-commenting fa-5x"></i><br/><br/>
          <span>暂无新消息</span>
          </p>
          <div className="col-12 list-group">
            {this.state.messageList.map(item =>
              <a className="list-group-item list-group-item-action" data-id={item.uuid} key={item.uuid} onClick={this.detail}>
                <strong>{item.title}</strong>
                <span className="pull-right text-secondary">{item.created_at}</span>
              </a>
            )}
          </div>
        </div>

        <Tabbar />
      </div>
    )
  }
}
