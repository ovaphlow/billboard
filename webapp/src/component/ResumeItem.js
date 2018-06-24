import React from 'react'

export default class ResumeItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">姓名</h5>
          <small>投递时间</small>
        </div>

        <p className="mb-1">内容?</p>

        <small className="text-muted">简历刷新时间</small>
      </a>
    )
  }
}