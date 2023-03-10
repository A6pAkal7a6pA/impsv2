import React, { useRef } from 'react'
import { Color, Title } from '../../ui/title/Title'
import './TokenAllocation.scss'
import { SectionProps } from '../../../data'
import { useIntersection } from '../../../hooks'

const info = [
  {
    name: 'Seed Round',
    amount: 52
  },
  {
    name: 'Private Round',
    amount: 143
  },
  {
    name: 'Public Round',
    amount: 45.5
  },
  {
    name: 'Team',
    amount: 130
  },
  {
    name: 'Advisors',
    amount: 32.5
  },
  {
    name: 'P2E',
    amount: 299
  },
  {
    name: 'Liquidity',
    amount: 130
  },
  {
    name: 'Marketing',
    amount: 130
  },
  {
    name: 'Ecosystem',
    amount: 234
  },
  {
    name: 'Farming',
    amount: 104
  }
]

export const TokenAllocation = ({ idName }: SectionProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const isVisible = useIntersection(ref, '0px')
  const total = info.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  )
  function percentage(partialValue: number, totalValue: number): number {
    return (100 * partialValue) / totalValue
  }
  return (
    <section ref={ref} className="allocation" id={idName} data-aos="fade-up">
      <div className="allocation__inner container">
        <Title color={Color.BLUE} text="Token allocation" />
        <div className="allocation__subtitle">
          Highly qualified, expertized and energetic professionals with
          experience in developing game projects
        </div>
        <div className="allocation-price">
          <div className="allocation-price__inner">
            <div className="allocation-price__item">
              <div className="allocation-price__title">Seed</div>
              <div className="allocation-price__amount">$0.005</div>
            </div>
            <div className="allocation-price__item">
              <div className="allocation-price__title">Private</div>
              <div className="allocation-price__amount">$0.007</div>
            </div>
            <div className="allocation-price__item">
              <div className="allocation-price__title">public</div>
              <div className="allocation-price__amount">$0.010</div>
            </div>
          </div>
        </div>
        <div className="allocation-graph">
          <div className="allocation-graph__inner">
            {info.map((item, index) => (
              <div key={index} className="allocation-graph__item">
                <div className="allocation-graph__column">
                  <div className="allocation-graph__number">
                    {`${percentage(item.amount, total).toFixed(1)}%`}
                  </div>
                  <div
                    className="allocation-graph__column-filled"
                    style={{
                      height: `${
                        isVisible
                          ? percentage(item.amount, total).toFixed(1)
                          : 0
                      }%`
                    }}
                  ></div>
                </div>
                <div className="allocation-graph__amount">{`${item.amount}kk`}</div>
                <div className="allocation-graph__name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
