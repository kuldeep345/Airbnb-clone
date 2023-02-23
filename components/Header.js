import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10'>
       <div className='relative flex items-center h-8 cursor-pointer my-auto'>
        <Image src="/airbnb-logo.png" style={{objectFit:'contain', objectPosition:"left"}} fill />
       </div>
       
       <div className='flex items-center md:border-2 rounded-full py-2'>
        <input className='pl-5 flex-grow bg-transparent outline-none focus:outline-none' type="text" placeholder='Start your search'/>
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
       </div>

       <div></div>

       <div></div>
    </header>
  )
}

export default Header
