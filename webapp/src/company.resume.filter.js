import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
)

class CompanySearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '', resumeList: [] }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({ message: '' })

    axios({
      method: 'post',
      url: './api/resume/filter',
      data: {
        category: document.getElementById('category').value,
        degree: document.getElementById('degree').value,
        major: document.getElementById('major').value
      },
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      if (response.data.content.length === 0) {
        this.setState({ message: '未找到相符的简历' })
        return false
      }

      this.setState({ resumeList: response.data.content })
    })
  }

  render() {
	  const word={
		color: '#17a2b8',
	  }
    return (
      <div className="card mt-3">
        <div className="card-body">
          <div className="card-title" style={word}>
            <i class="fa fa-search" aria-hidden="true"></i>&nbsp;搜索简历<hr/>
          </div>

          <div className="form-group">
            <select className="form-control" id="category">
              <option value="">任职方向</option>
              <option value="产品技术">产品/技术</option>
              <option value="金融保险">金融/保险</option>
              <option value="销售市场">销售/市场</option>
              <option value="生产制造">生产/制造</option>
              <option value="地产建筑">地产/建筑</option>
              <option value="职能其它">职能/其它</option>
            </select>
          </div>

          <div className="form-group">
            <select className="form-control" id="degree">
              <option value="">学历</option>
              <option value="大专及以下">大专及以下</option>
              <option value="大学本科">大学本科</option>
              <option value="硕士">硕士</option>
              <option value="博士">博士</option>
            </select>
          </div>

          <div className="form-group">
            <input type="text" className="form-control" id="major" placeholder="专业"/>
          </div>

          <div className="form-group">
            <button type="button" className="btn btn-block btn-outline-info" onClick={this.submit}>
              <i className="fa fa-fw fa-search"></i> 搜索
            </button>
            <hr/>
			  <a href="./company.index.html" className="btn btn-outline-info btn-block">
                  <i className="fa fa-fw fa-arrow-left"></i> 返回
                </a>
          </div>

          {this.state.message && <div className="alert alert-warning">
            {this.state.message}
          </div>}

          {this.state.resumeList.map(item => <div className="card w-100 mt-3">
            <div className="card-header" style={word}>
              <h5>求职意向：{item.category}</h5>
            </div>
            <div className="card-body">
              <h6 style={word}>姓名：{item.name}</h6>

              <ul class="list-inline">
                <li className="list-inline-item"><span style={word}>性别：</span>{item.gender}</li>
                <li className="list-inline-item"><span style={word}>出生日期：</span>{item.birthday}</li>
                <li className="list-inline-item"><span style={word}>学历：</span>{item.degree}</li>
                <li className="list-inline-item"><span style={word}>专业：</span>{item.major}</li>
              </ul>

              <h6 className="text-info">
                <i className="fa fa-eye"></i> {item.views}
                <a href={'./resume.html?uuid=' + item.uuid} className="btn btn-sm btn-outline-info pull-right">
                  查看详情
                </a>
              </h6>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <CompanySearch />, document.getElementById('app')
)