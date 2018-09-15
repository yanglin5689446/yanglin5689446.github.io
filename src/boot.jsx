import React from 'react'
import { render } from 'react-dom'
import Router from 'Router'
import './assets/styles/main.scss'

if (typeof (document) !== 'undefined' && window) {
  window.onload = () => {
    return render(
      <Router />,
      document.getElementById('app')
    )
  }
}
