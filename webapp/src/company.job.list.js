import React from 'react'
import ReactDOM from 'react-dom'

/*import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)*/

class Job extends React.Component {
  constructor(props) {
    super(props)

    this.state = { item: {} }
  }

  componentDidMount() {
    this.setState({ item: this.props.item })
  }

  render() {
    return (
      <a href={'./company.job.html?uuid=' + this.state.item.uuid} className="list-group-item list-group-item-action">
        {this.state.item.title}
        <span className="pull-right">
          <i className="fa fa-fw fa-angle-right"></i>
        </span>
      </a>
    )
  }
}

class CompanyJobList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { jobList: [] }
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('authCompany'))

    axios({
      method: 'get',
      url: './api/company/' + auth.uuid + '/job/',
      reponseType: 'json'
    }).then(response => {
      this.setState({ jobList: response.data.content })
    })
  }

  render() {
	  const word={
		color: '#17a2b8',
	  }
    return (
      <div className="row">
        <div className="col-12">
          <p className="lead" style={word}>发布的职位<hr/></p>
        </div>

        <div className="col-12">
          <div className="btn-group pull-right">
            <a href="./company.job.save.html" className="btn btn-outline-info btn-sm">
              <i className="fa fa-fw fa-plus"></i> 添加新职位
            </a>
          </div>
        </div>

        <div className="col-12">
          <br/>
        </div>

        <div className="col-12">
          <div className="list-group">
          {this.state.jobList.map(item =>
            <Job item={item} key={item.id}/>
          )}
          </div>
			<hr/>
			<a href="./company.index.html" className="btn btn-outline-info btn-block">
                  <i className="fa fa-fw fa-arrow-left"></i> 返回
            </a>
        </div>
			  
      </div>
    )
  }
}

ReactDOM.render(<CompanyJobList/>, document.getElementById('app'))

