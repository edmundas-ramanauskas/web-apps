import Component from '../../../component'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 0
    }
  }
  onChange = (event) => {
    this.props.onSearch(event.target.value)
  }
  onClear = () => {
    this.props.onSearch(null)
    this.updateState({ key: this.state.key + 1 })
  }
  render() {
    return <nav style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field blue-grey">
            <input type="search" placeholder="Search..." autoComplete="off"
              key={this.state.key} onChange={this.onChange} />
            <label htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons" onClick={this.onClear}>close</i>
          </div>
        </form>
      </div>
    </nav>
  }
}
