import React from 'react'

export class CareerItem extends React.Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
  }

  remove() {}

  render() {
    return (
      <li className="list-group-item theme-dh" key={item.id}>
        {item.company} - {item.title}
        <br />
        薪资：
        <i className=" fa fa-fw fa-cny"></i>
        {item.salary}
        <span className="pull-right text-secondary">{item.begin} 至 {item.end}</span>
        <br />

        <p>
          工作内容：
          {item.duty}
        </p>

        <button type="button" className="btn btn-sm btn-outline-warning pull-right mt-3" data-id={item.uuid} onClick={this.remove}>
          <i className="fa fa-fw fa-remove"></i>
          删除
        </button>
      </li>
    )
  }
}

export class EducationItem extends React.Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
  }

  remove() {
    fetch('./api/resume/education/' + this.props.item.uuid, {
      method: 'delete',
    })
    .then(res => res.json())
    .then(response => window.location.reload(true))
  }

  render() {
    return (
      <li className="list-group-item theme-dh">
        <ul className="list-inline">
          <li className="list-inline-item">
            <i className="fa fa-fw fa-graduation-cap"></i>
            {this.props.item.degree}
          </li>
          <li className="list-inline-item">
            <i className="fa fa-fw fa-university"></i>
            {this.props.item.school}
          </li>
          <li className="list-inline-item">
            {this.props.item.major}
          </li>
        </ul>
        <br />
        <ul className="list-inline">
          <li className="list-inline-item">起止日期</li>
          <li className="list-inline-item">{this.props.item.begin}</li>
          <li className="list-inline-item">{this.props.item.end}</li>
        </ul>

        {this.props.mode === 'update' &&
          <button type="button" className="btn btn-sm btn-outline-warning pull-right mt-3" onClick={this.remove}>
            <i className="fa fa-fw fa-remove"></i>
            删除
          </button>
        }
      </li>
    )
  }
}
