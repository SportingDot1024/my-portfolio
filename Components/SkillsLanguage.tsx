import React, { useEffect, useState } from 'react'

interface Props{
    skill1: string;
    skill2: string;
    skill3: string;
    skill4: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
}
const SkillsLanguage = ({level1, level2, level3, level4, skill1, skill2, skill3, skill4}: Props) => {
    const [width1, setWidth1] = useState('w-0');
    const [width2, setWidth2] = useState('w-0');
    const [width3, setWidth3] = useState('w-0');
    const [width4, setWidth4] = useState('w-0');

    useEffect(() => {
        setWidth1(level1);
        setWidth2(level2);
        setWidth3(level3);
        setWidth4(level4);
    }, [level1, level2, level3, level4]);

    return (
        <div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {skill1}
                </h1>
                <span className={`level-bar ${width1} bottom-0 h-[6px] absolute bg-yellow-400 `}></span>
            </div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {skill2}
                </h1>
                <span className={`level-bar ${width2} bottom-0 h-[6px] absolute bg-yellow-400 `}></span>
            </div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {skill3}
                </h1>
                <span className={`level-bar ${width3} bottom-0 h-[6px] absolute bg-yellow-400 `}></span>
            </div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {skill4}
                </h1>
                <span className={`level-bar ${width4} bottom-0 h-[6px] absolute bg-yellow-400 `}></span>
            </div>
        </div>
    )
}
export default SkillsLanguage;