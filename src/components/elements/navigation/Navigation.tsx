import React from 'react'
import { NavigationItem } from './item/NavigationItem'
import './Navigation.scss'

const menu = ['Home', 'Our missons', 'How to play', 'Roadmap']

export const Navigation = () => {
  return (
    <nav className="menu">
      <div className="menu__burger">
        <span></span>
      </div>
      <ul className="menu__list">
        {menu.map((title, index) => (
          <NavigationItem title={title} key={index} />
        ))}
      </ul>
    </nav>
  )
}
