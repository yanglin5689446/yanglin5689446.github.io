
import React from 'react'
import ReactTooltip from 'react-tooltip'
import './style.scss'

const SocialButtonLink = (props) => (
  <a 
    data-tip={ props.tip } 
    href={ props.url } 
    target='_blank' 
    className='social-button-link'
  >
    <i 
      className={props.icon} 
      style={{ ...props.style }}
    />
  </a>
)

const Index = () => (
  <div>
    <ReactTooltip effect='solid' />
    <div className='container px-3 py-5 p-md-5 index main-content'>
      <div>
        <h2 className='title my-2 ml-3'>
          About
        </h2>
        <div className='m-4 pb-3'>
          <p>目前就讀於交通大學資工系三年級，在系上的計算機中心服務。</p>
          <p>會一點點電吉他，在交通大學星聲社擔任一介冗員。</p>
          <p>現在同時也在
          <a href='https://www.facebook.com/fresco.tech/' target='_blank'>賦睿科技 Fresco Technology</a>
          擔任全端工程師接案，請多指教。 </p>
        </div>
        <h2 className='title my-2 ml-3'>
          Interest
        </h2>
        <div className='m-4 pb-3'>
          <p><i className='fa fa-desktop mx-2'/>跟前、後端有關的任何技術</p>
          <p><i className='fa fa-desktop mx-2'/>開發流程、DevOps、自動化部屬/測試</p>
          <p><i className='fa fa-cogs mx-2'/>略懂 Arduino 跟一些基礎 MCU 開發</p>
          <p><i className='fa fa-code mx-2'/>簡潔、高可讀性、高效能的程式碼</p>
          <p><i className='fas fa-tv mx-2'/>動畫、電影、日劇，美劇看得比較少</p>
          <p><i className='fa fa-music mx-2'/>基本上任何類型的音樂都聽，特愛老搖滾和金屬樂，會彈一點電吉他</p>

        </div>
        <h2 className='title my-2 ml-3'>
          Contacts
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
export default Index
