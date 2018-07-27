import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(<Navbar/>, document.getElementById('navbar'))

class Resume extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '', resume: {}, educationList: [], workList: [] }
    this.back = this.back.bind(this)
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

    axios({
      method: 'get',
      url: './api/resume/' + urlParameter('uuid') + '/education',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      if (response.data.content.length > 0) {
        this.setState({ educationList: response.data.content })
      }
    })

    axios({
      method: 'get',
      url: './api/resume/' + urlParameter('uuid') + '/career',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      if (response.data.content.length > 0) {
        this.setState({ workList: response.data.content })
      }
    })

    setTimeout(() => {
      axios({
        method: 'post',
        url: './api/resume/' + urlParameter('uuid') + '/views',
        responseType: 'json'
      })
    }, 3000)
  }

  back() {
    window.history.go(-1)
  }

  render() {
	  const word={
		color: '#17a2b8',
	  }
    return (
      <div className="row">
        <div className="col-12 mt-3">
          <p className="lead" style={word}>个人简历<hr/></p>
        </div>

        {this.state.message && <div className="col-12">
          <div className="alert alert-warning">
            {this.state.message}
          </div>
        </div>}

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h5 style={word}>{this.state.resume.name}</h5>
              </div>

              <p>
                <span className="text-info">姓名：</span> {this.state.resume.name}<br/>
                <span className="text-info">性别：</span> {this.state.resume.gender}<br/>
                <span className="text-info">出生日期：</span> {this.state.resume.birthday}<br/>
                <span className="text-info">所在地：</span> {this.state.resume.province} {this.state.resume.city}<br/>
                <span className="text-info">Email：</span> {this.state.resume.email}<br/>
                <span className="text-info">联系电话：</span> {this.state.resume.phone}<br/>
                <span className="text-info">简历更新时间：</span> {this.state.resume.date}<br/>
              </p>

              <div classMame="col-12 mt-3">
                <span className="text-info">教育经历</span>

                <ul className="list-group">
                  {this.state.educationList.map(item => <li className="list-group-item">
                    <ul className="list-inline">
                      <li className="list-inline-item">{item.school}</li>
                      <li className="list-inline-item">{item.major}</li>
                      <li className="list-inline-item">{item.degree}</li>
                      <li className="list-inline-item text-secondary">{item.begin} - {item.end}</li>
                    </ul>
                  </li>)}
                </ul>
              </div>

              <div className="col-12"><br/></div>

              <div classMame="col-12">
                <span className="text-info">工作经历</span>

                <ul className="list-group">
                  {this.state.workList.map(item => <li className="list-group-item">
                    <ul className="list-inline">
                      <li className="list-inline-item">{item.company}</li>
                      <li className="list-inline-item text-secondary">{item.begin} - {item.end}</li>
                      <li className="list-inline-item">{item.title}</li>
                      <li className="list-inline-item">{item.salary}</li>
                      <li className="list-inline-item">{item.duty}</li>
                    </ul>
                  </li>)}
                </ul>
              </div>

              <div className="col-12"><br/></div>

              <div className="col-12">
                <button className="btn btn-block btn-lg btn-outline-info" onClick={this.back}>
                  <i className="fa fa-fw fa-arrow-left"></i> 返回
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Resume/>, document.getElementById('app'))