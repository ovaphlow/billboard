import React from 'react'

export default class UserResumeMod extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', resume: {}, region: {} }
    this.changeProvince = this.changeProvince.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    fetch('./region.json', {
      method: 'get'
    })
    .then(res => res.json())
    .then(response => console.info(response))
    fetch('./api/resume/user/' + this.props.auth.uuid, {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setState({ message: response.message })
        return false
      }
      this.setState({ resume: response.content })
      if (!!!this.props.read) {
        document.getElementById('category').value = response.content.category
        document.getElementById('province').options.add(new Option(response.content.province, response.content.province))
        document.getElementById('city').options.add(new Option(response.content.city, response.content.city))
        for (let key in this.state.region) {
          if (key.substr(2, 4) === '0000') {
            document.getElementById('province').options.add(new Option(this.region[key], key))
          }
        }
      }
    })
  }

  changeProvince() {
    document.getElementById('city').innerHTML = ''
    document.getElementById('city').options.add(new Option('未选择', ''))

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

  submit() {
    fetch('./api/resume/user/' + this.props.auth.uuid, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        category: document.getElementById('category').value,
        name: document.getElementById('name').value,
        gender: document.getElementById('gender').value,
        birthday: document.getElementById('birthday').value,
        degree: document.getElementById('degree').value,
        major: document.getElementById('major').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        province: document.getElementById('province').options[document.getElementById('province').options.selectedIndex].text,
        city: document.getElementById('city').options[document.getElementById('city').options.selectedIndex].text,
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        this.setStaet({ message: response.message })
        return false
      }
      window.location.href = './#/user.resume'
    }).catch(err => this.setState({ message: '服务器通信异常' }))
  }

  render() {
    return (
      <div>
        {this.state.message &&
          <div className="col-12">
            <div className="alert alert-danger">{this.state.message}</div>
          </div>
        }

        <div className="col-12">
          <div className="form-group">
            <label className="theme-dh">姓名</label>
            <input type="text" className="form-control" id="name" readOnly={this.props.read ? true : false} defaultValue={this.state.resume.name} />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label className="theme-dh">性别</label>
            <input type="text" className="form-control" id="gender" readOnly={this.props.read ? true : false} defaultValue={this.state.resume.gender} />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label className="theme-dh">出生日期</label>
            <input type="date" className="form-control" id="birthday" readOnly={this.props.read ? true : false} defaultValue={this.state.resume.birthday} />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label className="theme-dh">学历</label>
            <input type="text" className="form-control" id="degree" readOnly={this.props.read ? true : false} defaultValue={this.state.resume.degree} />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label className="theme-dh">专业</label>
            <input type="text" className="form-control" id="major" readOnly={this.props.read ? true : false} defaultValue={this.state.resume.major} />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label className="theme-dh">求职方向</label>
            {this.props.read &&
              <input type="text" className="form-control" readOnly defaultValue={this.state.resume.category} />
            }
            {!!!this.props.read &&
              <select className="form-control" id="category">
                <option value="">不限类别</option>
                <option value="产品技术">产品/技术</option>
                <option value="金融保险">金融/保险</option>
                <option value="销售市场">销售/市场</option>
                <option value="生产制造">生产/制造</option>
                <option value="地产建筑">地产/建筑</option>
                <option value="职能其它">职能/其它</option>
              </select>
            }
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label className="theme-dh">手机号码</label>
            <input type="text" className="form-control" id="phone" readOnly={this.props.read ? true : false} defaultValue={this.state.resume.phone} />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label className="theme-dh">Email</label>
            <input type="text" className="form-control" id="email" readOnly={this.props.read ? true : false} defaultValue={this.state.resume.email} />
          </div>
        </div>

        <div className="col-12">
          <label className="theme-dh">现居住地址</label>
          {this.props.read &&
            <input type="text" className="form-control" readOnly defaultValue={this.state.resume.province} />
          }
          {!!!this.props.read &&
            <select className="form-control" id="province" onChange={this.changeProvince}></select>
          }
          {this.props.read &&
            <input type="text" className="form-control mt-3" readOnly defaultValue={this.state.resume.city} />
          }
          {!!!this.props.read &&
            <select className="form-control mt-3" id="city"></select>
          }
        </div>

        {!!!this.props.read &&
          <div className="col-12 mt-3">
            <button type="button" className="btn btn-primary btn-block" onClick={this.submit}>
              <i className="fa fa-fw fa-check-square-o"></i>
              确定
            </button>
          </div>
        }

        <br />
        <br />
      </div>
    )
  }
}
