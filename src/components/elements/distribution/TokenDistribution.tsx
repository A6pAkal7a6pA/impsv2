import React from 'react'
import { Color, Title } from '../../ui/title/Title'
import distributionImage from '../../../assets/distribution.svg'
import { Button } from '../../ui/button/Button'
import './TokenDistribution.scss'

export const TokenDistribution = () => {
  return (
    <div className="distribution">
      <div className="distribution__inner">
        <Title color={Color.GOLD} text="Token Distibution" />
        <div className="distribution-total">
          <div className="distribution-total__title">Total Supply</div>
          <div className="distribution-total__number">3,000,000,000</div>
        </div>
        <div className="distribution__image">
          <img
            src={distributionImage}
            alt="distribution"
            className="distribution__image-img"
          />
        </div>
        <div className="distribution__separator"></div>
        <Button link="#" text="Open full Tokenomics" />
      </div>
    </div>
  )
}