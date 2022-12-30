import React from 'react'
import { Header } from './components/elements/header/Header'
import { Intro } from './components/elements/intro/Intro'
import { Attachment } from './components/elements/attachment/Attachment'
import { Modal } from './components/elements/modal/Modal'
import { Mission } from './components/elements/mission/Mission'
import { HowToPlay } from './components/elements/how_to_play/HowToPlay'
import { Expirience } from './components/elements/expirience/Expiriance'
import { Team } from './components/elements/team/Team'
import { TokenAllocation } from './components/elements/allocation/TokenAllocation'

function App() {
  return (
    <div className="wrapper">
      <Attachment />
      <Header />
      <Intro />
      <Modal />
      <Mission />
      <HowToPlay />
      <Expirience />
      <Team />
      <TokenAllocation />
    </div>
  )
}

export default App
