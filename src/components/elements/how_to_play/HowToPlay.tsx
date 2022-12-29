import React from 'react'
import warriorIconDefault from '../../../assets/heroes/warrior-icon-default.png'
import rogueIconDefault from '../../../assets/heroes/rogue-icon-default.png'
import mageIconDefault from '../../../assets/heroes/mage-icon-default.png'
import warriorIconActive from '../../../assets/heroes/warrior-icon-active.png'
import rogueIconActive from '../../../assets/heroes/rogue-icon-active.png'
import mageIconActive from '../../../assets/heroes/mage-icon-active.png'
import './HowToPlay.scss'
import { HowToPlaySlider } from './slider/HowToPlaySlider'

export const HowToPlay = () => {
  return (
    <div className="play">
      <div className="play__inner">
        <h4 className="play__subtitle">Your heroes are your pride! </h4>
        <h2 className="play__title"> Fearless imps with unrivaled skill.</h2>
        <div className="play-icons">
          <div className="play-icons__item play-icons__item-warrior">
            <img src={warriorIconActive} alt="warrior" />
          </div>
          <div className="play-icons__item play-icons__item-rogue">
            <img src={rogueIconDefault} alt="rogue" />
          </div>
          <div className="play-icons__item play-icons__item-mage">
            <img src={mageIconDefault} alt="mage" />
          </div>
        </div>
        <HowToPlaySlider />
        <div className="play-description">
          <div className="play-description__inner">
            <div className="play-description__item">
              <div className="play-description__title">
                <img
                  src={warriorIconActive}
                  alt="warrior"
                  className="play-description__title-img"
                />
                <div className="play-description__title-text">Warrior</div>
              </div>
              <div className="play-description__text">
                Warrior - professional fighters, have a lot of HP, good
                protection against physical attacks and high damage, but they
                are quite slow, have poor protection against magic, and have a
                low chance to avoid attacks.
              </div>
            </div>
            <div className="play-description__item">
              <div className="play-description__title">
                <img
                  src={rogueIconActive}
                  alt="rogue"
                  className="play-description__title-img"
                />
                <div className="play-description__title-text">Rogue</div>
              </div>
              <div className="play-description__text">
                Rogue - agile and evasive, greedy for money, and have a keen
                eye. In a head-on fight, they rely on dodges and rare but strong
                blows to enemies&apos; weak points.
              </div>
            </div>
            <div className="play-description__item">
              <div className="play-description__title">
                <img
                  src={mageIconActive}
                  alt="mage"
                  className="play-description__title-img"
                />
                <div className="play-description__title-text">Mage</div>
              </div>
              <div className="play-description__text">
                Mage - heroes with huge magic damage, a variety of abilities,
                and high magic defense, but they have little health, physical
                defense and are not very dexterous.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
