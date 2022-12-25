import React from 'react'
import { Partner } from './item/Partner'
import './Partners.scss'

const importAll = (context: __WebpackModuleApi.RequireContext) => {
  const images: string[] = []
  context.keys().map((item: any) => images.push(context(item)))
  return images
}

const images = importAll(
  require.context('../../../assets/partners', false, /\.(png|jpe?g|svg)$/)
)

export const Partners = () => {
  return (
    <div className="partners">
      {images.map((img, index) => (
        <Partner img={img} key={index} />
      ))}
    </div>
  )
}
