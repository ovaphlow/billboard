import React from 'react'

import JobItem from './component/JobItem'
import Tabbar from './component/TabbarUser'
import { CategorySelect } from './component/Common'

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
    fetch('./api/job/')
    .then(res => res.json())
    .then(response => this.setState({ list: response.content }))
  }

  detail(event) {
    sessionStorage.setItem('job', event.target.getAttribute('data-id'))
    window.location.href = './#/job'
  }

  filter() {
    if (document.getElementById('component.category-select').value === '') {
      window.location.reload(true)
      return false
    }
    fetch('./api/job/category/' + document.getElementById('component.category-select').value)
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
            <CategorySelect />
            <button type="button" className="btn btn-block btn-outline-info" onClick={this.filter}>
              <i className="fa fa-fw fa-search"></i>
              搜索
            </button>
          </div>

          {this.state.list.map(item =>
            <JobItem key={item.uuid} item={item} />
          )}
        </div>

        <Tabbar active="job" />
      </div>
    )
  }
}
