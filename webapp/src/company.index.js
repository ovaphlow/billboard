import React from 'react'
import ReactDOM from 'react-dom'

//import Navbar from './component/navbar'

//ReactDOM.render(
 // <Navbar/>,
 // document.getElementById('navbar')
//)

class CompanyIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '', company: {} }
  }

  componentDidMount() {
    let company = JSON.parse(sessionStorage.getItem('authCompany')) || {
      name: '获取信息失败',
      phone: '获取信息失败',
      email: '获取信息失败',
      province: '获取信息失败',
      city: '获取信息失败',
      district: '获取信息失败',
    }
    this.setState({ company: company })
  }

  render() {
	   const word={
		color: '#17a2b8',
	  }
    return (
      <div className="row">
        <div className="col-12">
          <h4 style={word}>{this.state.company.name}</h4>
          <hr/>
        </div>

        <div className="col-12">
          <i className="fa fa-fw fa-phone" style={word}></i> <span style={word}>电　　话：</span>
          {this.state.company.phone}
        </div>

        <div className="col-12">
          <i className="fa fa-fw fa-envelope" style={word}></i> <span style={word}>电子邮箱：</span>
          {this.state.company.email}
        </div>

        <div className="col-12">
          <ul className="list-inline">
			<li className="list-inline-item" style={word}><i class="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;地　　址：</li>
            <li className="list-inline-item">{this.state.company.province}</li>
            <li className="list-inline-item">{this.state.company.city}</li>
            <li className="list-inline-item">{this.state.company.district}</li>
            <li className="list-inline-item">{this.state.company.address}</li>
          </ul>
        </div>

        <div className="col-12">
          <p>{this.state.company.intro}</p>
        </div>

        <div className="col-12">
          <a href="company.update.html" className="btn btn-outline-info btn-block btn-sm">编辑公司信息</a>
          <hr/>
        </div>

        <div className="col-12">
          <div className="list-group">
            <a href="./company.job.list.html" className="list-group-item list-group-item-action" style={word}>
              <i className="fa fa-fw fa-calendar-o"></i> 发布的职位
              <span className="pull-right"><i className="fa fa-fw fa-angle-right"></i></span>
            </a>

            <a href="./company.resume.list.html" className="list-group-item list-group-item-action" style={word}>
              <i className="fa fa-fw fa-address-book-o"></i> 收到的简历
              <span className="pull-right"><i className="fa fa-fw fa-angle-right"></i></span>
            </a>

            <a href="./company.resume.filter.html" className="list-group-item list-group-item-action" style={word}>
              <i className="fa fa-fw fa-search"></i> 搜索简历
              <span className="pull-right"><i className="fa fa-fw fa-angle-right"></i></span>
            </a>
          </div>
        </div>

        <div className="col-12">
          <hr/>
          <a href="./company.login.html" className="btn btn-outline-info btn-block btn-sm">
            <i className="fa fa-fw fa-sign-out"></i> 退出登录
          </a>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <CompanyIndex/>,
  document.getElementById('app')
)