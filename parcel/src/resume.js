import React from 'react'
import ReactDOM from 'react-dom'

import Tabbar from './component/TabbarCompany'

class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', resume: {}, listEducation: [], listCareer: [] }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: './api/resume/user/' + sessionStorage.getItem('resume'),
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ resume: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常` }))

    axios({
      method: 'get',
      url: './api/resume/' + sessionStorage.getItem('resume') + '/education',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ listEducation: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常` }))

    axios({
      method: 'get',
      url: './api/resume/' + sessionStorage.getItem('resume') + '/career',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ listCareer: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常` }))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            <i className="fa fa-fw fa-address-card-o"></i>
            个人简历
            <hr />
          </h3>
        </div>

        {this.state.message &&
          <div className="col-12">
            <div className="alert alert-danger">
              {this.state.message}
            </div>
          </div>
        }

        <div className="col-12">
          <div className="card w-100 mt-3">
            <div className="card-header theme-dh-title text-center">
              基本信息
            </div>

            <div className="card-body">
              <ul className="list-inline">
                <li className="list-inline-item theme-dh">姓名：</li>
                <li className="list-inline-item">{this.state.resume.name}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item theme-dh">性别：</li>
                <li className="list-inline-item">{this.state.resume.gender}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item theme-dh">出生日期：</li>
                <li className="list-inline-item">{this.state.resume.birthday}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item theme-dh">毕业院校：</li>
                <li className="list-inline-item">{this.state.resume.school}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item theme-dh">专业：</li>
                <li className="list-inline-item">{this.state.resume.major}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item theme-dh">学历：</li>
                <li className="list-inline-item">{this.state.resume.degree}</li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item theme-dh">现住址：</li>
                <li className="list-inline-item">{this.state.resume.province}</li>
                <li className="list-inline-item">{this.state.resume.city}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card w-100 mt-3">
            <div className="card-header theme-dh-title text-center">
              教育经历
            </div>

            <div className="card-body">
              <div className="list-group">
                {this.state.listEducation.map(item =>
                  <li className="list-group-item theme-dh" key={item.id}>
                    {item.school} - {item.major}
                    <br />
                    {item.degree}
                    <span className="pull-right text-secondary">{item.begin} - {item.end}</span>
                  </li>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card w-100 mt-3">
            <div className="card-header theme-dh-title text-center">
              工作经历
            </div>

            <div className="card-body">
              <div className="list-group">
                {this.state.listCareer.map(item =>
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
                  </li>
                )}
              </div>
            </div>
          </div>
        </div>

        <Tabbar active={'resume'} />
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('authCompany'))
if (!!!auth) location.href = './company.login.html'

ReactDOM.render(<Resume auth={auth}/>, document.getElementById('app'))
