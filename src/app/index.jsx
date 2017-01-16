import { Link } from 'react-router'
import { List } from 'immutable'
import Component from '../component'
import Menu from './menu'

const categories = List.of(
  'Analytics',
  'Feedback',
  'Other',
  'Social',
  'Testing',
  'Video'
).sort()

const styles = require('./styles.css')

export default class App extends Component {
  render() {
    return <div>
      <div className="navbar-fixed">
        <nav className="blue-grey darken-3">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo" title="Home">
              <span className={styles.logo}></span>
            </Link>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s3">
            <Menu data={categories} selected={this.props.params.category}/>
          </div>
          <div className="col s9">
            {this.props.children}
          </div>
        </div>
      </div>
    </div>
  }
}
