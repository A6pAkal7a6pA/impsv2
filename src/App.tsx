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
import { Roadmap } from './components/elements/roadmap/Roadmap'
import { FollowUs } from './components/elements/follow/FollowUs'
import { Copyright } from './components/elements/copyright/Copyright'
import { TokenDistribution } from './components/elements/distribution/TokenDistribution'
import { Goal } from './components/elements/goal/Goal'
import { Tokenomic } from './components/elements/imp_token/Tokenomic'
import { Navbar } from './components/elements/navbar/Navbar'

function App() {
  return (
    <div className="wrapper">
      <Attachment />
      <Navbar />
      <Header />
      <Modal />
      <Intro idName="Home" />
      <Mission />
      <HowToPlay />
      <Goal />
      <Tokenomic />
      <Roadmap />
      <Expirience />
      <Team />
      <TokenAllocation />
      <TokenDistribution />
      <FollowUs />
      <Copyright />
    </div>
  )
}

export default App
