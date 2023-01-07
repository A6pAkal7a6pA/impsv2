import React, { useEffect } from 'react'
import { navigationMenu } from '../../../data'
import './Navbar.scss'
import { useState } from 'react'
import { useScrollPosition } from '../../../hooks'

export const Navbar = () => {
  const [active, setActive] = useState('Home')
  const navigationHandler = () => {
    const scrollDistance = window.scrollY
    const section = document.getElementById('Blockchain')
    if (section === null) return
    console.log(section.offsetTop - 119 >= scrollDistance)
    // if (section.offsetTop - 119 >= scrollDistance) {
    //   console.log(section.id)
    // }
  }
  useEffect(() => {
    window.addEventListener('scroll', navigationHandler)
  })
  return (
    <div className="navbar">
      <div className="navbar__inner">
        {navigationMenu.map((item, index) => (
          <a
            href={`#${item.split(' ').join('_')}`}
            key={index}
            className={`navbar__item${
              active === item ? ' navbar__item-active' : ''
            }`}
          >
            <span>{item}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
