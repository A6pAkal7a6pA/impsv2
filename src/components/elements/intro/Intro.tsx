import React from 'react'
import { Button } from '../../ui/button/Button'
import { Partners } from '../partners/Partners'
import './Intro.scss'
import { PreTitle } from '../../ui/pre_title/PreTitle'
import { SectionProps, links } from '../../../data'
import bg from '../../../assets/main-druid.png'
import bgWebp from '../../../assets/main-druid.webp'
import Image from 'react-image-webp'

export const Intro = ({ idName }: SectionProps) => {
  return (
    <section className="intro" id={idName}>
      <div className="intro__inner">
        <div className="intro__bg">
          <Image src={bg} webp={bgWebp} className="intro__bg-img" />
        </div>
        <div className="intro__info">
          <PreTitle text="The first NFT" />
          <div className="intro__title">Play-to-Earn WAR Strategy Game</div>
          <div className="intro__subtitle">with Proof of Stake mining</div>
          <div className="intro-comunity">
            <div className="intro-comunity__title">
              Follow our comunity and stay tuned:
            </div>
            <div className="intro-comunity__buttons">
              <Button link={links.telegramChanel} text="Telegram" />
              <Button link={links.twitter} text="Twitter" />
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  )
}
