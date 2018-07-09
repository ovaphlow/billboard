import React from 'react'

export default class ResumeItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href={'./resume.html?uuid=' + this.props.item.uuid} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.item.name}</h5>
          <small>{this.props.item.date}</small>
        </div>

        <ul className="list-inline">
          <li className="list-inline-item"><span className="text-secondary">性别：</span>{this.props.item.gender}</li>
          <li className="list-inline-item"><span className="text-secondary">出生日期：</span>{this.props.item.birthday}</li>
        </ul>

        <small className="text-muted"></small>
      </a>
    )
  }
}