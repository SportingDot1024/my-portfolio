import React from 'react'
import {ChartBarSquareIcon, CodeBracketSquareIcon, RocketLaunchIcon, TableCellsIcon} from "@heroicons/react/20/solid";

const Services = () => {
    return (
        <div className='bg-[#121212] pt-[2rem] md:pt-[4rem] pb-[3rem]'>
            <p className='heading'>
                My <span className='text-yellow-400'>Services</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <div>
                    <div className='bg-blue-700 rounded-2xl hover:scale-110 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'>
                        <ChartBarSquareIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            ML Engineer
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] text-justify font-normal'>
                            Leveraging advanced ML techniques to develop predictive models.
                            Specializing in data preprocessing, model training, and evaluation to
                            address real-world problems effectively.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='bg-red-700 rounded-2xl hover:scale-110 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'>
                        <CodeBracketSquareIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Full Stack
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] text-justify font-normal'>
                            Designing and developing intuitive, responsive, and visually appealing
                            user interfaces. Utilizing modern web technologies to create seamless
                            and engaging user experiences.
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        className='bg-amber-900 rounded-2xl hover:scale-110 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'>
                        <RocketLaunchIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Backend
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] text-justify font-normal'>
                            Building robust, scalable, and efficient server-side applications. Ensuring
                            secure data management and seamless integration with frontend
                            to support different platforms.
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        className='bg-[#2d3748] rounded-2xl hover:scale-110 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'>
                        <TableCellsIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Data Analyst
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] text-justify font-normal'>
                            Analyzing complex datasets to extract actionable insights. Using statistical
                            methods and visualization tools to inform decision-making and support business
                            strategies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services
