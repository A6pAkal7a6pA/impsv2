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
import { links } from '../../../data'

const socio = [
  {
    title: 'Twitter',
    link: links.twitter,
    imgSrc: twitterImg
  },
  {
    title: 'Announcement Channel',
    link: links.telegramChanel,
    imgSrc: telegramImg
  },
  {
    title: 'Discord',
    link: links.discord,
    imgSrc: discordImg
  },
  {
    title: 'Telegram Chat',
    link: links.telegramChat,
    imgSrc: telegramImg
  },
  {
    title: 'Medium',
    link: links.medium,
    imgSrc: mediumImg
  }
  // {
  //   title: 'BitcoinTalk',
  //   link: links.bitcoinTalk,
  //   imgSrc: bitcoinTalkImg
  // },
  // {
  //   title: 'Facebook',
  //   link: links.facebook,
  //   imgSrc: facebookImg
  // },
  // {
  //   title: 'Reddit',
  //   link: links.reddit,
  //   imgSrc: redditImg
  // }
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
