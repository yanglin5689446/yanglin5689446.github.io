
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import MediaQuery from 'react-responsive'
import './style.scss'

const NavItem = withRouter((props) => (
  <div 
    className={ classNames('col', 'col-lg-2', 'nav-item', { active: props.active }) } 
    onClick={() => props.history.push(props.url) } 
  >
    { props.children }
  </div>
))

const NavItemMobile = withRouter((props) => (
  <span 
    className={ classNames('nav-item', 'mx-2', { active: props.active }) } 
    onClick={() => props.history.push(props.url) } 
  >
    { props.children }
  </span>
))

const AppNav = (props) => {
  const nav_items = [
    { url: '/', icon:'user', label: 'About' },
    { url: '/milestones', icon:'tasks', label: 'Milestones' },
    { url: '/skills', icon:'briefcase', label: 'Skills' },
    { url: '/portforlio', icon:'paint-brush', label: 'Portforlios' },
  ]
  return (
    <div>
      <MediaQuery minDeviceWidth={567}>
        <nav className='app-nav row justify-content-center'>
          {
            nav_items.map((item, index) => (
              <NavItem 
                key={ index } 
                url={ item.url }
                active={ item.url == props.match.url }
              >
                <i className={ classNames('mx-2', `fa fa-${item.icon}`) } /> 
                { item.label }
              </NavItem>
            ))
          }
        </nav>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={567}>
        <nav className='app-nav text-center'>
          {
            nav_items.map((item, index) => (
              <NavItemMobile 
                key={ index } 
                url={ item.url }
                active={ item.url == props.match.url }
              >
                { item.label }
              </NavItemMobile>
            ))
          }
        </nav>
      </MediaQuery>
    </div>
  )
}

export default AppNav