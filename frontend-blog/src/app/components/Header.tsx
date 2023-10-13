'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import {BiSearch} from 'react-icons/bi'


const Header = () => {

  const tags =[
    {
      id:1,
      name:'All'
    },
    {
      id:2,
      name:'React'
    },
    {
      id:3,
      name:'NodeJS'
    },
    {
      id:4,
      name:'Express'
    },
    {
      id:5,
      name:'MongoDB'
    }
  ]

const [activeIndex, setActiveIndex] = useState(0)


  return (
    <div className = 'flex flex-col m-5 px-[40px] md:px-[70px]'>
      <div className = ' h-full w-full'>
           <Image src='/123.png' alt='headerImage' width={500} height={500} priority={true} className='w-full rounded-xl' />
      </div>
      <div className='flex bg-white shadow-lg rounded-lg px-4 max-md:py-1 py-2 mt-[-20px] mx-[25%]'>
        <BiSearch  size={30} className= 'mr-1 text-gray-400'/>
        <input type='text' placeholder='search' className='outline-none border-none ' />
      </div>
      <div className='flex justify-center items-center gap-3 md:gap-14 xl:gap-20 mt-5'>
        {tags.map((item, index) => (
          <ul key= {item.id} onClick={() =>setActiveIndex(index)} className={`${ index === activeIndex ?
           'bg-red-500 text-semibold': null} px-2 rounded-lg cursor-pointer hover:scale-110 hover:border-[1px]
            border-red-500 transition-all duration-300 ease-in-out`}>
             <li  className='px'>{item.name}</li>
          </ul>
        ))}
      </div>

      
    </div>
  )
}

export default Header