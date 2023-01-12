import React, { useState } from 'react'
import './Person.scss'
import linkedInImg from '../../../../assets/icons/linkedin.svg'

export interface PersonProps {
  name: string
  position: string
  linkedIn: string
  photo: string
  descriptions: string[]
}

export const Person = ({
  name,
  position,
  descriptions,
  linkedIn,
  photo
}: PersonProps) => {
  return (
    <a href={linkedIn} target="_blank" className="person" rel="noreferrer">
      <div className="person__image">
        <img src={photo} alt="person" className="person__image-photo" />
        <img
          className="person__image-linkedin"
          src={linkedInImg}
          alt="linkedIn"
        />
      </div>
      <div className="person__info">
        <div className="person__name">{name}</div>
        <div className="person__position">{position}</div>
        <ul className="person-description">
          {descriptions.map((description, index) => (
            <li key={index} className="person-description__item">
              {description}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}
