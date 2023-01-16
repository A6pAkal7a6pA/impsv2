import React from 'react'
import logo from '../../../assets/logo.png'
import logoWebp from '../../../assets/logo.webp'
import './Logo.scss'
import Image from 'react-image-webp'

export const Logo = () => {
  return (
    <a href="#Home" className="logo">
      <Image src={logo} webp={logoWebp} className="logo-img" alt="logo" />
    </a>
  )
}
