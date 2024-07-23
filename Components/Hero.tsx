/* eslint-disable-next-line react/no-unescaped-entities */
import React from 'react'
import Particle from "./Particle";
import TextEffect from "@/Components/TextEffect";
import Image from "next/image";
import {ArrowDownTrayIcon} from "@heroicons/react/20/solid";

const Hero = () => {
    return (
        <div className='h-[88vh] bg-[url("/images/banner.jpg")] mt-[10vh] bg-cover bg-center'>
            <Particle/>
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        HI, I AM <span className='text-yellow-400'> SRIRAM </span>
                    </h1>
                    <TextEffect/>
                    <p className='mt-[2rem] text-[18px] text-[#ffffff92]'>
                        Driven by a passion for AI and web development,
                        I leverage my skills as a freelancer to craft innovative
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        end-to-end web solutions. I'm eager to combine
                        technology with my desire to make a meaningful impact.
                    </p>
                    <div
                        className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <a href='https://drive.google.com/file/d/1q9JLkabIoulWxb9jvDeCtUf8DL9pejwf/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                            <button
                                className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center'>
                                <p>Download CV</p>
                                <ArrowDownTrayIcon className='w-[1.6rem] text-black'/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
                    <Image src='/images/u1.jpg' alt='user' layout='fill' className='object-cover rounded-full'/>
                </div>
            </div>
        </div>
    )
}
export default Hero
