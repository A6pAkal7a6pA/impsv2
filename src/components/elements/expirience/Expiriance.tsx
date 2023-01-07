import React from 'react'
import './Expirience.scss'
import { Color, Title } from '../../ui/title/Title'
import allodsImg from '../../../assets/expirience/games/gm1.png'
import shattleImg from '../../../assets/expirience/games/gm2.png'
import skyForgeImg from '../../../assets/expirience/games/gm3.png'
import untoldImg from '../../../assets/expirience/games/gm4.png'
import { SectionProps } from '../../../data'

const importAll = (context: __WebpackModuleApi.RequireContext) => {
  const images: string[] = []
  context.keys().map((item: any) => images.push(context(item)))
  return images
}

const companies = importAll(
  require.context(
    '../../../assets/expirience/companies',
    false,
    /\.(png|jpe?g|svg)$/
  )
)

const games = [
  {
    img: allodsImg
  },
  {
    img: shattleImg,
    content: [
      {
        title: 'MAU:',
        text: '1 000 000 +'
      },
      {
        title: 'LTV:',
        text: '100$'
      }
    ]
  },
  {
    img: skyForgeImg,
    content: [
      {
        title: 'MAU:',
        text: '500 000 +'
      },
      {
        title: 'LTV:',
        text: '250$'
      }
    ]
  },
  {
    img: untoldImg
  }
]

const texts = [
  'Over 15 years of experience in game development and enterprise',
  'Experience working on complex projects such as MMORPG',
  'Experience in leading GameDev company',
  'In-house development'
]

export const Expirience = ({ idName }: SectionProps) => {
  return (
    <div className="expirience" id="Our_expirience">
      <div className="expirience__inner container">
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
        <div className="expirience__companies">
          {companies.map((company, index) => (
            <div key={index} className="expirience__company">
              <img
                src={company}
                alt="company"
                className="expirience__company-img"
              />
            </div>
          ))}
        </div>
        <div className="expirience-game">
          {games.map((game, index) => (
            <div key={index} className="expirience-game__item">
              <div className="expirience-game__image">
                <img
                  src={game.img}
                  alt="game"
                  className="expirience-game__img"
                />
              </div>
              <div className="expirience-game__content">
                {game.content &&
                  game.content.map((content, index) => (
                    <div key={index} className="expirience-game__element">
                      <span className="expirience-game__title">
                        {content.title}
                      </span>
                      <span className="expirience-game__text">
                        {content.text}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
