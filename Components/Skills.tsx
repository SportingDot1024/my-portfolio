import React from 'react'
import SkillsLanguage from "@/Components/SkillsLanguage";
{/* import SkillsItem from "@/Components/SkillsItem"; */}

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[4rem] pb-[4rem] bg-[#091a11]'>
            <h1 className='heading'>My <span className='text-yellow-400'>Skills</span>
            </h1>
            <div
                className='w-[80%] mx-auto pt-[4rem] md:pt-[5rem] grid  grid-cols-1 md:grid-cols-3 gap-[2rem] items-center'>
                <div>
                   <SkillsLanguage
                    skill1='Python'
                    skill2='Java'
                    skill3='C/C++'
                    skill4='Git/Github'
                    level1='w-[90%]'
                    level2='w-[70%]'
                    level3='w-[60%]'
                    level4='w-[80%]'
                    />
                </div>
                <div>
                    <SkillsLanguage
                    skill1='Machine Learning'
                    skill2='React.js'
                    skill3='Node.js'
                    skill4='Javascript'
                    level1='w-[80%]'
                    level2='w-[70%]'
                    level3='w-[70%]'
                    level4='w-[70%]'
                    />
                </div>
                <div>
                    <SkillsLanguage
                    skill1='MongoDB'
                    skill2='MySQL'
                    skill3='SQL'
                    skill4='Firebase'
                    level1='w-[80%]'
                    level2='w-[70%]'
                    level3='w-[50%]'
                    level4='w-[60%]'
                    />
                </div>
            </div>
        </div>
    )
}
export default Skills
