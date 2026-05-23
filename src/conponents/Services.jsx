import React from 'react'
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaMobileAlt
} from "react-icons/fa";

import data from './data.json'

function Services() {

  const icons={
    FaCode,FaPaintBrush,FaBullhorn,FaMobileAlt
  }

  return (
    <div id='Services' className='py-20'>
      <div className='container mx-auto px-6 sm:px-10 md:px-14 lg:px-40'>
        <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl text-dark mb-6'>How we can Help you?</h1>
            <p className='text-dark/60 text-xl max-w-2xl mx-auto'>Whether you're launching a new business or looking to elevate your existing brand.</p>
        </div>
        {/* Services Data display */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {
            data.services.map((info)=>{
              const Icon = icons[info.icon]
              return (
                <div key={info.id} className='rounded-xl p-4 md:p-6 lg:p-12 border border-primary flex flex-col md:flex-row items-center gap-6 hover:scale-105 transition duration-300 cursor-pointer'>
                  <div className='flex-shrink-0  aspect-square border-4 border-primary/30 rounded-full flex items-center justify-center'>
                    <Icon className="w-10 h-10 text-primary"/>
                  </div>
                  <div className='text-center md:text-start'>
                    <h1 className='text-xl text-dark mb-3'>{info.service}</h1>
                    <p className='text-dark/60'> {info.dis} </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services
