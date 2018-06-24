import React from 'react'
import ReactDOM from 'react-dom'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
        <span className="navbar-brand">龙江学子就业网</span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="./"><i className="fa fa-fw fa-home"></i> 首页</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
