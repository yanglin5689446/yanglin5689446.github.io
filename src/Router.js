
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AppNav from 'components/AppNav'
import Footer from 'components/Footer'
import Cover from 'components/Cover'
import Index from 'pages/Index'
import * as Milestones from 'pages/Milestones'
import * as Portforlio from 'pages/Portforlio'
import * as Skills from 'pages/Skills'


class RootRouter extends React.Component {
  render () {
    return (
      <Router >
        <div>
          <Cover src='https://imgur.com/4pHTxLk.png'/>
          <Route path='/*' component={ AppNav } />
          <div>
            <Route exact path='/' component={ Index } />
            <Route exact path='/milestones' component={ Milestones.Index } />
            <Route exact path='/portforlio' component={ Portforlio.Index } />
            <Route exact path='/skills' component={ Skills.Index } />
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default RootRouter
