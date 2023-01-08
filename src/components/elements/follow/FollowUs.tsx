import React from 'react'
import { Socio } from '../socio/Socio'
import './FollowUs.scss'
import { Button } from '../../ui/button/Button'
import { Copyright } from '../copyright/Copyright'

export const FollowUs = () => {
  return (
    <div className="follow" id="Follow_Us">
      <div className="follow__inner container">
        <h2 className="follow__title">Follow Us</h2>
        <Socio withTitle={true} />
        <div className="follow__links">
          <Button link="#" text="Pitch deck" />
          <Button link="#" text="White paper" />
        </div>
      </div>
      <Copyright />
    </div>
  )
}
