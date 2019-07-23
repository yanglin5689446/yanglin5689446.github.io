
import React from 'react'
import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'
import './style.scss'

const SocialButtonLink = (props) => (
  <a
    data-tip={ props.tip }
    href={ props.url }
    target='_blank'
    rel="noopener noreferrer"
    className='social-button-link'
  >
    <i
      className={props.icon}
      style={{ ...props.style }}
    />
  </a>
)

const Index = () => {
  const { t } = useTranslation('about')
  return (
    <div>
      <ReactTooltip effect='solid' />
      <div className='container px-3 py-5 p-md-5 index main-content'>
        <div>
          <h2 className='title my-2 ml-3'>
            { t('title') }
          </h2>
          <p className='mx-md-5 mx-4 my-3 px-3 px-md-0 pb-3 h5 chinese'>
            { t('introduction') }
          </p>
          <h2 className='title my-2 ml-3'>
            { t('interests.title') }
          </h2>
          <div className='m-4 pl-2 pb-3 chinese'>
            <p><i className='fa fa-desktop mx-2'/>{ t('interests.0') }</p>
            <p><i className='fa fa-desktop mx-2'/>{ t('interests.1') }</p>
            <p><i className='fa fa-cogs mx-2'/>{ t('interests.2') }</p>
            <p><i className='fa fa-code mx-2'/>{ t('interests.3') }</p>
            <p><i className='fas fa-tv mx-2'/>{ t('interests.4') }</p>
            <p><i className='fa fa-music mx-2'/>{ t('interests.5') }</p>
          </div>
          <h2 className='title my-2 ml-3'>
            { t('contactMe') }
          </h2>
          <div className='m-4 pb-3'>
            <SocialButtonLink
              tip='yanglin5689446'
              url='https://www.facebook.com/yanglin5689446'
              icon='fab fa-facebook'
              style={{ color: '#395CA9'}}
            />
            <SocialButtonLink
              tip='@yanglin5566'
              url='https://twitter.com/yanglin5566'
              icon='fab fa-twitter'
              style={{ color: '#1997F0' }}
            />
            <SocialButtonLink
              tip='yanglin5689446'
              url='http://github.com/yanglin5689446/'
              icon='fab fa-git'
            />
            <SocialButtonLink
              tip='yanglin5689446@gmail.com'
              url='mailto:yanglin5689446@gmail.com'
              icon='fa fa-envelope'
              style={{ color: '#64B2F5' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
