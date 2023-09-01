import React from 'react'
import { Color, Title } from '../../ui/title/Title'
import distributionImage from '../../../assets/distribution.svg'
import { Button } from '../../ui/button/Button'
import './TokenDistribution.scss'
import { SectionProps, links } from '../../../data'

export const TokenDistribution = ({ idName }: SectionProps) => {
  return (
    <section className="distribution" id={idName} data-aos="fade-up">
      <div className="distribution__inner container">
        <Title color={Color.GOLD} text="Token Distibution" />
        <div className="distribution-total">
          <div className="distribution-total__title">Total Supply</div>
          <div className="distribution-total__number">3,000,000,000</div>
        </div>
        <div className="distribution__image">
          <div className="distribution__image-inner">
            <img
              src={distributionImage}
              alt="distribution"
              className="distribution__image-img"
            />
          </div>
        </div>
        <div className="distribution__separator"></div>
        <Button link={links.tokenomic} text="Open full Tokenomics" />
      </div>
    </section>
  )
}
