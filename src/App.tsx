import React from 'react'
import { Header } from './components/elements/header/Header'
import { Intro } from './components/elements/intro/Intro'
import { Attachment } from './components/elements/attachment/Attachment'

function App() {
  return (
    <div className="wrapper">
      <Attachment />
      <Header />
      <Intro />
    </div>
  )
}

export default App
