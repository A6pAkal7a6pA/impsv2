import { useEffect, useState } from 'react'
import warriorIconDefault from '../../../../assets/heroes/warrior-icon-default.png'
import rogueIconDefault from '../../../../assets/heroes/rogue-icon-default.png'
import mageIconDefault from '../../../../assets/heroes/mage-icon-default.png'
import warriorIconActive from '../../../../assets/heroes/warrior-icon-active.png'
import rogueIconActive from '../../../../assets/heroes/rogue-icon-active.png'
import mageIconActive from '../../../../assets/heroes/mage-icon-active.png'
import { EffectCoverflow, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/navigation'
import warrior from '../../../../assets/heroes/axe.png'
import rogue from '../../../../assets/heroes/rogue.png'
import mage from '../../../../assets/heroes/mage.png'
import warriorWebp from '../../../../assets/heroes/axe.webp'
import rogueWebp from '../../../../assets/heroes/rogue.webp'
import mageWebp from '../../../../assets/heroes/mage.webp'
import './../HowToPlay.scss'
import Image from 'react-image-webp'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { Arrows } from '../../../ui/slider/arrows/Arrows'
import { HowToPlayDescription } from './HowToPlayDescription'
import { useRef } from 'react'

export const persons = [
  {
    person: 'warrior',
    mainImg: warrior,
    mainImgWebp: warriorWebp,
    iconImgDefault: warriorIconDefault,
    iconImgActive: warriorIconActive,
    description:
      'Warrior - professional fighters, have a lot of HP, good protection against physical attacks and high damage, but they are quite slow, have poor protection against magic, and have a low chance to avoid attacks.'
  },
  {
    person: 'rogue',
    mainImg: rogue,
    mainImgWebp: rogueWebp,
    iconImgDefault: rogueIconDefault,
    iconImgActive: rogueIconActive,
    description:
      'Rogue - agile and evasive, greedy for money, and have a keen eye. In a head-on fight, they rely on dodges and rare but strong blows to enemies&apos; weak points.'
  },
  {
    person: 'mage',
    mainImg: mage,
    mainImgWebp: mageWebp,
    iconImgDefault: mageIconDefault,
    iconImgActive: mageIconActive,
    description:
      'Mage - heroes with huge magic damage, a variety of abilities, and high magic defense, but they have little health, physical defense and are not very dexterous.'
  }
]
export const HowToPlaySlider = () => {
  const [swiperIndex, setSwiperIndex] = useState(0)
  console.log('rendered')
  return (
    <div className="play__content">
      <Arrows />
      <Swiper
        className={`play-slider${isWebpSupported() ? ' webp' : ''}`}
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
          slideShadows: false
        }}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        height={540}
        grabCursor={true}
        onRealIndexChange={(swiper) => setSwiperIndex(swiper.realIndex)}
      >
        {persons.map((el, index) => (
          <SwiperSlide
            key={index}
            className={`play-slider__slide play-slider__slide-${el.person}`}
          >
            <Image
              className="play-slider__slide-img"
              src={el.mainImg}
              webp={el.mainImgWebp}
              alt={el.person}
            />
          </SwiperSlide>
        ))}
        <HowToPlayDescription swiperIndex={swiperIndex} />
      </Swiper>
    </div>
  )
}
