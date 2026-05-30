import React, { useState } from 'react'
import {FaArrowRightLong, FaBars, FaXmark} from 'react-icons/fa6'

function Navbar() {

    const [showMenu, setShowMenu]= useState(false)

  return (
    <div className='w-full fixed top-0 z-50 backdrop-blur-2xl'>
      <div className='flex items-center justify-between px-6 py-8 sm:px-10 md:px-16 lg:px-40'>
        <div>
            <span className='text-3xl font-bold text-dark'>DigiService.io</span>
            <div className='w-6 h-2 bg-primary rounded-full'></div>
        </div>
        <div className='hidden md:flex items-center space-x-6 text-dark/80 font-semibold '>
            <a className='hover:underline underline-offset-4 decoration-primary' href="#Home">Home</a>
            <a className='hover:underline underline-offset-4 decoration-primary' href="#Services">Services</a>
            <a className='hover:underline underline-offset-4 decoration-primary' href="#Work">Our Work</a>
            <a className='hover:underline underline-offset-4 decoration-primary' href="#Contact">Contact Us</a>
        </div>
        <div className='hidden md:block'>
            <button className='px-6 py-2.5 bg-primary text-dark font-semibold rounded-full cursor-pointer flex items-center gap-2'>
                Contact Me
                <FaArrowRightLong/>
            </button>
        </div>
        {/* Mobile version menu */}
        <div className='md:hidden z-10'>
            {showMenu ? 
            <FaXmark className='text-xl text-dark' onClick={()=> setShowMenu(!showMenu)}/> : 
            <FaBars className='text-xl text-dark' onClick={()=> setShowMenu(!showMenu)}/> }
        </div>
      </div>
      {/* mobile menu items */}
      {
        showMenu && (
            <div className='md:hidden flex flex-col items-center justify-center space-y-6 fixed bg-primary/80  w-64 top-0 right-0 h-screen'>
                <a onClick={()=> setShowMenu(!showMenu)} href="#Home">Home</a>
                <a onClick={()=> setShowMenu(!showMenu)} href="#Services">Services</a>
                <a onClick={()=> setShowMenu(!showMenu)} href="#Work">Our Work</a>
                <a onClick={()=> setShowMenu(!showMenu)} href="#Contact">Contact Us</a>
            </div>
        )
      }
    </div>
  )
}

export default Navbar
