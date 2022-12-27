import React from 'react'
import { SocioItem } from './item/SocioItem'
import twitterImg from '../../../assets/icons/socio/twitter.svg'
import telegramImg from '../../../assets/icons/socio/telegram.svg'
import discordImg from '../../../assets/icons/socio/discord.svg'
import mediumImg from '../../../assets/icons/socio/medium.svg'
import bitcoinTalkImg from '../../../assets/icons/socio/bittalk.svg'
import facebookImg from '../../../assets/icons/socio/facebook.svg'
import redditImg from '../../../assets/icons/socio/reddit.svg'
import './Socio.scss'

const socio = [
  {
    title: 'Twitter',
    link: '#',
    imgSrc: twitterImg
  },
  {
    title: 'Announcement Channel',
    link: '#',
    imgSrc: telegramImg
  },
  {
    title: 'Discord',
    link: '#',
    imgSrc: discordImg
  },
  {
    title: 'Telegram Chat',
    link: '#',
    imgSrc: telegramImg
  },
  {
    title: 'Medium',
    link: '#',
    imgSrc: mediumImg
  },
  {
    title: 'BitcoinTalk',
    link: '#',
    imgSrc: bitcoinTalkImg
  },
  {
    title: 'Facebook',
    link: '#',
    imgSrc: facebookImg
  },
  {
    title: 'Reddit',
    link: '#',
    imgSrc: redditImg
  }
]

interface SocioProps {
  withTitle?: boolean
}

export const Socio = ({ withTitle }: SocioProps) => {
  return (
    <div className="socio">
      {socio.map((obj, index) => (
        <SocioItem
          title={obj.title}
          link={obj.link}
          imgSrc={obj.imgSrc}
          withTitle={withTitle}
          key={index}
        />
      ))}
    </div>
  )
}
