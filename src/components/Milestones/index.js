
import React from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import './style.scss'

const Event = ({ big, caption, date, content }) => {
  const { i18n } = useTranslation()
  const lang = i18n.language.substr(0, 2) || 'en'
  return (
    <div className={ classNames('event mb-2 chinese', big && 'big') }>
      <div className={ classNames('d-inline mr-2', big ? 'h4 weight-bolder' : 'h5 weight-bold') }>
        { caption && caption[lang] }
      </div>
      <small>{ date }</small>
      <br/>
      <span className='d-none d-md-inline'>{ content && content[lang] }</span>
    </div>
  )
}

const Milestones = ({ events }) => (
  <div className='milestones m-3'>
    {
      events.map((event, index) => (
        <Event { ...event } key={ index } />
      ))
    }
  </div>
)

export default Milestones