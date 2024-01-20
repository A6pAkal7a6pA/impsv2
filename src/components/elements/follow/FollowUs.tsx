import React from 'react'
import { Socio } from '../socio/Socio'
import './FollowUs.scss'
import { Button } from '../../ui/button/Button'
import { Copyright } from '../copyright/Copyright'
import { links } from '../../../data'

export const FollowUs = () => {
  return (
    <div className="follow" id="Follow_Us" data-aos="fade-up">
      <div className="follow__inner container">
        <h2 className="follow__title">Follow Us</h2>
        <Socio withTitle={true} />
        <div className="follow__separator"></div>
        <div className="follow__links">
          <Button link={links.pitchDeck} text="Pitch deck" />
        </div>
      </div>
      <Copyright />
    </div>
  )
}
