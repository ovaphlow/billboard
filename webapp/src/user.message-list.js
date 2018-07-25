import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/NavbarUser'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)

class UserMessageList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '', messageList: [] }
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    axios({
      method: 'get',
      url: './api/message/user/' + auth.uuid,
      responseType: 'json'
    }).then(response => {
      response.data.content.length > 0 && this.setState({ messageList: response.data.content })
    })
  }

  render() {
    return (
      <div className="col-12 card mt-3">
        <div className="card-body">
          <div className="card-title">
            <h4>我的消息</h4>
            <hr/>
          </div>

          <h5>我收到的消息</h5>
          <div className="col-12 list-group">
            {this.state.messageList.map( item => <a href={'./user.message.html?uuid=' + item.uuid} className="list-group-item list-group-item-action">
              <strong>{item.title}</strong>
              <span className="pull-right text-secondary">{item.created_at}</span>
            </a>)}
          </div>
        </div>
      </div>

    )
  }
}

ReactDOM.render(
  <UserMessageList />,
  document.getElementById('app')
)