import React from 'react'
import { GlobeAltIcon, CurrencyRupeeIcon , ChevronUpIcon } from '@heroicons/react/24/outline'

const Footer = () => {
    return (
        <div className='flex justify-between md:items-center py-5 border-t border-gray-200 shadow-2xl px-10'>
            <div className='flex gap-4 flex-col md:flex-row  text-gray-600 text-base'>
                <h5>© 2023 Airbnb, Inc.</h5>
                <ul className='gap-2 md:gap-4 flex flex-col md:flex-row justify-center md:items-center '>
                    <li>• Privacy</li>
                    <li>• Terms</li>
                    <li>• Sitemap</li>
                    <li>• Company details</li>
                    <li>• Destinations</li>
                </ul>
            </div>

            <div className='flex flex-col md:flex-row gap-4 text-[15px] font-semibold text-gray-800 items-center md:justify-center'>
                <div className='inline-flex gap-1 items-center justify-center'>
                    <GlobeAltIcon className='h-4' />
                    English (IN)
                </div>

                <div className='inline-flex gap-1 items-center justify-center'>
                    <CurrencyRupeeIcon className='h-4' />
                    INR
                </div>

                <div className='inline-flex gap-1  items-center justify-center w-max'>
                    Support & resources
                    <ChevronUpIcon className='h-4' />
                </div>

            </div>

        </div>
    )
}

export default Footer
