import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/navbar'

ReactDOM.render(
  <Navbar/>,
  document.getElementById('navbar')
)

class PostList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('mount')
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="btn-group pull-right" role="group" aria-label="工具栏">
            <a href="./post.save.html" className="btn btn-secondary"><i className="fa fa-fw fa-plus"></i> 添加</a>
          </div>
        </div>

        <div className="col-12">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              名称
            </a>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<PostList/>, document.getElementById('app'))