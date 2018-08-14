import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'

class UserResume extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', resume: {} }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: './api/resume/user/'+ this.props.auth.uuid,
      responseType:'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ resume: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="contrainer-fluid">
          <div className="col-12">
            <h3 className="text-center" style={{ color: '#17a2b8' }}>我的简历</h3>
            <hr />

            {this.state.resume.uuid &&
              <a href="./user.resume.update.html" className="btn btn-outline-info btn-sm pull-right">
                <i className="fa fa-fw fa-edit"></i>
                编辑简历
              </a>
            }

            {!!!this.state.resume.uuid &&
              <a href="./user.resume.save.html" className="btn btn-outline-info btn-sm pull-right">
                <i className="fa fa-fw fa-edit"></i>
                填写简历
              </a>
            }
          </div>

          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-warning">
                {this.state.message}
              </div>
            </div>
          }

          <div className="form-group col-12">
            <label style={{ color: '#17a2b8' }}>姓名</label>
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.name} />
          </div>

          <div className="form-group col-12">
            <label style={{ color: '#17a2b8' }}>性别</label>
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.gender} />
          </div>

          <div className="form-group col-12">
            <label style={{ color: '#17a2b8' }}>出生日期</label>
            <input type="date" className="form-control" readOnly defaultValue={this.state.resume.birthday} />
          </div>

          <div className="col-12 form-group">
            <label style={{ color: '#17a2b8' }}>学历</label>
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.degree} />
          </div>

          <div className="col-12 form-group">
            <label style={{ color: '#17a2b8' }}>专业</label>
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.major} />
          </div>

          <div className="col-12 form-group">
            <label style={{ color: '#17a2b8' }}>求职方向</label>
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.category} />
          </div>

          <div className="form-group col-12">
            <label style={{color: '#17a2b8'}}>手机号码</label>
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.phone} />
          </div>

          <div className="form-group col-12">
            <label style={{color: '#17a2b8'}}>Email</label>
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.email} />
          </div>

          <div className="col-12">
            <label style={{color: '#17a2b8'}}>现居住地址</label>
          </div>

          <div className="form-group col-12">
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.province} />
          </div>

          <div className="form-group col-12">
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.city} />
          </div>

          <div className="col-12">
            <label style={{color: '#17a2b8'}}>教育经历</label>
            <ul className="list-group">
              <a href={'./resume.exp-education.html?uuid=' + this.state.resume.uuid} className="list-group-item list-group-item-action" style={{height: '45px'}}>
                编辑教育经历
                <span className="pull-right text-secondary">
                  <i className="fa fa-fw fa-angle-right"></i>
                </span>
              </a>
            </ul>
          </div>

          <div className="col-12">
            <br />
            <label style={{color: '#17a2b8'}}>工作经历</label>
            <ul className="list-group">
              <a href={'./resume.exp-work.html?uuid=' + this.state.resume.uuid} className="list-group-item list-group-item-action" style={{height: '45px'}}>
                编辑工作经历
                <span className="pull-right text-secondary ">
                  <i className="fa fa-fw fa-angle-right " aria-hidden="true "></i>
                </span>
              </a>
            </ul>
          </div>

          <div className="col-12">
            <br />
            <a href="./user.html " className="btn btn-outline-info btn-block">
              <i className="fa fa-fw fa-arrow-left "></i> 返回
            </a>
          </div>
        </div>
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('auth'))
if (!!!auth) {
  location.href = './login.html'
}

ReactDOM.render(<UserResume auth={auth} />, document.getElementById('app'))