import { Link } from 'react-router'
import classnames from 'classnames'
import Component from '../../component'

export default class Menu extends Component {
  getClassName = (category) => {
    return classnames('collection-item', { ['active']: this.props.selected && category.toLowerCase() === this.props.selected })
  }
  render() {
    return <div className="collection">
      {this.props.data.map(category =>
        <Link key={category} className={this.getClassName(category)}
          to={`/${category.toLowerCase()}`}>{category}</Link>)}
    </div>
  }
}
