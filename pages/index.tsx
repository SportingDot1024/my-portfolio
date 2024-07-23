import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import React, {useState} from "react";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Education from "@/Components/Education";
import Footer from "@/Components/Footer";
import SocialIcons from "@/Components/SocialIcons";

const Page = () => {
    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

    return (
        <div className="overflow-x-hidden">
            <div>
                <MobileNav nav={nav} closeNav={closeNav}/>
                <Nav openNav={openNav}/>
                <Hero/>
                <div className='relative z-[30]'>
                    <About/>
                    <Education/>
                    <Services/>
                    {/* <Experience/> */}
                    {/* <Projects/> */}
                    {/* <Contact/> */}
                    <Skills/>
                    <Footer/>
                </div>
                <SocialIcons />
            </div>
        </div>
    );
};

export default Page;