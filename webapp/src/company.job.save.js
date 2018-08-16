import React from 'react'
import ReactDOM from 'react-dom'

/*import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)*/

class CompanyJobSave extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '' }
    this.submit = this.submit.bind(this)
  }

  submit() {
    axios({
      method: 'post',
      url: './api/company/' + this.props.auth.uuid + '/job/',
      data: {
        category: document.getElementById('category').value,
        title: document.getElementById('title').value,
        requirement: document.getElementById('requirement').value,
        duty: document.getElementById('duty').value,
        content: document.getElementById('content').value
      },
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        location.href = './company.job.list.html'
      }
    })
  }

  render() {
	  const word={
		color: '#17a2b8',
	  }
    return (
      <div className="row">
        <div className="col-12">
          <p className="lead" style={word}><i className="fa fa-fw fa-plus"></i> 发布新职位<hr/></p>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {this.state.message && <div className="col-12">
                <div className="alert alert-warning">{this.state.message}</div>
              </div>}

              <div className="form-group">
                <label style={word}>类别</label>
                <select className="form-control" id="category">
                  <option value="">未分类</option>
                  <option value="产品技术">产品/技术</option>
                  <option value="金融保险">金融/保险</option>
                  <option value="销售市场">销售/市场</option>
                  <option value="生产制造">生产/制造</option>
                  <option value="地产建筑">地产/建筑</option>
                  <option value="职能其它">职能/其它</option>
                </select>
              </div>

              <div className="form-group">
                <label style={word}>标题</label>
                <input type="text" className="form-control" id="title"/>
              </div>

              <div className="form-group">
                <label style={word}>任职要求</label>
                <textarea rows="3" className="form-control" id="requirement"/>
              </div>

              <div className="form-group">
                <label style={word}>岗位责任</label>
                <textarea rows="3" className="form-control" id="duty"/>
              </div>

              <div className="form-group">
                <label style={word}>详细内容</label>
                <textarea rows="3" className="form-control" id="content"/>
              </div>

              <div className="col-12">
                <button type="button" className="btn btn-info btn-block" onClick={this.submit}>
                  <i className="fa fa-fw fa-check-square-o"></i> 确定
                </button>

                <a href="./company.job.list.html" className="btn btn-outline-info btn-block btn-sm">
                  <i className="fa fa-fw fa-arrow-left"></i> 返回
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let auth = JSON.parse(sessionStorage.getItem('authCompany'))
if (!!!auth) location.href = './company.login.html'

ReactDOM.render(<CompanyJobSave auth={auth}/>, document.getElementById('app'))