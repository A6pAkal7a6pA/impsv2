import { useState } from 'react'
import { persons } from './HowToPlaySlider'
import { useSwiper } from 'swiper/react'

export const HowToPlayDescription = () => {
  const [swiperIndex, setSwiperIndex] = useState(0)
  useSwiper().on('realIndexChange', (swiper) => {
    setSwiperIndex(swiper.realIndex)
  })
  return (
    <div className="play__descriptions">
      {persons.map((hero, index) => (
        <div
          key={index}
          className={`play-description${
            index === swiperIndex ? ' play-description-active' : ''
          }`}
        >
          <div className="play-description__inner">
            <div className="play-description__item">
              <div className="play-description__title">
                <img
                  src={hero.iconImgActive}
                  alt={hero.person}
                  className="play-description__title-img"
                />
                <div
                  className={`play-description__title-text play-description__title-text-${hero.person}`}
                >
                  {hero.person}
                </div>
              </div>
              <div className="play-description__text">{hero.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
