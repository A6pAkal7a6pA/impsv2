import React from 'react'
import { Color, Title } from '../../ui/title/Title'
import stepImg1 from '../../../assets/goal/goal1.png'
import stepImg2 from '../../../assets/goal/goal2.png'
import stepImg3 from '../../../assets/goal/goal3.png'
import stepImg4 from '../../../assets/goal/goal4.png'
import stepImg5 from '../../../assets/goal/goal5.png'
import stepImg6 from '../../../assets/goal/goal6.png'
import stepImg7 from '../../../assets/goal/goal7.png'
import './Goal.scss'

const steps = [
  {
    img: stepImg1,
    text: 'Purchase or rent of the character'
  },
  {
    img: stepImg2,
    text: 'Misson copletion'
  },
  {
    img: stepImg3,
    text: 'Joining the clan'
  },
  {
    img: stepImg4,
    text: 'The capture of the castle and the rare resoursess/Trade'
  },
  {
    img: stepImg5,
    text: 'Clan alliance formation'
  },
  {
    img: stepImg6,
    text: 'Crashing raid bosses'
  },
  {
    img: stepImg7,
    text: 'Capture of the territories and castles'
  }
]

export const Goal = () => {
  return (
    <div className="goal">
      <div className="goal__inner">
        <div className="goal__subtitle">How to play</div>
        <Title color={Color.GOLD} text="The goal is the territory domination" />
        <div className="goal-road">
          {steps.map((step, i) => (
            <div key={i} className="goal-road-item">
              <div className="goal-road-item__inner">
                <div className="goal-road-item__image">
                  <img
                    src={step.img}
                    alt="step"
                    className="goal-road-item__image-img"
                  />
                </div>
                <div className="goal-road-item__content">
                  <div className="goal-road-item__points">
                    <div className="goal-road-item__point"></div>
                  </div>
                  <div className="goal-road-item__title">{`Step ${i + 1}`}</div>
                  <div className="goal-road-item__text">{step.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
