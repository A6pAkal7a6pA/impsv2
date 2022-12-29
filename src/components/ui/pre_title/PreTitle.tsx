import React from 'react'
import './PreTitle.scss'

interface PreTitleProps {
  text: string
}

export const PreTitle = ({ text }: PreTitleProps) => {
  return <h5 className="pre-title">{text}</h5>
}
