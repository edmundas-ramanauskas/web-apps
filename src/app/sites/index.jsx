import React from 'react'
import { List } from 'immutable'
import { AutoSizer, List as VirtualList, WindowScroller } from 'react-virtualized'
import Component from '../../component'
import Search from './search'
import Item from './item'
import data from './data'

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function compareImmutable(a, b) {
  return compare(a.title, b.title)
}

const sites = List(data).sort(compareImmutable)

const styles = require('./styles.css')

export default class Sites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: null
    }
  }
  onSearch = (value) => {
    this.updateState({ filter: value })
  }
  filter = (site) => {
    return (!this.props.params.category || site.categories.indexOf(this.props.params.category) > -1)
      && (!this.state.filter || site.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
  }
  getData = () => {
    if(!this.state.filter && !this.props.params.category)
      return sites
    return sites.filter(this.filter)
  }
  renderList = (list) => {
    const render = ({ index, key, style }) => {
      return this.renderItem(list.get(index), key, style)
    }
    return <WindowScroller ref={(ref) => { this._windowScroller = ref }}>
      {({ height }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualList
              autoHeight
              rowCount={list.size}
              rowHeight={195.5}
              rowRenderer={render}
              width={width}
              height={height}
              style={{ outline: 'none', overflow: 'hidden' }}
              />
            )}
        </AutoSizer>
      )}
    </WindowScroller>
  }
  renderItem = (site, key, style) => {
    return <Item key={key} data={site} style={style} />
  }
  renderContent = () => {
    const list = this.getData()
    return list.map(this.renderItem)
    // return this.renderList(list)
  }
  render() {
    return <div className={styles.wrapper}>
      <Search onSearch={this.onSearch}/>
      {this.renderContent()}
    </div>
  }
}
