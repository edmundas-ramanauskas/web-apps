import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import App from './app/index'
import Sites from './app/sites'


export default class AppRouter extends React.Component {
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Sites}/>
        <Route path="/:category" component={Sites}/>
      </Route>
    </Router>
  }
}

render(<AppRouter/>, document.getElementById('app'))
