import React, { useEffect, useState } from 'react'
import { Color, Title } from '../../ui/title/Title'
import { PersonProps } from './person/Person'
import IGOR_PHOTO from '../../../assets/team/igor.jpeg'
import ILYA_PHOTO from '../../../assets/team/ilya.jpeg'
import KOSTYA_PHOTO from '../../../assets/team/kostya.png'
import LYUBOV_PHOTO from '../../../assets/team/Lyubov.jpeg'
import ANASTASIA_PHOTO from '../../../assets/team/anastasiya.png'
import ROSTAM_PHOTO from '../../../assets/team/rostam.png'
import JOVAN_PHOTO from '../../../assets/team/Jovan.jpeg'
import IGOR_PHOTO_WEBP from '../../../assets/team/igor.webp'
import ILYA__PHOTO_WEBP from '../../../assets/team/ilya.webp'
import KOSTYA_PHOTO_WEBP from '../../../assets/team/kostya.webp'
import LYUBOV_PHOTO_WEBP from '../../../assets/team/Lyubov.webp'
import ANASTASIA_PHOTO_WEBP from '../../../assets/team/anastasiya.webp'
import ROSTAM_PHOTO_WEBP from '../../../assets/team/rostam.webp'
import JOVAN_PHOTO_WEBP from '../../../assets/team/Jovan.webp'
import './Team.scss'
import { SectionProps } from '../../../data'
import 'swiper/scss'
import 'swiper/scss/effect-coverflow'
import { BlockTeamList } from './list/BlockTeamList'
import { SliderTeamList } from './list/SliderTeamList'

export const persons: PersonProps[] = [
  {
    name: 'Igor',
    position: 'CEO, Co-founder',
    linkedIn: 'https://www.linkedin.com/in/garry-samokhin/',
    photo: IGOR_PHOTO,
    photoWebp: IGOR_PHOTO_WEBP,
    descriptions: [
      '12 years experience in IT',
      '6 years in Crypto Industry',
      'Founder Goldapp.dev',
      'CEO IMPS Kingdom',
      'CTO SeedLaunch.org'
    ]
  },
  {
    name: 'Ilya',
    position: 'Fullstack developer',
    linkedIn: 'https://www.linkedin.com/in/ilyaivanchikov/',
    photo: ILYA_PHOTO,
    photoWebp: ILYA__PHOTO_WEBP
  },
  {
    name: 'Konstantin',
    position: 'Lead gamedesigner',
    linkedIn: 'https://www.linkedin.com/in/konstantin-m-4b9010280/',
    photo: KOSTYA_PHOTO,
    photoWebp: KOSTYA_PHOTO_WEBP
  },
  {
    name: 'Lyubov',
    position: 'Designer',
    linkedIn: 'https://www.linkedin.com/in/lyubov-yarychevskaya-358412230',
    photo: LYUBOV_PHOTO,
    photoWebp: LYUBOV_PHOTO_WEBP
  },
  {
    name: 'Anastasia',
    position: 'Designer',
    linkedIn: 'https://www.linkedin.com/in/anastasiya-elchaninova-9b25a7aa/',
    photo: ANASTASIA_PHOTO,
    photoWebp: ANASTASIA_PHOTO_WEBP
  },
  {
    name: 'Rostam',
    position: 'UI/UX designer',
    linkedIn: 'https://www.linkedin.com/in/baybulatov/',
    photo: ROSTAM_PHOTO,
    photoWebp: ROSTAM_PHOTO_WEBP
  },
  {
    name: 'Jovan',
    position: 'Community manager',
    linkedIn: 'https://www.linkedin.com/in/jovan-pozdnyakov',
    photo: JOVAN_PHOTO,
    photoWebp: JOVAN_PHOTO_WEBP
  }
]

export const Team = ({ idName }: SectionProps) => {
  const desktop = window.matchMedia('(min-width: 769px)')
  const [isDesktop, setIsDesktop] = useState(desktop.matches)
  useEffect(() => {
    window.addEventListener('load', () => setIsDesktop(desktop.matches))
    window.addEventListener('resize', () => setIsDesktop(desktop.matches))
  }, [desktop.matches, isDesktop])
  return (
    <section className="team" id={idName} data-aos="fade-up">
      <div className="team__inner container">
        <Title color={Color.GOLD} text="Team" />
        {isDesktop ? <BlockTeamList /> : <SliderTeamList />}
      </div>
    </section>
  )
}
