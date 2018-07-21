import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'
ReactDOM.render(<Navbar/>, document.getElementById('navbar'))

class PostSave extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    if (!!!auth) {
      location.href = './login.html'
      return false
    }

    document.getElementById('editor').value = auth.name
  }

  submit() {
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3>创建新闻</h3>
          <hr/>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label>标题</label>
            <input type="text" id="title" className="form-control"/>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label>招聘单位</label>
            <input type="text" id="company" className="form-control"/>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label>岗位责任</label>
            <textarea rows="3" id="dity" className="form-control"></textarea>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label>任职要求</label>
            <textarea rows="3" id="requirement" className="form-control"></textarea>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label>地址</label>
            <input type="text" id="address" className="form-control"/>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label>联系电话</label>
            <input type="text" id="phone" className="form-control"/>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label>编辑</label>
            <input type="text" id="editor" className="form-control" readOnly="true"/>
          </div>
        </div>

        <div className="col-12">
          <button type="button" id="submit" className="btn btn-primary btn-block" onClick={this.submit}>
            <i className="fa fa-fw fa-check-square-o"></i> 确定
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<PostSave/>, document.getElementById('app'))