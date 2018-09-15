
import React from 'react'
import classNames from 'classnames'
import './style.scss'

const Event = (props) => (
  <div className={ classNames({ 'event' :true , 'big': props.big, 'mb-2': true }) }>
    <h4 className='d-inline mr-2'>{ props.caption }</h4>
    <small>{ props.date }</small>
    <br/>
    <span className='d-none d-md-inline'>{ props.content }</span>
  </div>
)

const Milestones = (props) => ( <div classNames='milestones m-3'>{ props.children }</div> )

export { Event }
export default Milestones