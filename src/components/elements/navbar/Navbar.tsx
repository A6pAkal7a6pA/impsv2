import React, { useEffect } from 'react'
import { navigationMenu } from '../../../data'
import './Navbar.scss'
import { useState } from 'react'

export let activeState = 'Home'

export const Navbar = () => {
  const [active, setActive] = useState('Home')
  const navigationHandler = () => {
    const scrollDistance = window.scrollY
    const headerHeight = 119
    document.querySelectorAll('section').forEach((section) => {
      if (section === null) return
      if (
        section.offsetTop - headerHeight <= scrollDistance &&
        section.offsetTop >= scrollDistance - section.offsetTop - headerHeight
      ) {
        setActive(section.id.split('_').join(' '))
      }
    })
  }
  function anchorTransition() {
    document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href')?.substring(1)
        if (blockID === undefined) return
        document.getElementById(blockID)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', navigationHandler)
    anchorTransition()
  }, [])
  activeState = active
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
