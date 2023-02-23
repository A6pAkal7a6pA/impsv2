import React, { useEffect, useState } from 'react'
import { Color, Title } from '../../ui/title/Title'
import { PersonProps } from './person/Person'
import IGOR_PHOTO from '../../../assets/team/igor.jpeg'
import ELIAS_PHOTO from '../../../assets/team/elias.png'
import MIKE_PHOTO from '../../../assets/team/mike.png'
import MICHAEL_PHOTO from '../../../assets/team/michael.png'
import ROSTAM_PHOTO from '../../../assets/team/rostam.png'
import ANASTASIA_PHOTO from '../../../assets/team/anastasiya.png'
import GEORGE_PHOTO from '../../../assets/team/egor.png'
import IGOR_PHOTO_WEBP from '../../../assets/team/igor.webp'
import ELIAS_PHOTO_WEBP from '../../../assets/team/elias.webp'
import MIKE_PHOTO_WEBP from '../../../assets/team/mike.webp'
import MICHAEL_PHOTO_WEBP from '../../../assets/team/michael.webp'
import ROSTAM_PHOTO_WEBP from '../../../assets/team/rostam.webp'
import ANASTASIA_PHOTO_WEBP from '../../../assets/team/anastasiya.webp'
import GEORGE_PHOTO_WEBP from '../../../assets/team/egor.webp'
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
    name: 'Elias',
    position: 'Gamedesing lead, Team lead',
    linkedIn: 'https://www.linkedin.com/in/ilya-bochenkov-37924a36/',
    photo: ELIAS_PHOTO,
    photoWebp: ELIAS_PHOTO_WEBP,
    descriptions: [
      'More than 14 years of experience in game design',
      'More than 4 years of experience in a crypto game',
      'Worked on huge MMORPG projects like Skyforge and Allods online'
    ]
  },
  {
    name: 'Mike',
    position: 'Senior blockchain developer',
    linkedIn: 'https://www.linkedin.com/in/mike-antonuk-34247a18b/',
    photo: MIKE_PHOTO,
    photoWebp: MIKE_PHOTO_WEBP,
    descriptions: [
      'Winner of Imaguru Blockchain Hackathon 2017 (“ICO Booster” project)',
      'Winner of Imaguru Fintech Hackathon 2018 (“Credit Chain” project)'
    ]
  },
  {
    name: 'Michael',
    position: 'Unity Developer',
    linkedIn: 'https://www.linkedin.com/in/michael-luchnikov-1968b514b/',
    photo: MICHAEL_PHOTO,
    photoWebp: MICHAEL_PHOTO_WEBP
  },
  {
    name: 'Rostam',
    position: 'UI/UX, Product Designer',
    linkedIn: 'https://www.linkedin.com/in/baybulatov/',
    photo: ROSTAM_PHOTO,
    photoWebp: ROSTAM_PHOTO_WEBP
  },
  {
    name: 'Anastasia',
    position: '2D Artist',
    linkedIn: 'https://www.linkedin.com/in/anastasiya-elchaninova-9b25a7aa/',
    photo: ANASTASIA_PHOTO,
    photoWebp: ANASTASIA_PHOTO_WEBP
  },
  {
    name: 'George',
    position: 'Fullstack Engineer',
    linkedIn: 'https://www.linkedin.com/in/egor-kuzmin-279200206/',
    photo: GEORGE_PHOTO,
    photoWebp: GEORGE_PHOTO_WEBP
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
