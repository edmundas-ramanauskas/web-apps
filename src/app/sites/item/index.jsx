import { Link } from 'react-router'
import Component from '../../../component'

export default class Item extends Component {
  renderCategory = (category, last) => {
    return <span key={category}>
      <Link className="light-blue-text text-lighten-4"
        to={`/${category.toLowerCase()}`}>{category}</Link>{last ? null : ', '}
    </span>
  }
  render() {
    const categories = this.props.data.categories.sort().map((category, idx) =>
      this.renderCategory(category, idx === this.props.data.categories.length - 1))
    return <div style={this.props.style}>
      <div className="card blue-grey darken-1 hoverable">
        <div className="card-content white-text">
          <span className="card-title">{this.props.data.title}</span>
          <p>Categories: {categories}</p>
        </div>
        <div className="card-action">
          <a href={this.props.data.link} target="_blank">Go to website</a>
        </div>
      </div>
    </div>
  }
}
