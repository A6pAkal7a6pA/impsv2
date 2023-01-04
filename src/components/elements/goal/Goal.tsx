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
    text: 'Purchase or rent of the character',
    color: 'lightblue'
  },
  {
    img: stepImg2,
    text: 'Misson copletion',
    color: 'yellow'
  },
  {
    img: stepImg3,
    text: 'Joining the clan',
    color: 'brown'
  },
  {
    img: stepImg4,
    text: 'The capture of the castle and the rare resoursess/Trade',
    color: 'grey'
  },
  {
    img: stepImg5,
    text: 'Clan alliance formation',
    color: 'green'
  },
  {
    img: stepImg6,
    text: 'Crashing raid bosses',
    color: 'lightgreen'
  },
  {
    img: stepImg7,
    text: 'Capture of the territories and castles',
    color: 'blue'
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
            <div
              key={i}
              className={`goal-road-item goal-road-item-${step.color}`}
            >
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
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`goal-road-item__point ${
                          index <= steps.length - (steps.length - i)
                            ? 'goal-road-item__point-active'
                            : ''
                        }`}
                      ></div>
                    ))}
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

//(7 - index) <= steps.legth
//7 - 2
//7 - 3

//1  7
