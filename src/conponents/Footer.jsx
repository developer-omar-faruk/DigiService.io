import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='py-20'>
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* left section */}
            <div className="">
                <div className='mb-4'>
                    <span className='text-2xl font-semibold text-dark'>DigiService.io</span>
                    <div className='w-6 h-2 bg-primary rounded-full'></div>
                </div>
                <p className="mb-4 text-dark/60">Whether you're launching a new business or looking to elevate your existing brand.</p>
                <div className="flex items-center gap-6 py-2 font-semibold text-dark/70">
                    <a href="#Home">Home</a>
                    <a href="#Services">Services</a>
                    <a href="#Work">Our Work</a>
                    <a href="#Contact">Contact Us</a>
                </div>
            </div>
            {/* right section */}
            <div className="">
                <h3 className="text-dark text-xl font-semibold mb-3">Subscribe to our newsletters</h3>
                <p className="text-sm text-dark/70">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className="mt-4 flex flex-col md:flex-row items-start gap-2">
                    <input className='w-full px-6 py-3 border border-dark/40 rounded outline-none placeholder:text-sm placeholder:text-dark/60' placeholder='Enter your email' type="text" />
                    <button className="px-6 py-3 bg-primary rounded text-dark cursor-pointer">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="mt-6 border-t border-dark/40 py-4 flex flex-col md:flex-row items-start gap-6 justify-between ">
            <p className="text-dark/70">Copyright 2025 @ Developer_Faruk - All Right Reserved.</p>
            <div className='flex items-center gap-4 text-xl text-primary'>
                <FaFacebook className='cursor-pointer' />
                <FaTwitter className='cursor-pointer' />
                <FaInstagram className='cursor-pointer' />
                <FaLinkedin className='cursor-pointer' />
                <FaGoogle className='cursor-pointer' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
