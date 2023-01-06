import React, { useEffect, useState } from 'react'
import { Logo } from '../../ui/logo/Logo'
import { Navigation } from '../navigation/Navigation'
import { Button } from '../../ui/button/Button'
import ShareIcon from '../../../assets/icons/share.svg'
import './Header.scss'
import { useScrollPosition } from '../../../hooks'

const info = {
  pitchDeckText: 'Pitch deck',
  pitchDeckLink: '#',
  whitePaperText: 'White paper',
  whitePaperLink: '#'
}

export const Header = () => {
  const scrollPosition = useScrollPosition()
  return (
    <div className={`header${scrollPosition > 20 ? ' header-sticky' : ''}`}>
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
