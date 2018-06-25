import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(<Navbar/>, document.getElementById('navbar'))

class Resume extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '', resume: {} }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: './api/resume/' + urlParameter('uuid'),
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        this.setState({ resume: response.data.content })
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 mt-3">
          <p className="lead">个人简历<hr/></p>
        </div>

        {this.state.message && <div className="col-12">
          <div className="alert alert-danger">
            {this.state.message}
          </div>
        </div>}

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h5>{this.state.resume.name}</h5>
              </div>

              <p>
                <span className="text-secondary">姓名：</span> {this.state.resume.name}<br/>
                <span className="text-secondary">性别：</span> {this.state.resume.gender}<br/>
                <span className="text-secondary">出生日期：</span> {this.state.resume.birthday}<br/>
                <span className="text-secondary">所在地：</span> {this.state.resume.province} {this.state.resume.city}<br/>
                <span className="text-secondary">Email：</span> {this.state.resume.email}<br/>
                <span className="text-secondary">联系电话：</span> {this.state.resume.phone}<br/>
                <span className="text-secondary">简历更新时间：</span> {this.state.resume.date}<br/>
              </p>

              <div classMame="col-12 mt-3">
                <span className="text-secondary">教育经历</span>

                <ul className="list-group">
                  <li className="list-group-item">123</li>
                </ul>
              </div>

              <div className="col-12"><br/></div>

              <div classMame="col-12">
                <span className="text-secondary">工作经历</span>

                <ul className="list-group">
                  <li className="list-group-item">123</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Resume/>, document.getElementById('app'))