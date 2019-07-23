
import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import MediaQuery from 'react-responsive'
import './style.scss'

const navItems = [
  { url: '/', icon:'user', label: '關於我' },
  { url: '/milestones', icon:'tasks', label: '學經歷' },
  { url: '/skills', icon:'briefcase', label: '工作技能' },
  { url: '/portfolios', icon:'paint-brush', label: '作品集' },
]

const NavItem = withRouter(({ url, children, mobile }) => (
  <NavLink
    className={
      classNames(
        mobile ? 'nav-item mx-2' : 'col col-lg-2 nav-item',
      )
    }
    to={url}
    exact
  >
    { children }
  </NavLink>
))

const AppNav = () => (
  <div>
    <MediaQuery minDeviceWidth={567}>
      <nav className='app-nav row justify-content-center'>
        {
          navItems.map((item, index) => (
            <NavItem
              key={ index }
              url={ item.url }
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
          navItems.map((item, index) => (
            <NavItem
              key={ index }
              url={ item.url }
              mobile
            >
              { item.label }
            </NavItem>
          ))
        }
      </nav>
    </MediaQuery>
  </div>
)

export default AppNav