import React from 'react'
import { Logo } from '../../ui/logo/Logo'
import { Navigation } from '../navigation/Navigation'
import { Button } from '../../ui/button/Button'
import ShareIcon from '../../../assets/icons/share.svg'
import './Header'

const info = {
  pitchDeckText: 'Pitch deck',
  pitchDeckLink: '#',
  whitePaperText: 'White paper',
  whitePaperLink: '#'
}

export const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <Logo />
        <Navigation />
        <div className="header__info">
          <Button link={info.pitchDeckLink} text={info.pitchDeckText} />
          <Button link={info.whitePaperLink} text={info.whitePaperText} />
          <div className="header__text">Contact</div>
          <div className="header__share">
            <img src={ShareIcon} alt="share" />
          </div>
        </div>
      </div>
    </div>
  )
}
