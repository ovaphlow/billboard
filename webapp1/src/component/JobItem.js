import React from 'react'

export default class JobItem extends React.Component {
  constructor(props) {
    super(props)
    this.detail = this.detail.bind(this)
    this.remove = this.remove.bind(this)
  }

  remove(event) {
    fetch('./api/job/' + event.target.getAttribute('data-id'), {
      method: 'delete'
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      window.location.reload(true)
    })
  }

  detail(event) {
    sessionStorage.setItem('job', event.target.getAttribute('data-id'))
    window.location.href = './#/company.job'
  }

  render() {
    return (
      <div className="card w-100 mt-3">
        <div className="card-header theme-dh-title">
          <i className="fa fa-fw fa-university"></i> {this.props.item.name}
          <span className="float-right">{this.props.item.date}</span>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            <a className="theme-dh" data-id={this.props.item.uuid} onClick={this.detail}>{this.props.item.title}</a>
          </h5>

          <div className="card-text">
            {this.props.item.requirement}
            <ul className="list-inline pull-left">

            </ul>
            <ul className="list-inline pull-right">
              <li className="list-inline-item text-secondary"><i className="fa fa-briefcase"></i></li>
              <li className="list-inline-item text-secondary">{this.props.item.city}</li>
              <li className="list-inline-item text-secondary">{this.props.item.district}</li>
            </ul>
          </div>
        </div>

        {this.props.company &&
          <div className="card-footer">
            <button type="button" data-id={this.props.item.uuid} className="btn btn-danger" onClick={this.remove}>
              <i className="fa fa-fw fa-remove"></i>
              删除
            </button>
            <div className="btn-group pull-right">
              <button type="button" data-id={this.props.item.uuid} className="btn btn-info" onClick={this.detail}>
                查看详情
              </button>
            </div>
          </div>
        }
      </div>
    )
  }
}
