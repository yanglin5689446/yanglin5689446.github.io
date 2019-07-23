
import React from 'react'
import linbox from 'assets/images/linbox.png'
import './style.scss'

const portfolios = [
  {
    image: 'https://imgur.com/tKIyw9B.png',
    intro: '2017 年安謀思創比賽作品，使用 Google SketchUp + 3D 列印做六足機器人模型。',
  },
  {
    image: 'https://imgur.com/0dTq2mr.png',
    link: 'https://nctuartfest.org/',
    intro: '2018 年交大藝趣節第二屆活動頁面。交大藝趣節為交大學生自主發起活動，願景是增進交大人文素養。',
  },
  {
    image: 'https://imgur.com/jTHmgB3.png',
    link: 'https://plus.nctu.edu.tw/',
    source: 'https://github.com/nctuplus/nctuplus-frontend/',
    intro: 'NCTU+ 是由交大學生自主發起，為改善學生校園生活而製作的開放原始碼網頁平台，現在依然蓬勃發展中。',
  },
  {
    image: 'https://imgur.com/cGgvgPZ.png',
    link: 'https://english-contest.ntcu.edu.tw/',
    intro: '台中教育大學英文系競賽網頁平台，供學生上傳競賽作品並開放系外人士票選。',
  },
  {
    image: 'https://miro.medium.com/max/700/1*lB98vV1Bx0fT5LhrWF_FxQ.png',
    link: 'https://js-final-2018.herokuapp.com/',
    source: 'https://github.com/yanglin5689446/pixi-practice',
    intro: '修課的期末 project ，基於 socket.io 和 pixi.js 的 MMO DOTA JS 小遊戲。',
  },
  {
    image: 'https://i.imgur.com/I9uezQv.png',
    link: 'https://yanglin5689446.github.io/akachen/',
    intro: '大四上學期時接案開發的一個介紹網頁。',
  },
  {
    image: linbox,
    link: 'https://linbox.herokuapp.com/',
    source: 'https://yanglin5689446.github.io/linbox/',
    intro: '因為 2019 年 google inbox 關閉，而我又是忠實使用者，因此訪 inbox 的介面做了一個功能類似的 webapp ，命名為 linbox。',
  },
]

class GalleryItem  extends React.Component {
  constructor(props){
    super(props)
    this.state = { popup: false }
  }
  render(){
    return (
      <div className='col-12 col-md-6 col-xl-4 my-3'>
        <div className={ this.state.popup ? 'item popup' : 'item' } >
          <img src={ this.props.image } alt='' />

          <div className='mask' >
            <div className='mask-overlay'>
              <div className='mask-text'>{ this.props.intro }</div>
              <div
                className={ this.state.popup ? 'd-none' : 'mask-icon' }
                onClick={ () => this.setState({ popup: true }) }
              >
                <i className="fa fa-eye" />
              </div>
              <div
                className={ this.state.popup ? 'mask-icon' : 'd-none' }
                onClick={ () => this.setState({ popup: false }) }
              >
                <i className='fas fa-times'/>
              </div>
              {
                this.props.link == null ||
                <div className='mask-icon'>
                  <a href={ this.props.link } target='_blank' rel="noopener noreferrer">
                    <i className="fa fa-link"/>
                  </a>
                </div>
              }
              {
                this.props.source == null ||
                <div className='mask-icon'>
                  <a href={ this.props.source } target='_blank' rel="noopener noreferrer">
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
}

const Portfolio = () => (
  <div className='container px-3 py-5 p-md-5 main-content'>
    <div>
      <h1 className='text-center text-md-left weight-bold'>作品集</h1>
      <div className='gallery row'>
        {
          portfolios.map( (item, index) => (<GalleryItem { ...item } key={index} />) )
        }
      </div>
    </div>
  </div>
)

export default Portfolio
