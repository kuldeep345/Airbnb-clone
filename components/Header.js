import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon , GlobeAltIcon , UserCircleIcon , UsersIcon , Bars3Icon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10'>
       <div className='relative flex items-center h-8 cursor-pointer my-auto'>
        <Image src="/airbnb-logo.png" style={{objectFit:'contain', objectPosition:"left"}} fill />
       </div>
       
       <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className='pl-5 flex-grow bg-transparent outline-none focus:outline-none text-sm text-gray-400 placeholder-gray-400' type="text" placeholder='Start your search'/>
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
       </div>

       <div className='flex items-center space-x-4 justify-end text-gray-500'> 
        <p className='hidden md:inline'>Become a host</p> 
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
            <Bars3Icon className='h-6'/>
            <UserCircleIcon className='h-6'/>
        </div>
       </div>
    </header>
  )
}

export default Header
