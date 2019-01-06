
import React from 'react'
import './style.scss'


const Avatar = (props) => (
  <div
    className="cover-avatar"
    style={{
      background: `url('${props.src}')`,
      backgroundSize: 'cover'
    }}
  />
)

export default Avatar