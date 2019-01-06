
import React from 'react'
import classNames from 'classnames'
import './style.scss'

const Event = ({ big, caption, date, content }) => (
  <div className={ classNames('event mb-2 chinese', big && 'big') }>
    <div className={ classNames('d-inline mr-2', big ? 'h4 weight-bolder' : 'h5 weight-bold') }>
      { caption }
    </div>
    <small>{ date }</small>
    <br/>
    <span className='d-none d-md-inline'>{ content }</span>
  </div>
)

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