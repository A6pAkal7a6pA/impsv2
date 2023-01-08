import React from 'react'
import { NavigationItem } from './item/NavigationItem'
import './Navigation.scss'

const menu = [
  {
    title: 'Home',
    link: 'Home'
  },
  {
    title: 'Our missions',
    link: 'Blockchain'
  },
  {
    title: 'How to play',
    link: 'Fearless'
  },
  {
    title: 'Roadmap',
    link: 'Roadmap'
  }
]

export const Navigation = () => {
  return (
    <nav className="menu">
      <div className="menu__burger">
        <span></span>
      </div>
      <ul className="menu__list">
        {menu.map((item, index) => (
          <NavigationItem title={item.title} link={item.link} key={index} />
        ))}
      </ul>
    </nav>
  )
}
