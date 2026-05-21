import React from 'react'
import { FaApple, FaFacebook, FaGoogle, FaGoogleDrive, FaInstagram, FaLinkedin, FaMicrosoft } from 'react-icons/fa6'

function Company() {
  return (
    <div className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <p className='text-xl md:text-2xl text-center mb-16'>Trusted by leading companies</p>
        {/* display company icon */}
        <div className='flex flex-wrap items-center justify-center gap-12'>
            <div className='company-icon'>
                <FaMicrosoft className='w-10 h-10 text-primary'/>
            </div>
            <div className='company-icon'>
                <FaFacebook className='w-10 h-10 text-primary'/>
            </div>
            <div className='company-icon'>
                <FaLinkedin className='w-10 h-10 text-primary'/>
            </div>
            <div className='company-icon'>
                <FaApple className='w-10 h-10 text-primary'/>
            </div>
            <div className='company-icon'>
                <FaInstagram className='w-10 h-10 text-primary'/>
            </div>
            <div className='company-icon'>
                <FaGoogle className='w-10 h-10 text-primary'/>
            </div>
            <div className='company-icon'>
                <FaGoogleDrive className='w-10 h-10 text-primary'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Company
