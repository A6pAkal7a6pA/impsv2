import React from 'react'
import oasis from '../../../assets/icons/oasis.svg'
import desktop from '../../../assets/availabiles/monitor.svg'
import tablet from '../../../assets/availabiles/DeviceTabletCamera.svg'
import mobile from '../../../assets/availabiles//DeviceMobileSpeaker.svg'
import browser from '../../../assets/availabiles/Browser.svg'
import './Mission.scss'
import { Color, Title } from '../../ui/title/Title'
import { SectionProps } from '../../../data'

export const Mission = ({ idName }: SectionProps) => {
  return (
    <section className="mission" id={idName}>
      <div className="mission__inner container">
        <Title color={Color.GOLD} text="New blockchain and token are on" />
        <img className="mission__engine" src={oasis} alt="oasis" />
        <div className="mission-info">
          <div className="mission-info__item">
            <div className="mission-info__title">Mass adoption</div>
            <div className="mission-info__text">
              It’s free to play. No NFT required to start Play in Browser or in
              app
            </div>
          </div>
          <div className="mission-info__item">
            <div className="mission-info__title">Fair play</div>
            <div className="mission-info__text">
              No Donate available. Only battle pass can give advantage. Still
              you can trade with other players.
            </div>
          </div>
          <div className="mission-info__item">
            <div className="mission-info__title">DAO Market</div>
            <div className="mission-info__text">
              A closed in-game economy based on a token.
            </div>
          </div>
          <div className="mission-info__item">
            <div className="mission-info__title">Socialization</div>
            <div className="mission-info__text">
              Join Clan and establish Alliances to achieve common goals and slay
              the PVP/PVE opponents.
            </div>
          </div>
        </div>
        <div className="mission-available">
          <div className="mission-available__title">Available on</div>
          <div className="mission-available__items">
            <div className="mission-available__item">
              <img
                className="mission-available__img"
                src={desktop}
                alt="desktop"
              />
            </div>
            <div className="mission-available__item">
              <img
                className="mission-available__img"
                src={tablet}
                alt="tablet"
              />
            </div>
            <div className="mission-available__item">
              <img
                className="mission-available__img"
                src={mobile}
                alt="mobile"
              />
            </div>
            <div className="mission-available__item">
              <img
                className="mission-available__img"
                src={browser}
                alt="browser"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
