
import React from 'react'
import classNames from 'classnames'
import Image from 'components/Image'
import './style.scss'

const skillSet = {
  Language: [
    { title: 'JavaScript', thumbnail: 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png' },
    { title: 'HTML5', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
    { title: 'CSS3', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png' },
    { title: 'PHP', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2000px-PHP-logo.svg.png'},
    { title: 'Python', degree: 'average', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png' },
    { title: 'C++', degree: 'average', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/2000px-ISO_C%2B%2B_Logo.svg.png'},
    { title: 'Ruby', degree: 'average', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2000px-Ruby_logo.svg.png'},
    { title: 'Shell Script', thumbnail: 'https://i.pinimg.com/originals/24/e0/a3/24e0a35fd1bee2de25e10f84cbffe2b8.png'},
  ],
  DevOps: [
    { title: 'Travis CI', degree: 'average', thumbnail: 'https://cdn.freebiesupply.com/logos/thumbs/2x/travis-ci-logo.png' },
    { title: 'Gitlab CI', degree: 'average', thumbnail: 'https://docs.gitlab.com/assets/images/gitlab-logo.svg' },
    { title: 'Heroku', degree: 'average', thumbnail: 'https://img.icons8.com/color/1600/heroku.png' },
    { title: 'Docker', degree: 'fair', thumbnail: 'https://seeklogo.com/images/D/docker-logo-6D6F987702-seeklogo.com.png' },
    { title: 'Kubernetes', degree: 'fair', thumbnail: 'https://camo.githubusercontent.com/aac1abbbad21d146bb36d7ef511d50a7bd544bb9/68747470733a2f2f7777772e6d6972616e7469732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30322f4b756265726e657465732e706e67' },
    { title: 'OpenShift', degree: 'fair', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/OpenShift-LogoType.svg/2000px-OpenShift-LogoType.svg.png' },
  ],
  Backend: [
    { title: 'Laravel', degree: 'average', thumbnail: 'http://logonoid.com/images/laravel-logo.png' },
    { title: 'Rails', degree: 'average', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2000px-Ruby_logo.svg.png' },
    { title: 'NodeJS', degree: 'average', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png' },
    { title: 'Flask', degree: 'average', thumbnail: 'https://cdn.worldvectorlogo.com/logos/flask.svg' },
  ],
  Database: [
    { title: 'MariaDB', degree: 'average', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mariadb-seal-browntext.svg/2000px-Mariadb-seal-browntext.svg.png' },
    { title: 'MySQL', degree: 'average', thumbnail: 'https://cdn.worldvectorlogo.com/logos/mysql.svg' },
    { title: 'PostgreSQL', degree: 'average', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2000px-Postgresql_elephant.svg.png' },
  ],
  Frontend: [
    { title: 'ReactJS', thumbnail: 'https://images.codedaily.io/icons/react.svg' },
    { title: 'Redux', thumbnail: 'https://cdn-images-1.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png' },
    { title: 'JQuery', degree: 'average', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JQuery_logo_text.svg/2000px-JQuery_logo_text.svg.png' },
    { title: 'PixiJS', degree: 'fair', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsEOMCzJyFyYaGeA6tZTwPOKzoO7Xm7-AdR_7uz6_zk7pfnO9' },
    { title: 'Bootstrap 4', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg' },
    { title: 'Bulma', thumbnail: 'https://www.saashub.com/images/app/service_logos/6/4ad2b9991817/large.png?1525414082' },
    { title: 'SASS', thumbnail: 'https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png' },
  ],
  Design: [
    { title: 'Sketch', degree: 'fair', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sketch_logo_frame.svg/2000px-Sketch_logo_frame.svg.png' },
    { title: 'Material Design', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/2000px-Google_Material_Design_Logo.svg.png' },
  ],
  Mobile: [
      { title: 'React Native', degree: 'fair', thumbnail: 'https://images.codedaily.io/icons/react.svg' },
  ],
  MISC: [
    { title: 'SketchUp', thumbnail: 'https://seeklogo.com/images/S/sketchup-logo-5248E6166E-seeklogo.com.png' },
    { title: 'Arduino', thumbnail: 'https://seeklogo.com/images/A/arduino-logo-BC7CBC1DAA-seeklogo.com.png' },
    { title: '3D print', thumbnail: 'https://d30y9cdsu7xlg0.cloudfront.net/png/62251-200.png' },
  ]
}

const Card = ({ degree, thumbnail, title }) => (
  <div className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 p-1 mb-1'>
    <div className={ classNames('card', 'text-center', degree) }>
      <div className='d-flex m-auto justify-content-center align-items-center p-3 thumbnail' >
        <Image src={ thumbnail } />
      </div>
      <span className='mb-3'>{ title }</span>
    </div>
  </div>
)

const Skills = () => (
  <div className='container px-3 py-5 p-md-5 skills main-content'>
    <div>
      <h1 className='text-center text-md-left weight-bold'>Skills</h1>
      <div className='instruction my-4'>
        <span className='average mr-3' /> Average
        <br />
        <span className='fair mr-3' /> Fair

      </div>
      {
        Object
          .entries(skillSet)
          .map(([ category, skills]) => (
          <div key={ category }>
            <h2 className='title'>{ category }</h2>
            <div className='row m-4 pb-3'>
              { skills.map(skill => <Card { ...skill } key={ skill.title } /> ) }
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default Skills
