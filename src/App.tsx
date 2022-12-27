import React from 'react'
import { Header } from './components/elements/header/Header'
import { Intro } from './components/elements/intro/Intro'
import { Attachment } from './components/elements/attachment/Attachment'
import { Modal } from './components/elements/modal/Modal'
import { Mission } from './components/elements/mission/Mission'

function App() {
  return (
    <div className="wrapper">
      <Attachment />
      <Header />
      <Intro />
      <Modal />
      <Mission />
    </div>
  )
}

export default App
