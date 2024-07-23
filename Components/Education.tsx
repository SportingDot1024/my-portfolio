import React from 'react'
import {AcademicCapIcon, BuildingLibraryIcon} from "@heroicons/react/20/solid";

const Education = () => {
    return (
        <div className='bg-[#121a21] pt-[2rem] md:pt-[4rem] pb-[3rem]'>
            <p className='heading'>
                My <span className='text-yellow-400'>Education</span>
            </p>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <div>
                    <div
                        className='bg-blue-950 rounded-2xl hover:scale-110 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'>
                        <AcademicCapIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
                        <h1 className='text-[16px] md:text-[16px] mt-[1.5rem] mb-[1.5rem]'>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Vignan's Institute of Information Technology, Visakhapatnam
                        </h1>
                        <ul className='text-left text-[14px]'>
                            <li>B.Tech CSE</li>
                            <li>CGPA: 8.05</li>
                            <li>2021 - Present</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div
                        className='bg-blue-950 rounded-2xl hover:scale-110 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'>
                        <BuildingLibraryIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
                        <h1 className='text-[10px] md:text-[16px] mt-[1.5rem] mb-[1.5rem]'>
                            Navy Children School(NSB), Visakhapatnam
                        </h1>
                        <ul className='text-left text-[14px]'>
                            <li>12th</li>
                            <li>Percentage: 92.6</li>
                            <li>2020-2021</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div
                        className='bg-blue-950 rounded-2xl hover:scale-110 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'>
                        <BuildingLibraryIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
                        <h1 className='text-[10px] md:text-[16px] mt-[1.5rem] mb-[1.5rem]'>
                            Navy Children School(NSB), Visakhapatnam
                        </h1>
                        <ul className='text-left text-[14px]'>
                            <li>10th</li>
                            <li>Percentage: 91.4</li>
                            <li>2018-2019</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;