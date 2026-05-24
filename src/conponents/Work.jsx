import React from 'react'
import data from './data.json'

function Work() {
  return (
    <div id='Work' className='py-20'>
      <div className='container mx-auto px-6 sm:px-10 md:px-16 lg:px-40'>
        <div className='text-center mb-15'>
            <h1 className='text-4xl md:text-5xl text-dark mb-6'>Our latest work</h1>
            <p className='text-dark/60 max-w-2xl mx-auto text-xl'>Whether you're launching a new business or looking to elevate your existing brand</p>
        </div>
        {/* work section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {
                data.projects.map((data,index)=>(
                    <div key={index} className='rounded-xl overflow-hidden border border-primary/50 hover:scale-105 transition duration-300 cursor-pointer'>
                        <img src={`work${index+1}.jpg`} alt="" />
                        <div className='mt-6 p-3 lg:p-6'>
                            <h1 className='text-xl text-dark'> {data.title} </h1>
                            <p className='text-dark/60 mt-4'> {data.dis} </p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Work
