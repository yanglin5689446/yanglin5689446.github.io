
import React from 'react'
import ReactTooltip from 'react-tooltip'
import Layout from 'layouts'
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
        <ul className='m-4 pb-3 chinese'>
          <li className="py-1">22 歲，血型 O 型，天蠍座。出生於台中，然而對自己住家半徑五公里內及一中街周邊外幾乎一無所知。</li>
          <li className="py-1">就讀於交大資工系大四，處於能畢業和不能畢業的疊加態。</li>
          <li className="py-1">會一點點電吉他，在交通大學星聲社擔任一介冗員。</li>
          <li className="py-1">浪費許多生命在滑 PTT、臉書以及 Reddit ，是不折不扣的鄉民。</li>
          <li className="py-1">最近想要多加強自己的設計能力，希望能不只當個切板仔，也能自己搞點好看又實用的產品。</li>
        </ul>
        <h2 className='title my-2 ml-3'>
          Interest
        </h2>
        <div className='m-4 pl-2 pb-3 chinese'>
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
