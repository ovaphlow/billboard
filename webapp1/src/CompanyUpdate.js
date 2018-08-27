import React from 'react'

import Tabbar from './component/TabbarCompany'

export default class CompanyUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {message: '', company: {}, region: {}, auth: {} }
    this.changeProvince = this.changeProvince.bind(this)
    this.changeCity = this.changeCity.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('authCompany'))
    if (!!!auth) {
      window.location.href = './#/company.login'
      return false
    }
    this.setState({ auth: auth })
    document.getElementById('intro').value = auth.intro

    fetch('./region.json')
    .then(res => res.json())
    .then(response => {
      this.setState({ region: response })

      for (let key in response) {
        if (key.substr(2, 4) === '0000') {
          document.getElementById('province').options.add(new Option(response[key], key))
        }
      }
    })
  }

  changeProvince() {
    document.getElementById('city').innerHTML = ''
    document.getElementById('city').options.add(new Option('未选择', ''))
    document.getElementById('district').innerHtml = ''
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
    this.setState({ message: '' })
    fetch('./api/company/' + this.state.auth.uuid, {
      method: 'put',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        province: document.getElementById('province').value,
        city: document.getElementById('city').value,
        district: document.getElementById('district').value,
        address: document.getElementById('address').value,
        intro: document.getElementById('intro').value
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      window.location.href = './#/company.login'
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-12">
          <h3 className="theme-dh">
            编辑企业信息
            <hr />
          </h3>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">

              <div className="alert alert-info">
                <i className="fa fa-fw fa-info"></i>
                修改企业信息后需要重新登录
              </div>

              <div className="form-group">
                <label className="theme-dh">企业名称</label>
                <input type="text" className="form-control" id="name" readOnly defaultValue={this.state.auth.name} />
              </div>

              <div className="form-group">
                <label className="theme-dh">统一社会信用代码/营业执照注册号</label>
                <input type="text" className="form-control" id="licence_type" readOnly defaultValue={this.state.auth.licence_type} />
                <input type="text" className="form-control mt-3" id="licence" readOnly defaultValue={this.state.auth.licence} />
              </div>

              <div className="form-group">
                <label className="theme-dh">联系电话</label>
                <input type="text" className="form-control" id="phone" defaultValue={this.state.auth.phone} />
              </div>

              <div className="form-group">
                <label className="theme-dh">Email</label>
                <input type="text" className="form-control" id="email" defaultValue={this.state.auth.email} />
              </div>

              <div className="form-group">
                <label className="theme-dh">地址</label>
                <select className="form-control" id="province" defaultValue={this.state.auth.province} onChange={this.changeProvince}>
                  <option value={this.state.auth.province}>{this.state.auth.province}</option>
                </select>
                <select className="form-control mt-3" id="city" defaultValue={this.state.auth.city} onChange={this.changeCity}>
                  <option value={this.state.auth.city}>{this.state.auth.city}</option>
                </select>
                <select className="form-control mt-3" id="district" defaultValue={this.state.auth.district}>
                  <option value={this.state.auth.district}>{this.state.auth.district}</option>
                </select>
                <input type="text" className="form-control mt-3" id="address" defaultValue={this.state.auth.address} />
              </div>

              <div className="form-group">
                <label className="theme-dh">简介</label>
                <textarea rows="3" className="form-control" id="intro"></textarea>
              </div>

              {this.state.message &&
                <div className="alert alert-danger">
                  {this.state.message}
                </div>
              }

              <button type="button" className="btn btn-info btn-block btn-lg" onClick={this.submit}>
                <i className="fa fa-fw fa-check-square-o"></i>
                确定
              </button>

              <br />

              <div className="text-center">
                <a href="./#/company">
                  <i className="fa fa-fw fa-arrow-left"></i>
                  返回
                </a>
              </div>
            </div>
          </div>
        </div>

        <Tabbar />
      </div>
    )
  }
}
