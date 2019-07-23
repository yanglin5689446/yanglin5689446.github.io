
import React from 'react'
import MilestonesComponent from 'components/Milestones'
import { useTranslation } from 'react-i18next'

const events = [
  {
    date: '2015/06',
    caption: '自 台中一中 畢業',
    big: true,
  },
  {
    date: '2015/08',
    caption: '參加 2015 臺大黑客松',
    content: '2015 臺大黑客松是第三屆台大黑客松。本來以為黑客松只要去發想然後自由創作，結果發現大家好像都有備而來，得獎的作品的完成度都相當的高，根本不像三天之內做得出來的XD。我們組做了一個不怎麼實用的 chrome 小插件，算是去見見世面。'
  },
  {
    date: '2015/09',
    caption: '在 國立交通大學 就讀 資訊工程學系',
    big: true,
  },
  {
    date: '2016/02',
    caption: '參加 2016 城市設計黑客松',
    content: '名字叫黑客松，可是沒有食物、沒有黑客，也沒有馬拉松，只有提簡報的簡報松。現場準備了一些開發板，結果我們要做的事卻是針對一塊台北市府的閒置土地提土地利用計畫。兩天內一行程式碼都沒有寫，只提了一個垂直農場概念的簡報，沒想到卻意外入圍了，可能是我們簡報做得不錯看吧。'
  },
  {
    date: '2016/07',
    caption: '在 資工系計算機中心 擔任 TA',
    content: '交大資工系上擁有自己的計算機中心，由學生自主維護系上的各式服務，包括linux/BSD工作站、網頁服務、資料庫 ... 等等。而系計中 TA 就是維護這些服務，分為碩士班丁組跟大學部 TA。我屬於負責維護系上網頁的 www 組以及管理系上 linux 工作站的 linux 組。',
    big: true,
  },
  {
    date: '2016/08',
    caption: '參加 2016 台大黑客松',
    content: '又去參加了一次臺大黑客松，不過這次黑客松已經徹底脫離我所理解的範圍，變成一種大型競賽活動，彷彿變成各大學校實驗室的展覽舞台。有做出東西的都是早有準備的隊伍，不然就是用漂亮的介面跟簡報畫一些可口的大餅卻看不出可行性在哪的「產品」，開始覺得這類活動是否已經完全脫離本意。'
  },
  {
    date: '2017/03',
    caption: '參加 2017 SITCON',
    content: '第一次參加 SITCON ，像是劉姥姥逛大觀園，眼花撩亂。'
  },
  {
    date: '2017/08',
    caption: '參加 2018 安謀思創 Arm Strong',
    content: '安謀思創是使用 ARM 的 stm32 系列開發板，在四個月內作出一項作品的比賽。我和室友配合正在研究的主題，想做出使用 3D 列印加上市面上買的材料就能自製的六足機器人。不過因為重量的計算錯誤，最後的機器人雖然有生產出來卻無法順利地移動，因此最後只能悲劇收場。'
  },
  {
    date: '2018/01',
    caption: '開始在 賦睿科技 的工作',
    big: true,
  },
  {
    date: '2018/03',
    caption: '第二屆交大藝趣節 協助開發宣傳頁面',
  },
  {
    date: '2018/07',
    caption: '開始在 五倍紅寶石 5xruby 實習',
    content: '在五倍紅寶石實習兩個月，雖說當初投遞的是前端實習，不過實習期間練習使用 rails 居多。在這段時間也有自己研究一些有趣的東西，像是 Haskell - 一種純函式語言，主要是因為前端而對 functional programming 逐漸感興趣。',
    big: true
  },
  {
    date: '2018/08',
    caption: '參加 2018 COSCUP',
  },
  {
    date: '2018/09',
    caption: '結束在 資工系計算機中心 的工作',
    big: true
  },
  {
    date: '2018/10',
    caption: '開始在 Yourator新創職涯平台 工作',
    big: true
  },
  {
    date: '2019/02',
    caption: '自交大資工畢業(提前一學期)',
    big: true
  },
  {
    date: '2019/08',
    caption: '在 COSCUP 擔任講者',
    content: '這次在 COSCUP 投稿了「帶你讀源碼」的議軌，主題是導讀 redux 的原始碼，因為那段時間剛好有在 trace 一些 react 生態系的原始碼，剛好 2019 年有這樣一個以讀原始碼為主的議軌，於是就投遞看看，然後就有點出乎意料的上了',
    big: true
  },

]

const Milestones = () => {
  const { t } = useTranslation('milestones')
  return (
    <div className='container px-3 py-5 p-md-5 main-content'>
      <div>
        <h1 className='text-center text-md-left weight-bold'>{ t('title') }</h1>
        <MilestonesComponent events={events}/>
      </div>
    </div>
  )
}

export default Milestones
