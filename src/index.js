import React from 'react'
import ReactDOM from 'react-dom'
import App from './Router'
import * as serviceWorker from './serviceWorker'
import './assets/styles/main.scss'
import avatar from 'assets/images/avatar.jpg'

import './i18n'

const renderApp = () => ReactDOM.render(<App />, document.getElementById('root'))

if (typeof (document) !== 'undefined' && window) {
  window.onload = () => {
    let loaded = 0
    const shouldLoad = [
      avatar,
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
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
