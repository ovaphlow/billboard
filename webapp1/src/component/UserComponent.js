import React from 'react'

export class RemoveCareer extends React.Component {
  constructor() {
    super()
    this.submit = this.submit.bind(this)
  }

  submit() {
    fetch(`./api/resume/career/${this.props.uuid}`, {
      method: 'delete'
    })
    .then(() => window.location.reload(true))
  }

  render() {
    return (
      <button type="button" className="btn btn-outline-danger pull-right mt-3" onClick={this.submit}>
        <i className="fa fa-fw fa-remove"></i>
        删除
      </button>
    )
  }
}

export class CareerItem extends React.Component {
  render() {
    return (
      <li className="list-group-item theme-dh">
        {this.props.item.company} - {this.props.item.title}
        <br />
        薪资：
        <i className=" fa fa-fw fa-cny"></i>
        {this.props.item.salary}
        <span className="pull-right text-secondary">{this.props.item.begin} 至 {this.props.item.end}</span>
        <br />

        <p>
          工作内容：
          {this.props.item.duty}
        </p>

        {this.props.mode === 'update' &&
          <RemoveCareer uuid={this.props.item.uuid} />
        }
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
