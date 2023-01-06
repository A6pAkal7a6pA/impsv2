import React from 'react'
import IMPTokenImg from '../../../assets/tokenomic/impToken.svg'
import InGameVaultImg from '../../../assets/tokenomic/gameVault.svg'
import ClanCastleImg from '../../../assets/tokenomic/clanCastle.svg'
import { Button } from '../../ui/button/Button'
import './Tokenomic.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/scss'
import { Arrows } from '../../ui/slider/arrows/Arrows'

const tokenomic = [
  {
    title: 'IMP Token',
    subtitle:
      'Besides the player’s skill, Token is the only opportunity to gain advantage in the game.',
    img: IMPTokenImg
  },
  {
    title: 'In game vault',
    img: InGameVaultImg
  },
  {
    title: 'Clan Castle',
    img: ClanCastleImg
  }
]

export const Tokenomic = () => {
  return (
    <div className="tokenomic">
      <div className="tokenomic__inner container">
        <div className="tokenomic-switcher">
          <div className="tokenomic-switcher__item tokenomic-switcher__item-active">
            IMP Token
          </div>
          <div className="tokenomic-switcher__item">In game vault</div>
          <div className="tokenomic-switcher__item">Clan Castle</div>
        </div>
        <div className="tokenomic-map">
          <Swiper
            className="tokenomic-map__inner"
            pagination={{
              clickable: true,
              type: 'bullets',
              bulletClass: 'tokenomic-switcher__item',
              bulletActiveClass: 'tokenomic-switcher__item-active',
              el: '.tokenomic-switcher',
              renderBullet: function (index, className): string {
                return `<div class="tokenomic-switcher__item">${tokenomic[index].title}</div>`
              }
            }}
            modules={[Navigation, Pagination]}
            loop
            navigation={{
              prevEl: '.tokenomic .arrows__item-prev',
              nextEl: '.tokenomic .arrows__item-next'
            }}
          >
            <Arrows />
            {tokenomic.map((el, index) => (
              <SwiperSlide key={index} className="tokenomic-map-item">
                <div className="tokenomic-map-item__inner">
                  <h2 className="tokenomic-map-item__title">{el.title}</h2>
                  <div className="tokenomic-map-item__subtitle">
                    {el?.subtitle}
                  </div>
                  <div className="tokenomic-map-item__image">
                    <img
                      src={el.img}
                      alt="map"
                      className="tokenomic-map-item__image-img"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="tokenomic-map__separator"></div>
          <div className="tokenomic-map__buttons">
            <Button link="#" text="Open full Tokenomics" />
            <Button type="green" link="#" text="Buy $IMP" />
          </div>
        </div>
      </div>
    </div>
  )
}
