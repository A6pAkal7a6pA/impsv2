import React, { useState } from 'react'
import warriorIconDefault from '../../../assets/heroes/warrior-icon-default.png'
import rogueIconDefault from '../../../assets/heroes/rogue-icon-default.png'
import mageIconDefault from '../../../assets/heroes/mage-icon-default.png'
import warriorIconActive from '../../../assets/heroes/warrior-icon-active.png'
import rogueIconActive from '../../../assets/heroes/rogue-icon-active.png'
import mageIconActive from '../../../assets/heroes/mage-icon-active.png'
import { EffectCoverflow, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/navigation'
import warrior from '../../../assets/heroes/axe.png'
import rogue from '../../../assets/heroes/rogue.png'
import mage from '../../../assets/heroes/mage.png'
import './HowToPlay.scss'
import { Arrows } from '../../ui/slider/arrows/Arrows'

const persons = [
  {
    person: 'warrior',
    mainImg: warrior,
    iconImgDefault: warriorIconDefault,
    iconImgActive: warriorIconActive,
    description:
      'Warrior - professional fighters, have a lot of HP, good protection against physical attacks and high damage, but they are quite slow, have poor protection against magic, and have a low chance to avoid attacks.'
  },
  {
    person: 'rogue',
    mainImg: rogue,
    iconImgDefault: rogueIconDefault,
    iconImgActive: rogueIconActive,
    description:
      'Rogue - agile and evasive, greedy for money, and have a keen eye. In a head-on fight, they rely on dodges and rare but strong blows to enemies&apos; weak points.'
  },
  {
    person: 'mage',
    mainImg: mage,
    iconImgDefault: mageIconDefault,
    iconImgActive: mageIconActive,
    description:
      'Mage - heroes with huge magic damage, a variety of abilities, and high magic defense, but they have little health, physical defense and are not very dexterous.'
  }
]

export const HowToPlay = () => {
  const [person, setPerson] = useState('warrior')
  const isActive = (personElement: string) => person === personElement
  return (
    <div className="play">
      <div className="play__inner">
        <h4 className="play__subtitle">Your heroes are your pride! </h4>
        <h2 className="play__title"> Fearless imps with unrivaled skill.</h2>
        <div className="play-icons">
          {/* {persons.map((el, index) => (
            <div
              key={index}
              className={`play-icons__item${
                isActive(el.person)
                  ? ` play-icons__item-active play-icons__item-${person}_active`
                  : ''
              }`}
            >
              <img
                src={isActive(el.person) ? el.iconImgActive : el.iconImgDefault}
                alt={el.person}
              />
            </div>
          ))} */}
        </div>
        <div className="play__content">
          <Arrows />
          <Swiper
            className="play-slider"
            modules={[EffectCoverflow, Navigation, Pagination]}
            effect={'coverflow'}
            navigation={{
              prevEl: '.play .arrows__item-prev',
              nextEl: '.play .arrows__item-next'
            }}
            pagination={{
              clickable: true,
              type: 'bullets',
              bulletClass: 'play-icons__item',
              bulletActiveClass: 'play-icons__item-active',
              el: '.play-icons',
              renderBullet: function (index, className): string {
                return `<div class="${className} ${className}-${persons[index].person}"></div>`
              }
            }}
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
            height={540}
            watchSlidesProgress={true}
            onSlideChange={(swiper) => {
              setPerson(persons[swiper.realIndex].person)
            }}
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
              {persons
                .filter((el) => isActive(el.person))
                .map((el, index) => (
                  <div key={index} className="play-description__item">
                    <div className="play-description__title">
                      <img
                        src={el.iconImgActive}
                        alt={el.person}
                        className="play-description__title-img"
                      />
                      <div
                        className={`play-description__title-text play-description__title-text-${el.person}`}
                      >
                        {el.person}
                      </div>
                    </div>
                    <div className="play-description__text">
                      {el.description}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
