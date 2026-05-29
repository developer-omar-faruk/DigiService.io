import React from 'react'
import { FaArrowRightLong, FaUser } from 'react-icons/fa6'

function Contact() {
  return (
    <div id='Contact' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>\
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl text-dark mb-6">Reach out to us</h1>
            <p className="text-dark/60 max-w-xl mx-auto">let's talk! Whether it's a quick question or a big project, we're just a message away.</p>
        </div>
        {/* contact form */}
        <div className='max-w-2xl mx-auto'>
            <form action="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* name field */}
                    <div>
                        <label htmlFor="name" className='block mb-2 text-dark'>Your Name</label>
                        <div className='flex items-center gap-4 py-2 pl-4  rounded border border-dark/40'>
                            <FaUser/>
                            <input id='name' placeholder='Enter your name' type="text" className='w-full outline-none placeholder:text-sm placeholder:text-dark/60' />
                        </div>
                    </div>
                    {/* email field */}
                    <div>
                        <label htmlFor="email" className='block mb-2 text-dark'>Your Email</label>
                        <div className='flex items-center gap-4 py-2 pl-4  rounded border border-dark/40'>
                            <FaUser/>
                            <input id='email' placeholder='Enter your email' type="text" className='w-full outline-none placeholder:text-sm placeholder:text-dark/60' />
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <label className='bolck mb-2 text-dark' htmlFor="message">Your Message</label>
                    <textarea className='w-full h-40 px-6 py-6 outline-none border border-dark/40 rounded' placeholder='Enter your message' name="" id="message"></textarea>
                </div>
                <button className='bg-primary px-6 py-2.5 rounded-full text-dark font-semibold cursor-pointer flex items-center gap-2 mt-6'>
                    Submit
                    <FaArrowRightLong/>
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
