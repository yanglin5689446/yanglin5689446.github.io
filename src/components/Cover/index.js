
import React from 'react'
import Avatar from './Avatar'
import { useTranslation } from 'react-i18next'
import { compose, lifecycle, withState } from 'recompose'
import classNames from 'classnames'
import avatar from 'assets/images/avatar.jpg'
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
const Cover = enhance(({ background }) => {
  const { i18n } = useTranslation()
  return (
    <div className='cover' style={background}>
      <div className='container text-center'>
        <div className='switch-language-container btn-group'>
          <button
            className={classNames('btn', i18n.language.startsWith('zh') && 'btn-primary')}
            onClick={() => i18n.changeLanguage('zh')}
          >
            中文
          </button>
          <button
            className={classNames('btn', i18n.language.startsWith('en') && 'btn-primary')}
            onClick={() => i18n.changeLanguage('en')}
          >
            English
          </button>
        </div>
        <div className='cover-wrapper'>
          <Avatar src={avatar} />
          <br/>
          <div className='text-center name'>
            <h3>Yang Lin</h3>
            <h6>@New Taipei City, Taiwan</h6>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Cover