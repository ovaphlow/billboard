import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)

class CompanyUpdate extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '', company: {} }
    this.changeProvince = this.changeProvince.bind(this)
    this.changeCity = this.changeCity.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    this.setState({ company: this.props.auth })
    axios({
      method: 'GET',
      url: './assets/data/region.json',
      responseType: 'json'
    }).then(response => {
      this.setState({ region: response.data })
      for (let key in response.data) {
        if (key.substr(2, 4) === '0000') {
          document.getElementById('province').options.add(new Option(response.data[key], key))
        }
      }
    })
  }

  changeProvince() {
    document.getElementById('city').innerHTML = ''
    document.getElementById('city').options.add(new Option('未选择', ''))
    document.getElementById('district').innerHTML = ''
    document.getElementById('district').options.add(new Option('未选择', ''))

    for (let key in this.state.region) {
      if (key.substr(0, 2) === document.getElementById('province').value.substr(0, 2) && key.substr(2, 4) !== '0000') {
        if (document.getElementById('province').options[document.getElementById('province').options.selectedIndex].text.indexOf('市') !== -1) {
          document.getElementById('city').options.add(new Option(this.state.region[key], key))
        } else {
          if (key.substr(4, 2) === '00') {
            document.getElementById('city').options.add(new Option(this.state.region[key], key))
          }
        }
      }
    }
  }

  changeCity() {
    document.getElementById('district').innerHTML = ''
    document.getElementById('district').options.add(new Option('未选择', ''))

    if (document.getElementById('province').options[document.getElementById('province').options.selectedIndex].text.indexOf('市') !== -1) {
      return false
    }

    for (let key in this.state.region) {
      if (key.substr(0, 4) === document.getElementById('city').value.substr(0, 4) && key.substr(4, 2) !== '00') {
        document.getElementById('district').options.add(new Option(this.state.region[key], key))
      }
    }
  }

  submit() {
    axios({
      method: 'put',
      url: './api/company/' + this.props.auth.uuid,
      data: {
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        province: document.getElementById('province').options[document.getElementById('province').options.selectedIndex].text,
        city: document.getElementById('city').options[document.getElementById('city').options.selectedIndex].text,
        district: document.getElementById('district').options[document.getElementById('district').options.selectedIndex].text,
        address: document.getElementById('address').value,
        intro: document.getElementById('intro').value
      },
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        location.href = './company.login.html'
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <p className="lead">编辑公司信息<hr/></p>
        </div>

        {this.state.message &&<div className="col-12">
          <div className="alert alert-danger">
            {this.state.message}
          </div>
        </div>}

        <div className="col-12">
          <div className="card">
            <div class="card-body">
              <div className="form-group">
                <label>公司名称</label>
                <input type="text" defaultValue={this.state.company.name} readOnly id="name" className="form-control"/>
              </div>

              <div className="form-group">
                <label>统一社会信用代码/营业执照注册号</label>
                <input type="text" defaultValue={this.state.company.licence_type} readOnly className="form-control" id="licence_type"/>
                <input type="text" defaultValue={this.state.company.licence} readOnly className="form-control mt-3" id="licence"/>
              </div>

              <div className="form-group">
                <label>联系电话</label>
                <input type="text" className="form-control" id="phone" defaultValue={this.state.company.phone}/>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="text" id="email" className="form-control" defaultValue={this.state.company.email}/>
              </div>

              <div className="form-group">
                <label>公司地址</label>
                <select id="province" className="form-control" defaultValue={this.state.company.province} onChange={this.changeProvince}>
                  <option value="">未选择</option>
                </select>
                <select id="city" className="form-control mt-3" defaultValue={this.state.company.city} onChange={this.changeCity}>
                  <option value="">未选择</option>
                </select>
                <select id="district" className="form-control mt-3" defaultValue={this.state.company.district}>
                  <option value="">未选择</option>
                </select>
                <input type="text" defaultValue={this.state.company.address} className="form-control mt-3" id="address"/>
              </div>

              <div className="form-group">
                <label>公司简介</label>
                <textarea rows="3" className="form-control" id="intro" defaultValue={this.state.company.intro}/>
              </div>

              <div className="col-12">
                <br/>
                <button type="button" className="btn btn-primary btn-block" onClick={this.submit}>
                  <i className="fa fa-fw fa-check-square-o"></i> 确定
                </button>
                <a href="./company.index.html" className="btn btn-outline-secondary btn-block">
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

let auth = JSON.parse(sessionStorage.getItem('auth'))
ReactDOM.render(<CompanyUpdate auth={auth}/>, document.getElementById('app'))