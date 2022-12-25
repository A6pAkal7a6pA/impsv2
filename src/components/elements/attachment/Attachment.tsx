import React from 'react'
import prize from '../../../assets/prize.svg'
import scrollAdviser from '../../../assets/icons/scroll.svg'
import './Attachment.scss'

export const Attachment = () => {
  return (
    <div className="attachment">
      <div className="prize">
        <img src={prize} alt="prize" />
      </div>
      <div className="adviser">
        <img src={scrollAdviser} alt="adviser" />
      </div>
    </div>
  )
}
