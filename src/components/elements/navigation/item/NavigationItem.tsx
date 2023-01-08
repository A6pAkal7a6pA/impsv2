import React from 'react'
import './NavigationItem.scss'
import { activeState } from '../../navbar/Navbar'

interface NavigationItemProps {
  title: string
  link: string
}

export const NavigationItem = ({ title, link }: NavigationItemProps) => {
  return (
    <li
      className={`menu__item${
        activeState === link ? ' menu__item-active' : ''
      }`}
    >
      <a href={`#${link}`} className="menu__link">
        {title}
      </a>
    </li>
  )
}
