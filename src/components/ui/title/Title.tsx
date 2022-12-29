import React from 'react'
import './Title.scss'

export enum Color {
  GOLD = 'gold',
  BLUE = 'blue'
}

interface TitleProps {
  color: Color
  text: string
}

export const Title = ({ color, text }: TitleProps) => {
  return <h2 className={`title title-${color}`}>{text}</h2>
}
