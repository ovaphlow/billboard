import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar.User'
import JobItem from './component/JobItem'
import TabbarBottom from './component/TabbarUser'

import Banner3 from './image/banner3.jpg'
import Banner4 from './image/banner4.jpg'
import Banner6 from './image/banner6.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', list: [] }
    this.filter = this.filter.bind(this)
    this.detail = this.detail.bind(this)
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: './api/job/',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ list: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  detail(event) {
    sessionStorage.setItem('job', event.target.getAttribute('data-id'))
    location.href = './job.html'
  }

  filter() {
    if (document.getElementById('category').value === '') {
      location.reload(true)
      return false
    }
    axios({
      method: 'get',
      url: './api/job/category/' + document.getElementById('category').value,
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ list: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}

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
          {this.state.message &&
            <div className="col-12">
              <div className="alert alert-danger">
                {this.state.message}
              </div>
            </div>
          }

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

        <TabbarBottom active={'job'} />
      </div>
    )
  }
}
        
ReactDOM.render(<Index />, document.getElementById('app'))