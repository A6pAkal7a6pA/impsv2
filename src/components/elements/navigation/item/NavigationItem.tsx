import React from 'react'
import './NavigationItem.scss'

interface NavigationItemProps {
  title: string
}

export const NavigationItem = ({ title }: NavigationItemProps) => {
  return (
    <li className="menu__item">
      <a href={`#${title.replace(' ', '_')}`} className="menu__link">
        {title}
      </a>
    </li>
  )
}
