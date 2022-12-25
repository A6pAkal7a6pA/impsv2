import React from 'react'
import './Partner'

interface PartnerProps {
  img: string
}

export const Partner = ({ img }: PartnerProps) => {
  return (
    <div className="partners__item">
      <img src={img} alt="partner" className="partners__img" />
    </div>
  )
}
