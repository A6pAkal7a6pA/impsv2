import React from 'react'
import IMPTokenImg from '../../../assets/tokenomic/impToken.svg'
import InGameVaultImg from '../../../assets/tokenomic/gameVault.svg'
import ClanCastleImg from '../../../assets/tokenomic/clanCastle.svg'
import { Button } from '../../ui/button/Button'
import './Tokenomic.scss'

export const Tokenomic = () => {
  return (
    <div className="tokenomic">
      <div className="tokenomic__inner">
        <div className="tokenomic-switcher">
          <div className="tokenomic-switcher__item tokenomic-switcher__item-active">
            IMP Token
          </div>
          <div className="tokenomic-switcher__item">In game vault</div>
          <div className="tokenomic-switcher__item">Clan Castle</div>
        </div>
        <div className="tokenomic-map">
          <div className="tokenomic-map__inner">
            <div className="tokenomic-map-item">
              <div className="tokenomic-map-item__inner">
                <h2 className="tokenomic-map-item__title">IMP Token</h2>
                <div className="tokenomic-map-item__subtitle">
                  Besides the player’s skill, Token is the only opportunity to
                  gain advantage in the game.
                </div>
                <div className="tokenomic-map-item__image">
                  <img
                    src={IMPTokenImg}
                    alt="map"
                    className="tokenomic-map-item__image-img"
                  />
                </div>
              </div>
            </div>
          </div>
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
