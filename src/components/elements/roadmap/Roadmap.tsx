import React from 'react'
import roadmapImg1 from '../../../assets/roadmap/road1.png'
import roadmapImg2 from '../../../assets/roadmap/road2.png'
import roadmapImg3 from '../../../assets/roadmap/road3.png'
import roadmapImg4 from '../../../assets/roadmap/road4.png'
import roadmapImg5 from '../../../assets/roadmap/road5.png'
import roadmapImg6 from '../../../assets/roadmap/road6.png'
import roadmapImg7 from '../../../assets/roadmap/road7.png'
import roadmapImg8 from '../../../assets/roadmap/road8.png'
import roadmapImg9 from '../../../assets/roadmap/road9.png'
import roadmapImg10 from '../../../assets/roadmap/road10.png'
import roadmapImg11 from '../../../assets/roadmap/road11.png'
import roadmapImg12 from '../../../assets/roadmap/road12.png'
import roadmapImg13 from '../../../assets/roadmap/road13.png'
import roadmapImg14 from '../../../assets/roadmap/road14.png'
import roadmapImg15 from '../../../assets/roadmap/road15.png'
import roadmapImg16 from '../../../assets/roadmap/road16.png'
import roadmapImg17 from '../../../assets/roadmap/road17.png'
import roadmapImg18 from '../../../assets/roadmap/road18.png'
import roadmapImg19 from '../../../assets/roadmap/road19.png'
import roadmapImg20 from '../../../assets/roadmap/road20.png'
import roadmapImg21 from '../../../assets/roadmap/road21.png'
import roadmapImg22 from '../../../assets/roadmap/road22.png'
import { RoadYear } from './item/RoadYear'
import './Roadmap.scss'
import { Color, Title } from '../../ui/title/Title'
import { SectionProps } from '../../../data'

const roadMap = [
  {
    year: '2021 – 2022',
    color: 'brown',
    months: [
      {
        month: 'Aug 2021',
        img: roadmapImg1,
        description: 'Design Document'
      },
      {
        month: 'Sep 2022',
        img: roadmapImg2,
        description: 'Testnet Release + IDO Start'
      },
      {
        month: 'Nov 2022',
        img: roadmapImg3,
        description: 'IDO end + Release'
      },
      {
        month: 'Dec 2022',
        img: roadmapImg4,
        description: 'In-game marketplace'
      }
    ]
  },
  {
    year: '2023',
    color: 'green',
    months: [
      {
        month: 'Feb',
        img: roadmapImg5,
        description: 'New objects'
      },
      {
        month: 'Apr',
        img: roadmapImg6,
        description: 'Hero Reincarnation'
      },
      {
        month: 'Jun',
        img: roadmapImg7,
        description: 'Dungeons'
      },
      {
        month: 'Aug',
        img: roadmapImg8,
        description: 'Bosses'
      },
      {
        month: 'Oct',
        img: roadmapImg9,
        description: 'Power-ups'
      },
      {
        month: 'Dec',
        img: roadmapImg10,
        description: 'Generals'
      }
    ]
  },
  {
    year: '2024',
    color: 'blue',
    months: [
      {
        month: 'Feb',
        img: roadmapImg11,
        description: 'Mail and Troops'
      },
      {
        month: 'Apr',
        img: roadmapImg12,
        description: 'New objects'
      },
      {
        month: 'Jun',
        img: roadmapImg13,
        description: 'Clans'
      },
      {
        month: 'Aug',
        img: roadmapImg14,
        description: 'Mercenaries and Chat'
      },
      {
        month: 'Oct',
        img: roadmapImg15,
        description: 'Clan castle'
      },
      {
        month: 'Dec',
        img: roadmapImg16,
        description: 'Place of power'
      }
    ]
  },
  {
    year: '2025',
    color: 'yellow',
    months: [
      {
        month: 'Feb',
        img: roadmapImg17,
        description: 'War of clans'
      },
      {
        month: 'Apr',
        img: roadmapImg18,
        description: 'New objects'
      },
      {
        month: 'Jun',
        img: roadmapImg19,
        description: 'Alliance'
      },
      {
        month: 'Aug',
        img: roadmapImg20,
        description: 'New objects'
      },
      {
        month: 'Oct',
        img: roadmapImg21,
        description: 'Mythical Forge'
      },
      {
        month: 'Dec',
        img: roadmapImg22,
        description: 'War of Alliances'
      }
    ]
  }
]

export const Roadmap = ({ idName }: SectionProps) => {
  return (
    <section className="road" id={idName} data-aos="fade-up">
      <div className="road__inner container">
        <Title color={Color.GOLD} text="Roadmap" />
        <div className="road__years">
          <div className="road__years-inner">
            {roadMap.map((yearMap, index) => (
              <RoadYear
                key={index}
                year={yearMap.year}
                months={yearMap.months}
                color={yearMap.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
