import React, { useEffect, useRef } from 'react'
import { Color, Title } from '../../ui/title/Title'
import stepImg1 from '../../../assets/goal/goal1.png'
import stepImg2 from '../../../assets/goal/goal2.png'
import stepImg3 from '../../../assets/goal/goal3.png'
import stepImg4 from '../../../assets/goal/goal4.png'
import stepImg5 from '../../../assets/goal/goal5.png'
import stepImg6 from '../../../assets/goal/goal6.png'
import stepImg7 from '../../../assets/goal/goal7.png'
import stepImg1Webp from '../../../assets/goal/goal1.webp'
import stepImg2Webp from '../../../assets/goal/goal2.webp'
import stepImg3Webp from '../../../assets/goal/goal3.webp'
import stepImg4Webp from '../../../assets/goal/goal4.webp'
import stepImg5Webp from '../../../assets/goal/goal5.webp'
import stepImg6Webp from '../../../assets/goal/goal6.webp'
import stepImg7Webp from '../../../assets/goal/goal7.webp'
import './Goal.scss'
import { SectionProps } from '../../../data'
import Image from 'react-image-webp'
import { useIntersection } from '../../../hooks'

const steps = [
  {
    img: stepImg1,
    imgWebp: stepImg1Webp,
    text: 'Purchase or rent of the character',
    color: 'lightblue'
  },
  {
    img: stepImg2,
    imgWebp: stepImg2Webp,
    text: 'Misson copletion',
    color: 'yellow'
  },
  {
    img: stepImg3,
    imgWebp: stepImg3Webp,
    text: 'Joining the clan',
    color: 'brown'
  },
  {
    img: stepImg4,
    imgWebp: stepImg4Webp,
    text: 'The capture of the castle and the rare resoursess/Trade',
    color: 'grey'
  },
  {
    img: stepImg5,
    imgWebp: stepImg5Webp,
    text: 'Clan alliance formation',
    color: 'green'
  },
  {
    img: stepImg6,
    imgWebp: stepImg6Webp,
    text: 'Crashing raid bosses',
    color: 'lightgreen'
  },
  {
    img: stepImg7,
    imgWebp: stepImg7Webp,
    text: 'Capture of the territories and castles',
    color: 'blue'
  }
]

export const Goal = ({ idName }: SectionProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const pointsRef = useRef<(HTMLDivElement | null)[]>([])
  const isVisible = useIntersection(ref, '0px')

  useEffect(() => {
    pointsRef.current.forEach((el, i) => {
      if (el === null) return
      let index = 0
      setInterval(() => {
        if (index <= steps.length - (steps.length - i)) {
          el.children[index].classList.add('goal-road-item__point-active')
        }
        index++
      }, 1000)
    })
  }, [pointsRef])
  return (
    <section className="goal" id={idName} data-aos="fade-up">
      <div className="goal__inner">
        <div className="goal__subtitle">How to play</div>
        <Title color={Color.GOLD} text="The goal is the territory domination" />
        <div ref={ref} className="goal-road">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`goal-road-item goal-road-item-${step.color}`}
            >
              <div className="goal-road-item__inner">
                <div className="goal-road-item__image">
                  <Image
                    src={step.img}
                    webp={step.imgWebp}
                    alt="step"
                    className="goal-road-item__image-img"
                  />
                </div>
                <div className="goal-road-item__content">
                  <div
                    ref={(el) => pointsRef.current.push(el)}
                    className="goal-road-item__points"
                  >
                    {steps.map((_, index) => (
                      <div key={index} className="goal-road-item__point"></div>
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
    </section>
  )
}
