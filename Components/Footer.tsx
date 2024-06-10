import React from 'react'
import {MapPinIcon} from "@heroicons/react/20/solid";

const Footer = () => {
    return (
        <div className='pt-[1rem] pb-[4rem] bg-[#02050a]'>
            <div
                className='grid border-b-[1px] pb-[3rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
            </div>
            <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
                <div className='text-[18px] mb-[2rem] md:mb-0 text-white opacity-85'>
                    &copy; 2024 Pavan Sriram Kannuri-Portfolio. All Rights Reserved
                </div>
                <div className='flex items-center space-x-10'>
                    <a href="tel:+917207466977" className='text-[16px] text-white opacity-80'>(+91) 7207466977</a>
                    <a href="mailto:shriram_kannuri@outlook.com" className='text-[16px] text-white opacity-80'>shriram_kannuri@outlook.com</a>
                    <p className='text-[16px] text-white font-semibold opacity-80'>Shriram Kannuri</p>
                </div>
            </div>
        </div>
    )
}
export default Footer
