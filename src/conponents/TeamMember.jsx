import React from 'react'
import { Team } from './temData.js'

function TeamMember() {
  return (
    <div id='Team' className='py-20 bg-white'>
      <div className='container mx-auto px-6 sm:px-10 md:px-16 lg:px-40'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark mb-6'>Meet the team</h1>
          <p className='max-w-xl mx-auto text-dark/60 text-xl'>Behind every sucessful project is a passionate and skilled team - and ours is no exception.</p>
        </div>
        {/* teams members */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {
            Team.map((data)=>(
              <div key={data.id} className='rounded-xl overflow-hidden p-6 border border-primary/50 bg-white flex items-center justify-center lg:justify-start gap-6 hover:scale-105 transition duration-300 cursor-pointer'>
                <img className='w-12 h-12 rounded-full object-cover' src={data.img} alt="" />
                <div>
                  <h1 className='text-sm text-dark font-semibold'> {data.name} </h1>
                  <p className='text-sm text-dark/60'> {data.title} </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TeamMember
