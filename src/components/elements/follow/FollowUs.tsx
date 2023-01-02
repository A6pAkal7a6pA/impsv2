import React from 'react'
import { Socio } from '../socio/Socio'
import './FollowUs.scss'
import { Button } from '../../ui/button/Button'

export const FollowUs = () => {
  return (
    <div className="follow">
      <div className="follow__inner">
        <h2 className="follow__title">Follow Us</h2>
        <Socio withTitle={true} />
        <div className="follow__links">
          <Button link="#" text="Pitch deck" />
          <Button link="#" text="White paper" />
        </div>
      </div>
    </div>
  )
}
