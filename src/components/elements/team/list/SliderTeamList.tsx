import React from 'react'
import { EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Person } from '../person/Person'
import { persons } from '../Team'

export const SliderTeamList = () => {
  return (
    <Swiper
      className="team__people"
      modules={[EffectCoverflow]}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 430,
        modifier: 1,
        slideShadows: false
      }}
      slidesPerView="auto"
      centeredSlides={true}
      loop={true}
      grabCursor={true}
    >
      {persons.map((person, index) => (
        <SwiperSlide className="team__slide" key={index}>
          <Person
            linkedIn={person.linkedIn}
            name={person.name}
            position={person.position}
            photo={person.photo}
            descriptions={person.descriptions}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
