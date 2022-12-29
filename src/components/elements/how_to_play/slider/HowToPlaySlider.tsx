import React from 'react'
import { Navigation, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import warrior from '../../../../assets/heroes/axe.png'
import rogue from '../../../../assets/heroes/rogue.png'
import mage from '../../../../assets/heroes/mage.png'
import './HowToPlaySlider.scss'

export const HowToPlaySlider = () => {
  return (
    <Swiper
      className="play-slider"
      modules={[EffectCoverflow]}
      slidesPerView="auto"
      centeredSlides={true}
      loop={true}
    >
      <SwiperSlide className="play-slider__slide">
        <img className="play-slider__slide-img" src={warrior} alt="warrior" />
      </SwiperSlide>
      <SwiperSlide className="play-slider__slide">
        <img className="play-slider__slide-img" src={rogue} alt="warrior" />
      </SwiperSlide>
      <SwiperSlide className="play-slider__slide">
        <img className="play-slider__slide-img" src={mage} alt="warrior" />
      </SwiperSlide>
    </Swiper>
  )
}
