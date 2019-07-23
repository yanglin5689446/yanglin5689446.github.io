import React from 'react'
import { render } from 'react-dom'
import Router from 'Router'
import './assets/styles/main.scss'

<<<<<<< HEAD
const renderApp = () => render(
  <Router />,
  document.getElementById('app')
)
=======
import './i18n'
>>>>>>> Upgrade packages & add i18n support

if (typeof (document) !== 'undefined' && window) {
  window.onload = () => {
    let loaded = 0
    const shouldLoad = [
      'https://i.imgur.com/hQo9sje.jpg',
      'https://imgur.com/4pHTxLk.png'
    ]
    shouldLoad.forEach(url => {
      const image = document.createElement('img')
      image.src = url
      image.onload = () => {
        loaded++
        if(loaded === shouldLoad.length){
          renderApp()
        }
      }
    })
  }
}
