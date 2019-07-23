
import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import MediaQuery from 'react-responsive'
import { useTranslation } from 'react-i18next'

import './style.scss'

const navItems = [
  { url: '/', icon:'user', label: 'about' },
  { url: '/milestones', icon:'tasks', label: 'milestones' },
  { url: '/skills', icon:'briefcase', label: 'skills' },
  { url: '/portfolios', icon:'paint-brush', label: 'portfolios' },
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

const AppNav = () => {
  const { t } = useTranslation('navigation')
  return (
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
                { t(item.label) }
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
                { t(item.label) }
              </NavItem>
            ))
          }
        </nav>
      </MediaQuery>
    </div>
  )
}
export default AppNav