import React from 'react'

export default class ResumeItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
    this.detail = this.detail.bind(this)
  }

  detail(event) {
    sessionStorage.setItem('resume', event.target.getAttribute('data-id'))
    location.href = './resume.html'
  }

  render() {
    return (
      <div className="card w-100 mt-3">
        <div className="card-header theme-dh-title">
          【{this.props.item.degree}】
          {this.props.item.major}
          <span className="float-right">投递日期：{this.props.item.date}</span>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            <a className="theme-dh" data-id={this.props.item.user_uuid} onClick={this.detail}>
              <span className="theme-dh">姓名：</span>
              {this.props.item.name}
            </a>
          </h5>

          <div className="card-text">
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="theme-dh">方向：</span>
                {this.props.item.category}
              </li>
              <li className="list-inline-item">
                <span className="theme-dh">性别：</span>
                {this.props.item.gender}
              </li>
              <li className="list-inline-item">
                <span className="theme-dh">出生日期：</span>
                {this.props.item.birthday}
              </li>
            </ul>

            <ul className="list-inline pull-right">
              <li className="list-inline-item text-secondary"><i className="fa fa-map-marker"></i></li>
              <li className="list-inline-item text-secondary">{this.props.item.city}</li>
              <li className="list-inline-item text-secondary">{this.props.item.district}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
