import React from 'react'
import ReactDOM from 'react-dom'

import Tabbar from './component/TabbarCompany'

class Resume extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            <i className="fa fa-fw fa-address-card-o"></i>
            个人简历
            <hr />
          </h3>
        </div>

        <div className="col-12">
          <div className="card w-100 mt-3">
            <div className="card-header theme-dh-title">
            </div>
          </div>
        </div>

        <Tabbar active={'resume'} />
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('authCompany'))
if (!!!auth.uuid) location.href = './company.login.html'

ReactDOM.render(<Resume auth={auth}/>, document.getElementById('app'))
