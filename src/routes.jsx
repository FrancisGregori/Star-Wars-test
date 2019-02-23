import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'

/* ROUTES */
import Homepage from 'src/screens/homepage'
import Single from 'src/screens/single'
import NotFoundPage from 'src/screens/notFoundPage'

class Routes extends Component {
  render () {

    return (
      <Switch location={this.props.location}>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/single-movie/:episodeId' component={Single} />
        <Route exact path='*' component={NotFoundPage} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
