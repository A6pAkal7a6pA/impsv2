import React from 'react'
import './SocioItem.scss'

interface SocioItemProps {
  title?: string
  link: string
  imgSrc: string
  withTitle?: boolean
}

export const SocioItem = ({
  title,
  link,
  imgSrc,
  withTitle
}: SocioItemProps) => {
  return (
    <a href={link} target="_blank" className="socio__link" rel="noreferrer">
      {withTitle && <span className="socio__title">{title}</span>}
      <img src={imgSrc} alt={title} />
    </a>
  )
}
