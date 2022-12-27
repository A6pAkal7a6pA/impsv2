import React from 'react'
import './ModalItem.scss'

interface ModalItemProps {
  title: string
}

export const ModalItem = ({ title }: ModalItemProps) => {
  return (
    <li className="modal__item">
      <a href={title.replace(' ', '_')} className="modal__link">
        {title}
      </a>
    </li>
  )
}
