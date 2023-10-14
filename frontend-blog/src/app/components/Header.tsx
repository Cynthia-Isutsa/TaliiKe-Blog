import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { header3 } from '../../../public';

const Header = () => {
  return (
    <div className='mt-20 ml-10 grid grid-cols-1 md:grid-cols-2 gap-3'>
      <div className=''>
        <h1 className='text-6xl font-bold capitalize'>Consistency  transforms average into excellence</h1>
        <p className= 'mt-12 text-3xl font-semibold'>Sharpen your brain by coding daily...</p>
        
        <Link href='/Blog'><button className='my-10 text-xl bg-blue-700 text-[#FCEAFF] px-4 py-2 shadow-xl hover:text-black'>Let's Get Started</button></Link>
      </div>
      <div className='w-full h-full'>
        <Image src={header3} alt='header' width={500} height={500} />
      </div>
    </div>
  )
}

export default Header