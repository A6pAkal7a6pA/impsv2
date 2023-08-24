import React from 'react'
import './Copyright.scss'
import { links } from '../../../data'

export const Copyright = () => {
  return (
    <div className="copy">
      <div className="copy__inner container">
        <div className="copy__links">
          <a
            href={links.licenseAgreement}
            target="_blank"
            className="copy__link"
            rel="noreferrer"
          >
            License Agreement
          </a>
          <a
            href={links.indemnityAgreement}
            target="_blank"
            className="copy__link"
            rel="noreferrer"
          >
            Indemnity Agreement
          </a>
          <a
            href={links.invest}
            target="_blank"
            className="copy__link"
            rel="noreferrer"
          >
            Want to invest?
          </a>
          <a
            href={links.contacts}
            target="_blank"
            className="copy__link"
            rel="noreferrer"
          >
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
