import React from 'react'
import { EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Person } from '../person/Person'
import { persons } from '../Team'
import './SliderTeamList.scss'

export const SliderTeamList = () => {
  return (
    <Swiper
      className="team__people"
      modules={[EffectCoverflow]}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 180,
        modifier: 1,
        slideShadows: false
      }}
      spaceBetween={40}
      slidesPerView="auto"
      centeredSlides={true}
      loop={true}
      grabCursor={true}
      slidePrevClass="team__slide-prev"
      slideNextClass="team__slide-next"
      slideActiveClass="team__slide-active"
    >
      {persons.map((person, index) => (
        <SwiperSlide className="team__slide" key={index}>
          <Person
            linkedIn={person.linkedIn}
            name={person.name}
            position={person.position}
            photo={person.photo}
            photoWebp={person.photoWebp}
            descriptions={person.descriptions}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
