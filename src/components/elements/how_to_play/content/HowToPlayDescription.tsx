import React from 'react'
import { persons } from './HowToPlaySlider'
import { useSwiper, useSwiperSlide } from 'swiper/react'
import { useEffect } from 'react'

export const HowToPlayDescription = (props: any) => {
  console.log('desc')
  return (
    <div className="play-description">
      <div className="play-description__inner">
        <div className="play-description__item">
          <div className="play-description__title">
            <img
              src={persons[props.swiperIndex].iconImgActive}
              alt={persons[props.swiperIndex].person}
              className="play-description__title-img"
            />
            <div
              className={`play-description__title-text play-description__title-text-${
                persons[props.swiperIndex].person
              }`}
            >
              {persons[props.swiperIndex].person}
            </div>
          </div>
          <div className="play-description__text">
            {persons[props.swiperIndex].description}
          </div>
        </div>
      </div>
    </div>
  )
}
