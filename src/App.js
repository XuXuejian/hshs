import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import { routes } from './routes'
import {handleLoading} from './redux/actions'

const mapDispatchToProps = dispatch => ({
  handleLoading: args => dispatch(handleLoading(args))
})
class App extends Component {
  componentDidMount() {
    this.props.handleLoading(true)
  }
  render() {
    return (
      <Switch>
        {routes.map(route => (
          <Route {...route} key={route.path}/>
        ))}
      </Switch>
    )
  }
}

export default connect(null, mapDispatchToProps)(App)
