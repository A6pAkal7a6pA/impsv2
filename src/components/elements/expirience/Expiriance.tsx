import React from 'react'
import './Expirience.scss'
import { Color, Title } from '../../ui/title/Title'

const texts = [
  'Over 15 years of experience in game development and enterprise',
  'Experience working on complex projects such as MMORPG',
  'Experience in leading GameDev company',
  'In-house development'
]

export const Expirience = () => {
  return (
    <div className="expirience">
      <div className="expirience__inner">
        <Title color={Color.BLUE} text="Our expirience" />
        <div className="expirience__subtitle">
          Besides the player’s skill, Token is the only opportunity to gain
          advantage in the game.
        </div>
        <div className="expirience__items">
          {texts.map((text, index) => (
            <div key={index} className="expirience__item">
              <div className="expirience__number">{`0${index + 1}`}</div>
              <div className="expirience__text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
