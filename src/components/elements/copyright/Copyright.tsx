import React from 'react'
import './Copyright.scss'

export const Copyright = () => {
  return (
    <div className="copy">
      <div className="copy__inner">
        <div className="copy__links">
          <a href="#" className="copy__link">
            Legal Notice & Disclaimers
          </a>
          <a href="#" className="copy__link">
            Privacy policy
          </a>
          <a href="#" className="copy__link">
            Contacts
          </a>
        </div>
        <div className="copy__description">
          Copyright © 2022. All Rights Reserved by IMPS KINGDOM
        </div>
      </div>
    </div>
  )
}
