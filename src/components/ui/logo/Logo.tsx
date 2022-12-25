import React from 'react'
import logo from '../../../assets/logo.png'
import './Logo.scss'

export const Logo = () => {
  return (
    <a className="logo">
      <img className="logo-img" src={logo} alt="logo" />
    </a>
  )
}
