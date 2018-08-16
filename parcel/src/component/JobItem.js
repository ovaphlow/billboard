import React from 'react'

export default class JobItem extends React.Component {
  constructor(props) {
    super(props)
    this.detail = this.detail.bind(this)
  }

  detail(event) {
    sessionStorage.setItem('job', event.target.getAttribute('data-id'))
    location.href = './job.html'
  }

  render() {
    return (
      <div className="card w-100 mt-3">
        <div className="card-header theme-dh-title">
          <i className="fa fa-fw fa-university"></i> {this.props.item.name}
          <span className="text-muted float-right">{this.props.item.date}</span>
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
            <div className="btn-group pull-right">
              <button type="button" className="btn btn-info" onClick={this.resume}>
                查看收到的简历
              </button>
            </div>
          </div>
        }
      </div>
    )
  }
}
