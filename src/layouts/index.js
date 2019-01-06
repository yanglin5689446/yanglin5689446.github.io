
import React from 'react'
import AppNav from 'components/AppNav'
import Footer from 'components/Footer'
import Cover from 'components/Cover'

export default ({ children }) => (
  <div>
    <Cover src='https://imgur.com/4pHTxLk.png'/>
    <AppNav />
      { children }
    <Footer/>
  </div>
)