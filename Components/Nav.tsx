import React from "react";
import {Bars3Icon} from "@heroicons/react/20/solid";
import Image from "next/image";

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    return (
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[90%] mx-auto h-[100%] ">
                <div className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold ">
                    <Image src="/images/sk.png" alt="Sriram" width={100} height={80}/>
                </div>
                <div className="nav-link">HOME</div>
                <div className="nav-link">ABOUT</div>
                <div className="nav-link">SERVICES</div>
                <div className='nav-link'>SKILLS</div>
                <div className="nav-link">PROJECTS</div>
                <div className="nav-link">PROFILES</div>
                <div className="nav-link">CONTACT</div>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
                </div>
            </div>
        </div>
    );
};

export default Nav;