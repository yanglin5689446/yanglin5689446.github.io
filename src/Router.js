
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Layout from 'layouts'
import Index from 'pages/Index'
import Milestones from 'pages/Milestones'
import Portforlio from 'pages/Portforlio'
import Skills from 'pages/Skills'


class RootRouter extends React.Component {
  render () {
    return (
      <Router >
        <Layout>
          <Route exact path='/' component={ Index } />
          <Route exact path='/milestones' component={ Milestones } />
          <Route exact path='/portforlio' component={ Portforlio } />
          <Route exact path='/skills' component={ Skills } />
        </Layout>
      </Router>
    )
  }
}

export default RootRouter
