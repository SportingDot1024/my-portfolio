import React from 'react'
import {ArrowDownTrayIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
import Education from "@/Components/Education";

const About = () => {
    return (
        <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
                <div>
                    <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]'>
                        ABOUT ME
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                        Creating <span className='text-yellow-400'>Impact</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[50px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                        <p className='text-[18px] text-slate-300 w-[90%] text-justify'>
                            Hello, I’m Pavan Sriram, a 3rd-year Computer Science and Engineering student
                            with a strong passion for Data Science and Machine Learning. My strengths include
                            dedication, commitment, and effective time management.I manage my time well by
                            setting clear deadlines and breaking tasks into smaller parts. My goal is to become
                            a software engineer, focusing on innovative and impactful projects.
                        </p>
                    </div>
                    <a href='https://drive.google.com/file/d/1q9JLkabIoulWxb9jvDeCtUf8DL9pejwf/view?usp=sharing'
                       target="_blank" rel="noopener noreferrer">
                        <button
                            className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center'>
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] text-black'/>
                        </button>
                    </a>
                </div>
                <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative '>
                    <Image
                        src='/images/about.png'
                        alt='about'
                        layout='fill'
                        objectFit='contain'
                        className='relative z-[11] w-[100%] h-[100%] object-contain'
                    />
                    <div className='absolute w-[100%] h-[100%] z-[10] bg-[#55e7a5] top-[-2rem] right-[-2rem]'></div>
                </div>
            </div>
        </div>
    )
}
export default About
