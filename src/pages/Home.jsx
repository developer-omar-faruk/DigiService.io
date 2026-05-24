import React from 'react'
import Hero from '../conponents/Hero'
import Company from '../conponents/Company'
import Services from '../conponents/Services'
import Work from '../conponents/Work'

function Home() {
  return (
    <div id='Home'> 
      <Hero/>
      <Company/>
      <Services/>
      <Work/>
    </div>
  )
}

export default Home
