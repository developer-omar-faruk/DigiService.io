import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.jpg'
import hero2 from '../assets/hero2.jpg'

function Hero() {
  return (
    <div className='w-full py-40'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center mx-auto gap-4 border border-primary/60 rounded-full pl-2 py-2 w-full text-xs md:text-base md:w-[45%] lg:w-[25%] mb-12 '>
          <div className='flex items-center -space-x-3'>
            <img className='rounded-full w-8 h-8 object-cover object-center' src={p1} alt="" />
            <img className='rounded-full w-8 h-8 object-cover object-center' src={p2} alt="" />
            <img className='rounded-full w-8 h-8 object-cover object-center' src={p3} alt="" />
            <img className='rounded-full w-8 h-8 object-cover object-center' src={p4} alt="" />
          </div>
          <span>Trusted by 20K+ people</span>
        </div>
        <h1 className='text-center text-dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 '>
          <span>We Help Brands Grow With</span>
          <br />
          
          <span> <span className='text-primary me-2'>Performance</span> Marketing</span>
        </h1>
        <p className='max-w-xl mx-auto font-thin text-2xl text-dark text-center mb-12'>At our agency, we take pride in delivering impactful solutions that cambine creativity, starategy, and technology.</p>
        <div className='md-6 flex items-center justify-center gap-6'>
          <button className='px-6 py-2.5 bg-primary rounded-full text-dark font-semibold cursor-pointer'>Contact Me</button>
          <button className='px-6 py-2.5 bg-dark rounded-full text-white font-semibold cursor-pointer'>Digital Market</button>
        </div>
        {/* Image */}
        <div className='max-w-5xl mx-auto mt-16 rounded-2xl shadow overflow-hidden'>
          <img className='w-full h-full object-cover' src={hero2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
