import React from 'react'
import SkillsLanguage from "@/Components/SkillsLanguage";
{/* import SkillsItem from "@/Components/ExperienceItem"; */}

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[4rem] pb-[4rem] bg-[#09102a]'>
            <h1 className='heading'>My <span className='text-yellow-400'>Experience</span>
            </h1>
            <div
                className='w-[80%] mx-auto pt-[4rem] md:pt-[5rem] grid  grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    {/* <ExperienceItem title='Student' year='2024-25' />*/}
                </div>
                <div>
                    {/* <ExperienceItem title='Student' year='2024-25' />*/}
                </div>
            </div>
        </div>
    )
}
export default Skills
