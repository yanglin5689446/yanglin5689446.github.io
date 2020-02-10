
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import d3legend from 'd3-svg-legend'
import { useTranslation } from 'react-i18next'

import './style.scss'

const skillSet = [
  { category: 'language', title: 'JavaScript',      value: 100, thumbnail: 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png' },
  { category: 'language', title: 'HTML5',           value: 100, thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
  { category: 'language', title: 'CSS3',            value: 100, thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png' },
  { category: 'language', title: 'PHP',             value: 80,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2000px-PHP-logo.svg.png'},
  { category: 'language', title: 'Python',          value: 60,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png' },
  { category: 'language', title: 'C++',             value: 60,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/2000px-ISO_C%2B%2B_Logo.svg.png'},
  { category: 'language', title: 'Ruby',            value: 80,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2000px-Ruby_logo.svg.png'},
  { category: 'language', title: 'Shell Script',    value: 50,  thumbnail: 'https://i.pinimg.com/originals/24/e0/a3/24e0a35fd1bee2de25e10f84cbffe2b8.png'},
  { category: 'language', title: 'Haskell',         value: 20,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg'},
  { category: 'devops',   title: 'Travis CI',       value: 30,  thumbnail: 'https://travis-ci.com/images/logos/Tessa-1.png' },
  { category: 'devops',   title: 'Gitlab CI',       value: 30,  thumbnail: 'https://docs.gitlab.com/assets/images/gitlab-logo.svg' },
  { category: 'devops',   title: 'Heroku',          value: 40,  thumbnail: 'https://img.icons8.com/color/1600/heroku.png' },
  { category: 'devops',   title: 'Docker',          value: 30,  thumbnail: 'https://seeklogo.com/images/D/docker-logo-6D6F987702-seeklogo.com.png' },
  { category: 'devops',   title: 'Kubernetes',      value: 10,  thumbnail: 'https://camo.githubusercontent.com/aac1abbbad21d146bb36d7ef511d50a7bd544bb9/68747470733a2f2f7777772e6d6972616e7469732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30322f4b756265726e657465732e706e67' },
  { category: 'devops',   title: 'OpenShift',       value: 10,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/OpenShift-LogoType.svg/2000px-OpenShift-LogoType.svg.png' },
  { category: 'devops',   title: 'AWS',             value: 50,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png' },
  { category: 'database', title: 'MariaDB',         value: 50,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mariadb-seal-browntext.svg/2000px-Mariadb-seal-browntext.svg.png' },
  { category: 'database', title: 'MySQL',           value: 50,  thumbnail: 'https://cdn.worldvectorlogo.com/logos/mysql.svg' },
  { category: 'database', title: 'PostgreSQL',      value: 50,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2000px-Postgresql_elephant.svg.png' },
  { category: 'backend',  title: 'Laravel',         value: 60,  thumbnail: 'http://logonoid.com/images/laravel-logo.png' },
  { category: 'backend',  title: 'Rails',           value: 80,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2000px-Ruby_logo.svg.png' },
  { category: 'backend',  title: 'NodeJS',          value: 60,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png' },
  { category: 'backend',  title: 'Flask',           value: 50,  thumbnail: 'https://cdn.worldvectorlogo.com/logos/flask.svg' },
  { category: 'frontend', title: 'ReactJS',         value: 100, thumbnail: 'https://images.codedaily.io/icons/react.svg' },
  { category: 'frontend', title: 'Redux',           value: 100, thumbnail: 'https://cdn-images-1.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png' },
  { category: 'frontend', title: 'JQuery',          value: 80,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JQuery_logo_text.svg/2000px-JQuery_logo_text.svg.png' },
  { category: 'frontend', title: 'PixiJS',          value: 50,  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsEOMCzJyFyYaGeA6tZTwPOKzoO7Xm7-AdR_7uz6_zk7pfnO9' },
  { category: 'frontend', title: 'Bootstrap 4',     value: 100, thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
  { category: 'frontend', title: 'Bulma',           value: 100, thumbnail: 'https://www.saashub.com/images/app/service_logos/6/4ad2b9991817/large.png?1525414082' },
  { category: 'frontend', title: 'SASS',            value: 90,  thumbnail: 'https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png' },
  { category: 'design',   title: 'Sketch',          value: 50,  thumbnail: 'https://www.sketch.com/images/pages/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png' },
  { category: 'design',   title: 'Material Design', value: 50,  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/2000px-Google_Material_Design_Logo.svg.png' },
  { category: 'mobile',   title: 'React Native',    value: 60,  thumbnail: 'https://images.codedaily.io/icons/react.svg' },
  { category: 'misc',     title: 'SketchUp',        value: 30,  thumbnail: 'https://seeklogo.com/images/S/sketchup-logo-5248E6166E-seeklogo.com.png' },
  { category: 'misc',     title: 'Arduino',         value: 30,  thumbnail: 'https://seeklogo.com/images/A/arduino-logo-BC7CBC1DAA-seeklogo.com.png' },
  { category: 'misc',     title: '3D print',        value: 50,  thumbnail: 'https://d30y9cdsu7xlg0.cloudfront.net/png/62251-200.png' },
]

const Skills = () => {
  const { t, i18n } = useTranslation('skills')
  const containerRef = useRef(null)
  const d3Variables = useRef({})
  useEffect(() => {
    // inspired by https://github.com/trongthanh/techstack
    let {
      svg,
      width,
      height,
      centerX,
      centerY,
      strength,
      focusedNode,
      format,
      scaleColor,
      pack,
      forceCollide,
      simulation,
      root
    } = d3Variables.current
    svg = d3.select('svg')
    width = containerRef.current.clientWidth // get width in pixels
    height = containerRef.current.clientHeight
    centerX = width * 0.5
    centerY = height * 0.5
    strength = 0.05
    format = d3.format(',d')
    scaleColor = d3.scaleOrdinal(d3.schemeCategory10)
    // use pack to calculate radius of the circle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pack = d3.pack()
      .size([width , height ])
      .padding(1.5)
    forceCollide = d3.forceCollide(d => d.r + 1)
    // use the force
    // eslint-disable-next-line react-hooks/exhaustive-deps
    simulation = d3.forceSimulation()
      // .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody())
      .force('collide', forceCollide)
      // .force('center', d3.forceCenter(centerX, centerY))
      .force('x', d3.forceX(centerX ).strength(strength))
      .force('y', d3.forceY(centerY ).strength(strength))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    root = d3.hierarchy({ children: skillSet })
      .sum(d => d.value)
    // we use pack() to automatically calculate radius conveniently only
    // and get only the leaves
		let nodes = pack(root).leaves().map(node => {
			const data = node.data
			return {
				x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
				y: centerY + (node.y - centerY) * 3,
				r: 0, // for tweening
				radius: node.r, //original radius
				id: data.category + '.' + (data.title.replace(/\s/g, '-')),
				category: data.category,
				title: data.title,
				value: data.value,
				icon: data.thumbnail,
				desc: data.desc,
			}
		})
		simulation.nodes(nodes).on('tick', ticked)
		svg.style('background-color', '#eee')
		let node = svg.selectAll('.node')
			.data(nodes)
			.enter().append('g')
			.attr('class', 'node')
			.call(d3.drag()
				.on('start', (d) => {
					if (!d3.event.active) simulation.alphaTarget(0.2).restart()
					d.fx = d.x
					d.fy = d.y
				})
				.on('drag', (d) => {
					d.fx = d3.event.x
					d.fy = d3.event.y
				})
				.on('end', (d) => {
					if (!d3.event.active) simulation.alphaTarget(0)
					d.fx = null
					d.fy = null
				}))
		node.append('circle')
			.attr('id', d => d.id)
			.attr('r', 0)
			.style('fill', d => scaleColor(d.category))
			.transition().duration(2000).ease(d3.easeElasticOut)
				.tween('circleIn', (d) => {
					let i = d3.interpolateNumber(0, d.radius * 0.7)
					return (t) => {
						d.r = i(t)
						simulation.force('collide', forceCollide)
					}
				})
		node.append('clipPath')
			.attr('id', d => `clip-${d.id}`)
			.append('use')
			.attr('xlink:href', d => `#${d.id}`)
		// display image as circle icon
		node
			.append('image')
			.classed('node-icon', true)
			.attr('clip-path', d => `url(#clip-${d.id})`)
			.attr('xlink:href', d => d.icon)
			.attr('x', d => - d.radius * 0.4)
			.attr('y', d => - d.radius * 0.4)
			.attr('height', d => d.radius * 2 * 0.4)
			.attr('width', d => d.radius * 2 * 0.4)
		node.append('title')
			.text(d => (d.category + '::' + d.title + '\n' + format(d.value)))

		let infoBox = node.append('foreignObject')
			.classed('circle-overlay hidden', true)
			.attr('x', -width * 0.5 * 0.1)
			.attr('y', -height * 0.5 * 0.1)
			.attr('height', height * 0.1)
			.attr('width', width * 0.1)
				.append('xhtml:div')
        .classed('circle-overlay__inner', true)
    infoBox.append('h2')
      .classed('circle-overlay__title', true)
      .text(d => d.title)
		d3.select(document).on('click', () => {
			let target = d3.event.target
			// check if click on document but not on the circle overlay
			if (!target.closest('#circle-overlay') && focusedNode) {
				focusedNode.fx = null
				focusedNode.fy = null
				simulation.alphaTarget(0.2).restart()
				d3.transition().duration(2000).ease(d3.easePolyOut)
					.tween('moveOut', function () {
						console.log('tweenMoveOut', focusedNode)
						let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius)
						return function (t) {
							focusedNode.r = ir(t)
							simulation.force('collide', forceCollide)
						}
					})
					.on('end', () => {
						focusedNode = null
						simulation.alphaTarget(0)
					})
					.on('interrupt', () => {
						simulation.alphaTarget(0)
					})
				// hide all circle-overlay
				d3.selectAll('.circle-overlay').classed('hidden', true)
				d3.selectAll('.node-icon').classed('node-icon--faded', false)
			}
		})
		function ticked() {
			node
				.attr('transform', d => `translate(${d.x},${d.y})`)
				.select('circle')
					.attr('r', d => d.r)
    }
    d3Variables.current = {
      ...d3Variables.current,
      svg,
      width,
      height,
      centerX,
      centerY,
      strength,
      focusedNode,
      format,
      scaleColor,
      pack,
      forceCollide,
      simulation,
      root,
      node,
    }
  }, [])
  useEffect(() => {
    d3.select('#legend').remove()
    let { scaleColor, svg, node } = d3Variables.current
    scaleColor = d3.scaleOrdinal(d3.schemeCategory10)
    node.style('fill', d => scaleColor(t(`category.${d.category}`)))
    const legendOrdinal = d3legend.legendColor()
      .scale(scaleColor)
      .shape('circle')
    svg.append('g')
      .classed('legend-color', true)
      .attr('id', 'legend')
      .attr('text-anchor', 'start')
      .attr('transform','translate(20,30)')
      .style('font-size','1rem')
      .call(legendOrdinal)
    d3Variables.current = {
      ...d3Variables.current,
      svg,
      scaleColor,
      node,
    }
  }, [t, i18n.language])
  return (
    <div className='container px-3 py-5 p-md-5 skills main-content'>
      <h1 className='text-center text-md-left weight-bold'>{ t('title') }</h1>
      <div className='chart-container' ref={containerRef}>
        <svg width="100%" height="100%" textAnchor="middle" />
      </div>
    </div>
  )
}

export default Skills
