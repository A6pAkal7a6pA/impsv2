import React from 'react'
import { navigationMenu } from '../../../data'
import './Navbar.scss'
import { useState } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState('Home')
  return (
    <div className="navbar">
      <div className="navbar__inner">
        {navigationMenu.map((item, index) => (
          <div
            key={index}
            className={`navbar__item${
              active === item ? ' navbar__item-active' : ''
            }`}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
