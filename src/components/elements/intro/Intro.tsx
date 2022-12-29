import React from 'react'
import { Button } from '../../ui/button/Button'
import { Partners } from '../partners/Partners'
import './Intro.scss'
import { PreTitle } from '../../ui/pre_title/PreTitle'

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__inner">
        <div className="intro__info">
          <PreTitle text="The first NFT" />
          <div className="intro__title">Play-to-Earn WAR Strategy Game</div>
          <div className="intro__subtitle">with Proof of Stake mining</div>
          <div className="intro-comunity">
            <div className="intro-comunity__title">
              Follow our comunity and stay tuned:
            </div>
            <div className="intro-comunity__buttons">
              <Button link="#" text="Telegram" />
              <Button link="#" text="Twitter" />
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </div>
  )
}
