import React, { useState } from 'react'
import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";

const SocialIcons = () => {
    const [showIcons, setShowIcons] = useState(false);

    return (
        <div className="fixed right-3 top-1/4 transform -translate-y-1/5 z-50 animate-spin">
            <div className="bg-blue-400 opacity-80 p-3 rounded-full">
                <div className='w-[2rem] h-[2rem] mx-auto text-[#d3fae8]'>
                    <ArrowRightIcon
                        className={showIcons ? '' : 'hidden'}
                        onClick={() => setShowIcons(!showIcons)}
                    />
                    <ArrowLeftIcon
                        className={showIcons ? 'hidden' : ''}
                        onClick={() => setShowIcons(!showIcons)}
                    />
                </div>
                {showIcons && (
                    <>
                        <a href="https://www.linkedin.com/in/shriram-kannuri/" target="_blank" rel="noopener noreferrer" className="mr-3">
                            <Image src='/icons/linkedin.png' alt='linkedin' width={40} height={40}/>
                        </a>
                        <a href="https://github.com/SportingDot1024" target="_blank" rel="noopener noreferrer" className="mr-3">
                            <Image src='/icons/github.png' alt='github' width={40} height={40}/>
                        </a>
                        <a href="https://x.com/Shriram_Kannuri" target="_blank" rel="noopener noreferrer" className="mr-3">
                            <Image src='/icons/x.png' alt='twitter' width={40} height={40}/>
                        </a>
                    </>
                )}
            </div>
        </div>
    )
}

export default SocialIcons;