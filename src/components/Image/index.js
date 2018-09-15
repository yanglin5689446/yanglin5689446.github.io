
import React from 'react'
import { compose, withState, lifecycle } from  'recompose'

const enhance = compose(
  withState('loaded', 'setLoaded', false),
  lifecycle({ 
    componentDidMount(){
      const { src, setLoaded } = this.props
      const img = document.createElement('img')
      img.src = src
      img.onload = () => setLoaded(true)
    } 
  })
)

const Image = enhance(({ src, loaded }) => loaded
  ? <img src={src} className='animated fade-in img-fluid' />
  : <i className='fas fa-spinner fa-spin' /> 
)

export default Image