
import React, { useState } from 'react'
import linbox from 'assets/images/linbox.png'
import { useTranslation } from 'react-i18next'
import './style.scss'

const portfolios = [
  {
    image: 'https://imgur.com/tKIyw9B.png',
    intro: {
      zh: '2017 年安謀思創比賽作品，使用 Google SketchUp + 3D 列印做六足機器人模型。',
      en: 'An haxapod model made by Google SketchUp and is 3D-printable'
    },
  },
  {
    image: 'https://imgur.com/0dTq2mr.png',
    link: 'https://nctuartfest.org/',
    intro: {
      zh: '2018 年交大藝趣節第二屆活動頁面。交大藝趣節為交大學生自主發起活動，願景是增進交大人文素養。',
      en: 'Landing page for NCTU Art Festival 2018'
    },
  },
  {
    image: 'https://imgur.com/jTHmgB3.png',
    link: 'https://plus.nctu.edu.tw/',
    source: 'https://github.com/nctuplus/nctuplus-frontend/',
    intro: {
      zh: 'NCTU+ 是由交大學生自主發起，為改善學生校園生活而製作的開放原始碼網頁平台，現在依然蓬勃發展中。',
      en: 'NCTU+ is a platform run by and for NCTU students providing better quality e-campus services.'
    },
  },
  {
    image: 'https://imgur.com/cGgvgPZ.png',
    link: 'https://english-contest.ntcu.edu.tw/',
    intro: {
      zh: '台中教育大學英文系競賽網頁平台，供學生上傳競賽作品並開放系外人士票選。',
      en: 'NTCU English Dep. Contest System'
    },
  },
  {
    image: 'https://miro.medium.com/max/700/1*lB98vV1Bx0fT5LhrWF_FxQ.png',
    link: 'https://js-final-2018.herokuapp.com/',
    source: 'https://github.com/yanglin5689446/pixi-practice',
    intro: {
      zh: '修課的期末 project ，基於 socket.io 和 pixi.js 的 MMO DOTA JS 小遊戲。',
      en: 'Final project of a javascript course. A MMO DOTA game based on socket.io & pixi.js.'
    },
  },
  {
    image: 'https://i.imgur.com/I9uezQv.png',
    link: 'https://yanglin5689446.github.io/akachen/',
    intro: {
      zh: '大四上學期時接案開發的一個介紹網頁。',
      en: 'Introduction Page for a jewry artist.',
    },
  },
  {
    image: linbox,
    link: 'https://linbox.herokuapp.com/',
    source: 'https://yanglin5689446.github.io/linbox/',
    intro: {
      zh: '因 2019 年 google inbox 關閉，而我是重度用戶，因此仿 inbox 的介面做了一個功能類似的 webapp ，命名為 linbox。',
      en: "Since google inbox was shut down bu google in 2019 and I'm a big fan of it, I build a forgery webapp with google API and mimic inbox's UI and name it 'linbox'",
    },
  },
]


const GalleryItem = ({ image, intro, link, source }) => {
  const { i18n } = useTranslation()
  const lang = i18n.language.substr(0, 2) || 'en'

  const [popup, updatePopup] = useState(false)
  return (
    <div className='col-12 col-md-6 col-xl-4 my-3'>
      <div className={ popup ? 'item popup' : 'item' } >
        <img src={ image } alt='' />

        <div className='mask' >
          <div className='mask-overlay'>
            <div className='mask-text'>{ intro && intro[lang] }</div>
            <div
              className={ popup ? 'd-none' : 'mask-icon' }
              onClick={ () => updatePopup(true) }
            >
              <i className="fa fa-eye" />
            </div>
            <div
              className={ popup ? 'mask-icon' : 'd-none' }
              onClick={ () => updatePopup(false) }
            >
              <i className='fas fa-times'/>
            </div>
            {
              link == null ||
              <div className='mask-icon'>
                <a href={ link } target='_blank' rel="noopener noreferrer">
                  <i className="fa fa-link"/>
                </a>
              </div>
            }
            {
              source == null ||
              <div className='mask-icon'>
                <a href={ source } target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-git"/>
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const Portfolio = () => {
  const { t } = useTranslation('portfolios')
  return (
    <div className='container px-3 py-5 p-md-5 main-content'>
      <div>
        <h1 className='text-center text-md-left weight-bold'>{ t('title') }</h1>
        <div className='gallery row'>
          {
            portfolios.map( (item, index) => (<GalleryItem { ...item } key={index} />) )
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
