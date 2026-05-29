import React from 'react'
import Hero from '../conponents/Hero'
import Company from '../conponents/Company'
import Services from '../conponents/Services'
import Work from '../conponents/Work'
import TeamMember from '../conponents/TeamMember'
import Contact from '../conponents/Contact'

function Home() {
  return (
    <div id='Home'> 
      <Hero/>
      <Company/>
      <Services/>
      <Work/>
      <TeamMember/>
      <Contact/>
    </div>
  )
}

export default Home
