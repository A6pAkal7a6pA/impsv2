import React from 'react'
import './Copyright.scss'
import { links } from '../../../data'

export const Copyright = () => {
  return (
    <div className="copy">
      <div className="copy__inner container">
        <div className="copy__links">
          <a href={links.licenseAgreement} className="copy__link">
            License Agreement
          </a>
          <a href={links.indemnityAgreement} className="copy__link">
            Indemnity Agreement
          </a>
          <a href={links.contacts} className="copy__link">
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
