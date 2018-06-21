import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
        <span className="navbar-brand">#billboard</span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="./">首页 <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./resume.html">求职</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./user.html">用户中心</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}