
import React from 'react'
import './style.scss'


const CoverAvatar = (props) => (
  <div 
    className="cover-avatar" 
    style={{ 
      background: `url('${props.src}')`,
      backgroundSize: 'cover'
    }} 
  />
)

export default CoverAvatar