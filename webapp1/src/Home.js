import React from 'react'

import JobItem from './component/JobItem'
import TabbarBottom from './component/TabbarUser'

import Banner3 from './media/banner3.jpg'
import Banner4 from './media/banner4.jpg'
import Banner6 from './media/banner6.jpg'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }
    this.filter = this.filter.bind(this)
    this.detail = this.detail.bind(this)
  }

  componentDidMount() {
    fetch('./api/job/', {
      method: 'get',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    })
    .then(res => res.json())
    .then(response => this.setState({ list: response.content }))
  }

  detail(event) {
    sessionStorage.setItem('job', event.target.getAttribute('data-id'))
    window.location.href = './#/job'
  }

  filter() {
    if (document.getElementById('category').value === '') {
      window.location.reload(true)
      return false
    }
    fetch('./api/job/category/' + document.getElementById('category').value, {
      method: 'get',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    })
    .then(res => res.json())
    .then(response => this.setState({ list: response.content }))
  }

  render() {
    return (
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Banner3} alt="宣传图" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Banner4} alt="宣传图" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Banner6} alt="宣传图" />
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>

          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="container-fluid">
          <div className="col-12"><br /></div>

          <div className="col-12">
            <div className="form-group">
              <select className="form-control" id="category" onChange={this.filter}>
                <option value="">不限类别</option>
                <option value="产品技术">产品/技术</option>
                <option value="金融保险">金融/保险</option>
                <option value="销售市场">销售/市场</option>
                <option value="生产制造">生产/制造</option>
                <option value="地产建筑">地产/建筑</option>
                <option value="职能其它">职能/其它</option>
              </select>
            </div>
          </div>

          {this.state.list.map(item =>
            <JobItem key={item.uuid} item={item} />
          )}
        </div>

        <TabbarBottom active="job" />
      </div>
    )
  }
}
