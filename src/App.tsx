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
      <Header />
      <Modal />
      <Intro idName="Home" />
      <Mission idName="Blockchain" />
      <HowToPlay idName="Fearless" />
      <Goal idName="The_goal" />
      <Tokenomic idName="IMP_Token" />
      <Roadmap idName="Roadmap" />
      <Expirience idName="Our_expirience" />
      <Team idName="Team" />
      <TokenAllocation idName="Token_allocation" />
      <TokenDistribution idName="Token_Distibution" />
      <FollowUs />
      <Copyright />
      <Navbar />
    </div>
  )
}

export default App
