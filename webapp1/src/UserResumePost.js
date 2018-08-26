import React from 'react'

import Tabbar from './component/TabbarUser'
import JobItem from './component/JobItem'

export default class UserResumePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', list: [], auth: {} }
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    if (!!!auth) {
      window.location.href = './#/login'
    }
    this.setState({ message: auth })
    fetch('./api/resume/user/' + auth.uuid + '/post')
    .then(res => res.json())
    .then(response => this.setState({ list: response.content }))
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-12">
            <h3 className="theme-dh">简历投递记录</h3>
          </div>

          <ul className="list-group">
            {this.state.list.map(item =>
              <JobItem key={item.id} item={item} />
            )}
          </ul>
        </div>

        <Tabbar active={'resume'} />
      </div>
    )
  }
}
