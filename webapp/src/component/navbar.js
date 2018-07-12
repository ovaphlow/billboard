import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
        <span className="navbar-brand">龙江学子就业网</span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="./company.resume.filter.html">搜索简历 <span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./company.index.html">用户中心</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./index.html">退出企业版</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}