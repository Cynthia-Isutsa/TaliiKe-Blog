import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className={`bg-[#1f1926] rounded-xl w-full h-[200px]`}>
          <h1 className= 'text-4xl md:text-7xl lg:pt-9 text-[#fceaff] font-bold text-center'>Want to inquire anything?</h1>
      </div>
      <div className='container mt-5 flex flex-col items-center' >
        <h1 className = 'py-3 text-4xl font-bold text-center'>Let's Get in Touch</h1>
        <form className='flex flex-col mt-8'  action="https://getform.io/f/7b4a482d-0007-43e5-8949-20f63e7fd26c" method='POST' encType='multipart/form-data'>
          <label className='text-left text-lg '>Name**</label>
          <input type='text' name='name' placeholder='Your Name' 
          className="border-hidden outline-none bg-gray-300 pl-2 pr-[400px] py-3 my-2" />

          <label className='text-left text-lg mt-5'>Email**</label>
          <input type='email' name='email' placeholder='Your Email' 
          className="border-hidden outline-none bg-gray-300 pl-2 pr-[400px] py-3 my-2" />

          <label className='text-left text-lg mt-5'>Message**</label>
          <textarea placeholder='Start typing your message here....' name='message' rows={6}  
          className="border-hidden outline-none bg-gray-300 pl-2 pr-[400px] py-3 my-2"/>
          <div className='flex flex-col justify-center items-center'>
             <button value='button' className='my-4 bg-black text-white px-5 py-3 text-2xl font-semibold cursor-pointer hover:scale-110 ease-in duration-200'>
              Send Message
              </button>
          </div>
        </form>
        
      </div>
      <Footer />

    </div>
  )
}

export default Contact
