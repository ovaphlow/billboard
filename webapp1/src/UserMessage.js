import React from 'react'

import Tabbar from './component/TabbarUser'

export default class UserMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', data: {} }
  }

  componentDidMount() {
    fetch('./api/message/' + sessionStorage.getItem('message'))
    .then(res => res.json())
    .then(response => {
      this.setState({ data: response.content[0] })
      setTimeout(() => {
        fetch('./api/message/' + sessionStorage.getItem('message'), {
          method: 'put'
        })
      })
    })
  }

  render() {
    return (
      <div className="card mt-3">
        <div className="card-body">
          <div className="col-12 card-title">
            <h4>
              标题：
              {this.state.data.title}
              <span className="pull-right text-secondary">{this.state.data.created_at}</span>
            </h4>
            <hr />
          </div>

          <div className="col-12">
            <p>发送自：{this.state.data.source}</p>
            <p>内容：{this.state.data.content}</p>
          </div>

          <div className="col-12">
            <a href="./user.message-list.html" className="btn btn-block btn-lg btn-outline-secondary">
              <i className="fa fa-fw fa-arrow-left"></i>
              返回
            </a>
          </div>
        </div>
      </div>
    )
  }
}
