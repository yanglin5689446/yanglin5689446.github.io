
import React from 'react'
import ReactTooltip from 'react-tooltip'
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

const Index = () => (
  <div>
    <ReactTooltip effect='solid' />
    <div className='container px-3 py-5 p-md-5 index main-content'>
      <div>
        <h2 className='title my-2 ml-3'>
          關於我
        </h2>
        <p className='mx-md-5 my-3 pb-3 h5 chinese'>
          我的名字叫林子暘，22歲。住在新北市西南部的新莊區一帶，未婚。我在友睿資訊服務。每天都要上班到晚上7點才能回家。我不抽煙，酒僅止於淺嚐。晚上12點睡，每天要睡足8個小時。睡前，我一定喝一杯溫牛奶，然後做20分鐘的柔軟操，上了床，馬上熟睡。一覺到天亮，絕不把疲勞和壓力留到第二天。醫生都說我很正常。
        </p>
        <h2 className='title my-2 ml-3'>
          個人興趣
        </h2>
        <div className='m-4 pl-2 pb-3 chinese'>
          <p><i className='fa fa-desktop mx-2'/>跟前、後端有關的任何技術</p>
          <p><i className='fa fa-desktop mx-2'/>開發流程、DevOps、自動化部屬/測試</p>
          <p><i className='fa fa-cogs mx-2'/>略懂 Arduino 跟一些基礎 MCU 開發</p>
          <p><i className='fa fa-code mx-2'/>簡潔、高可讀性、高效能的程式碼</p>
          <p><i className='fas fa-tv mx-2'/>動畫、電影、日劇，美劇</p>
          <p><i className='fa fa-music mx-2'/>基本上任何類型的音樂都聽，特愛老搖滾和金屬樂，會彈一點電吉他</p>
        </div>
        <h2 className='title my-2 ml-3'>
          聯繫我
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
