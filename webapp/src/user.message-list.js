import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'

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
	  const word={
		color: '#17a2b8',
    }
    const big={
      color: '#D3D3D3',
      margin:'0 35%'
      }
    return (
      <div>
        <div className="card-body">
          <div className="card-title">
            <h4 style={{ flex: 1, textAlign: 'center',color: '#17a2b8'}}>我的消息</h4>
            <hr/>
          </div>
          <p>
            <br/><br/><br/><br/>
          </p>
          <p style={word}>
          <i class="fa fa-commenting fa-5x" style={big}></i><br/><br/>
          <span style={big}>暂无新消息</span>
          </p>
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