import React, { useEffect, useState } from 'react'
import { Color, Title } from '../../ui/title/Title'
import { PersonProps } from './person/Person'
import IGOR_PHOTO from '../../../assets/team/igor.png'
import ELIAS_PHOTO from '../../../assets/team/elias.png'
import MIKE_PHOTO from '../../../assets/team/mike.png'
import MICHAIL_PHOTO from '../../../assets/team/michail.png'
import MICHAEL_PHOTO from '../../../assets/team/michael.png'
import ROSTAM_PHOTO from '../../../assets/team/rostam.png'
import ANASTASIA_PHOTO from '../../../assets/team/anastasiya.png'
import GEORGE_PHOTO from '../../../assets/team/egor.png'
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
    linkedIn: '#',
    photo: IGOR_PHOTO,
    descriptions: [
      '11 years experience in IT',
      '5 years in Crypto Industry',
      'CEO IMPS Kingdom, Pain Crusade',
      'Adviser Gladiators honor'
    ]
  },
  {
    name: 'Elias',
    position: 'Gamedesing lead, Team lead',
    linkedIn: '#',
    photo: ELIAS_PHOTO,
    descriptions: [
      '11 years experience in IT',
      '5 years in Crypto Industry',
      'CEO IMPS Kingdom, Pain Crusade',
      'Adviser Gladiators honor'
    ]
  },
  {
    name: 'Mike',
    position: 'Senior blockchain developer',
    linkedIn: '#',
    photo: MIKE_PHOTO,
    descriptions: [
      '11 years experience in IT',
      '5 years in Crypto Industry',
      'CEO IMPS Kingdom, Pain Crusade',
      'Adviser Gladiators honor'
    ]
  },
  {
    name: 'Michail',
    position: 'Fullstack & blockchain developer',
    linkedIn: '#',
    photo: MICHAIL_PHOTO,
    descriptions: [
      '11 years experience in IT',
      '5 years in Crypto Industry',
      'CEO IMPS Kingdom, Pain Crusade',
      'Adviser Gladiators honor'
    ]
  },
  {
    name: 'Michael',
    position: 'Unity Developer',
    linkedIn: '#',
    photo: MICHAEL_PHOTO,
    descriptions: [
      '11 years experience in IT',
      '5 years in Crypto Industry',
      'CEO IMPS Kingdom, Pain Crusade',
      'Adviser Gladiators honor'
    ]
  },
  {
    name: 'Rostam',
    position: 'UI/UX, Product Designer',
    linkedIn: '#',
    photo: ROSTAM_PHOTO,
    descriptions: [
      '11 years experience in IT',
      '5 years in Crypto Industry',
      'CEO IMPS Kingdom, Pain Crusade',
      'Adviser Gladiators honor'
    ]
  },
  {
    name: 'Anastasia',
    position: '2D Artist',
    linkedIn: '#',
    photo: ANASTASIA_PHOTO,
    descriptions: [
      '11 years experience in IT',
      '5 years in Crypto Industry',
      'CEO IMPS Kingdom, Pain Crusade',
      'Adviser Gladiators honor'
    ]
  },
  {
    name: 'George',
    position: 'Fullstack Engineer',
    linkedIn: '#',
    photo: GEORGE_PHOTO,
    descriptions: [
      '11 years experience in IT',
      '5 years in Crypto Industry',
      'CEO IMPS Kingdom, Pain Crusade',
      'Adviser Gladiators honor'
    ]
  }
]

export const Team = ({ idName }: SectionProps) => {
  const desktop = window.matchMedia('(min-width: 769px)')
  const [isDesktop, setIsDesktop] = useState(true)
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
