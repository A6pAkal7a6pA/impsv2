import React from 'react'
import './RoadYear.scss'

interface RoadYearProps {
  year: string
  months: { img: string; month: string; description: string }[]
  color: string
}

export const RoadYear = ({ year, months, color }: RoadYearProps) => {
  return (
    <div className={`road-year road-year-${color}`}>
      <div className="road-year__number">{year}</div>
      <div className="road-year__items">
        {months.map((info, index) => (
          <div key={index} className="road-year__item">
            <div className="road-year__image">
              <img
                src={info.img}
                alt="roadmap"
                className="road-year__image-img"
              />
            </div>
            <div className="road-year__info">
              <div className="road-year__month">{info.month}</div>
              <div className="road-year__description">{info.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
