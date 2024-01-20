import React from 'react'
import roadmapImg0 from '../../../assets/roadmap/road0.png'
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
    year: 'Stage 1',
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
        description: 'Testnet Release'
      },
      {
        month: 'Sep 2022',
        img: roadmapImg2,
        description: 'Mainnet first stage release'
      }
    ]
  },
  {
    year: 'Stage 2',
    color: 'green',
    months: [
      {
        month: 'Mar',
        img: roadmapImg0,
        description: 'IDO Start'
      },
      {
        month: 'May',
        img: roadmapImg3,
        description: 'IDO end + Release'
      },
      {
        month: 'Jun',
        img: roadmapImg4,
        description: 'In-game marketplace'
      },
      {
        month: 'Aug',
        img: roadmapImg5,
        description: 'New objects'
      },
      {
        month: 'Oct',
        img: roadmapImg6,
        description: 'Hero Reincarnation'
      },
      {
        month: 'Dec',
        img: roadmapImg7,
        description: 'Dungeons'
      }
    ]
  },
  {
    year: 'Stage 3',
    color: 'blue',
    months: [
      {
        month: 'Feb',
        img: roadmapImg8,
        description: 'Bosses'
      },
      {
        month: 'Apr',
        img: roadmapImg9,
        description: 'Power-ups'
      },
      {
        month: 'Jun',
        img: roadmapImg10,
        description: 'Generals'
      },
      {
        month: 'Aug',
        img: roadmapImg11,
        description: 'Mail and Troops'
      },
      {
        month: 'Oct',
        img: roadmapImg12,
        description: 'New objects'
      },
      {
        month: 'Dec',
        img: roadmapImg13,
        description: 'Clans'
      }
    ]
  },
  {
    year: 'Stage 4',
    color: 'yellow',
    months: [
      {
        month: 'Feb 2025',
        img: roadmapImg14,
        description: 'Mercenaries and Chat'
      },
      {
        month: 'Apr 2025',
        img: roadmapImg15,
        description: 'Clan castle'
      },
      {
        month: 'Jun 2025',
        img: roadmapImg16,
        description: 'Place of power'
      },
      {
        month: 'Aug 2025',
        img: roadmapImg17,
        description: 'War of clans'
      },
      {
        month: 'Oct 2025',
        img: roadmapImg18,
        description: 'New objects'
      },
      {
        month: 'Dec 2025',
        img: roadmapImg19,
        description: 'Alliance'
      },
      {
        month: 'Feb 2026',
        img: roadmapImg20,
        description: 'New objects'
      },
      {
        month: 'Apr 2026',
        img: roadmapImg21,
        description: 'Mythical Forge'
      },
      {
        month: 'Jun 2026',
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
