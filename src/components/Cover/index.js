
import React from 'react'
import Avatar from './Avatar';
import { compose, lifecycle, withState } from 'recompose'
import './style.scss'

const enhance = compose(
  withState('background', 'setBackground', {}),
  lifecycle({
    componentDidMount(){
      const { src, setBackground } = this.props
      const img = document.createElement('img')
      img.src = src
      img.onload = () => setBackground({ backgroundImage: `url(${src})` })
    }
  })
)
const Cover = enhance(({ background }) => (
  <div className='cover' style={background}>
    <div className='container text-center'>
      <div className='cover-wrapper'>
        <Avatar src='https://i.imgur.com/hQo9sje.jpg' />
        <br/>
        <div className='text-center name'>
          <h3>Yang Lin</h3>
          <h6>@Hsinchu, Taiwan</h6>
        </div>
      </div>
    </div>
  </div>
))

export default Cover