import React from 'react'

export const Person = () => {
  return (
    <div className="person">
      <div className="person__image">
        <img className="person__image-linkedin" src="" alt="linkedin" />
      </div>
      <div className="person__info">
        <div className="person__name">Igor</div>
        <div className="person__position">CEO, Co-founder</div>
        <div className="person-description">
          <div className="person-description__item">
            11 years experience in IT
          </div>
          <div className="person-description__item">
            5 years in Crypto Industry
          </div>
        </div>
      </div>
    </div>
  )
}
