import React, { useState } from 'react'
import warriorIconDefault from '../../../assets/heroes/warrior-icon-default.png'
import rogueIconDefault from '../../../assets/heroes/rogue-icon-default.png'
import mageIconDefault from '../../../assets/heroes/mage-icon-default.png'
import warriorIconActive from '../../../assets/heroes/warrior-icon-active.png'
import rogueIconActive from '../../../assets/heroes/rogue-icon-active.png'
import mageIconActive from '../../../assets/heroes/mage-icon-active.png'
import { EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/effect-coverflow'
import warrior from '../../../assets/heroes/axe.png'
import rogue from '../../../assets/heroes/rogue.png'
import mage from '../../../assets/heroes/mage.png'
import './HowToPlay.scss'

const persons = [
  {
    person: 'Warrior',
    mainImg: warrior,
    iconImgDefault: warriorIconDefault,
    iconImgActive: warriorIconActive,
    description:
      'Warrior - professional fighters, have a lot of HP, good protection against physical attacks and high damage, but they are quite slow, have poor protection against magic, and have a low chance to avoid attacks.'
  },
  {
    person: 'Rogue',
    mainImg: rogue,
    iconImgDefault: rogueIconDefault,
    iconImgActive: rogueIconActive,
    description:
      'Rogue - agile and evasive, greedy for money, and have a keen eye. In a head-on fight, they rely on dodges and rare but strong blows to enemies&apos; weak points.'
  },
  {
    person: 'Mage',
    mainImg: mage,
    iconImgDefault: mageIconDefault,
    iconImgActive: mageIconActive,
    description:
      'Mage - heroes with huge magic damage, a variety of abilities, and high magic defense, but they have little health, physical defense and are not very dexterous.'
  }
]

export const HowToPlay = () => {
  const [person, setPerson] = useState('warrior')
  return (
    <div className="play">
      <div className="play__inner">
        <h4 className="play__subtitle">Your heroes are your pride! </h4>
        <h2 className="play__title"> Fearless imps with unrivaled skill.</h2>
        <div className="play-icons">
          {persons.map((el, index) => (
            <div
              key={index}
              className={`play-icons__item play-icons__item-${person}_active`}
            >
              <img src={el.iconImgDefault} alt={el.person} />
            </div>
          ))}
        </div>

        <Swiper
          className="play-slider"
          modules={[EffectCoverflow]}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 430,
            modifier: 1,
            slideShadows: true
          }}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          height={460}
          watchSlidesProgress={true}
        >
          {persons.map((el, index) => (
            <SwiperSlide
              key={index}
              className={`play-slider__slide play-slider__slide-${el.person}`}
            >
              <img
                className="play-slider__slide-img"
                src={el.mainImg}
                alt={el.person}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="play-description">
          <div className="play-description__inner">
            {persons.map((el, index) => (
              <div key={index} className="play-description__item">
                <div className="play-description__title">
                  <img
                    src={el.iconImgDefault}
                    alt={el.person}
                    className="play-description__title-img"
                  />
                  <div className="play-description__title-text">
                    {el.person}
                  </div>
                </div>
                <div className="play-description__text">{el.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
