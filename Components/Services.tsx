import React from 'react';
import { ArrowLeftIcon, ChartBarSquareIcon, CodeBracketSquareIcon, RocketLaunchIcon, TableCellsIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

const cardContent = [
    {
        code: <div><div className='bg-amber-900 rounded-2xl hover:scale-100 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'><RocketLaunchIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]' /><h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1><p className='text-[15px] text-[#d3d2d2] text-justify font-normal'>Building robust, scalable, and efficient server-side applications. Ensuring secure data management and seamless integration with frontend to support different platforms.</p></div></div>
    },
    {
        code: <div><div className='bg-[#2d3748] rounded-2xl hover:scale-100 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'><TableCellsIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]' /><h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Data Analyst</h1><p className='text-[15px] text-[#d3d2d2] text-justify font-normal'>Analyzing complex datasets to extract actionable insights. Using statistical methods and visualization tools to inform decision-making and support business strategies.</p></div></div>
    },
    {
        code: <div><div className='bg-red-700 rounded-2xl hover:scale-100 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'><CodeBracketSquareIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]' /><h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Full Stack</h1><p className='text-[15px] text-[#d3d2d2] text-justify font-normal'>Designing and developing intuitive, responsive, and visually appealinguser interfaces. Utilizing modern web technologies to create seamless and engaging user experiences.</p></div></div>
    },
    {
        code: <div><div className='bg-blue-700 rounded-2xl hover:scale-100 transform transition-all duration-300 hover:translate-y-[-10px] uppercase font-semibold text-center p-[2rem]'><ChartBarSquareIcon className='w-[4rem] h-[4rem] mx-auto text-[#d3fae8]' /><h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>ML Engineer</h1><p className='text-[15px] text-[#d3d2d2] text-justify font-normal'>Leveraging advanced ML techniques to develop predictive models. Specializing in data preprocessing, model training, and evaluation to address real-world problems effectively.</p></div></div>
    }
];

const Services = () => {
    return (
        <div className='bg-[#121212] pt-[2rem] md:pt-[4rem] pb-[3rem] '>
            <p className='heading'>
                My <span className='text-yellow-400'>Services</span>
            </p>
            <div className='w-[90%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <Carousel opts={{ align: "start", loop: true}} className="w-full">
                    <CarouselContent className="flex">
                        {cardContent.map((content, index) => (
                            <CarouselItem key={index} className="flex-[0_0_33.33%] p-4">
                                {content.code}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious>
                        <ArrowLeftCircleIcon className="w-8 h-8 text-white" />
                    </CarouselPrevious>
                    <CarouselNext>
                        <ArrowRightCircleIcon className="w-8 h-8 text-white" />
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    )
}

export default Services;
