import React from 'react'
import ProjectItem from './ProjectItem'
import { BsFillFileEarmarkCodeFill, BsChevronDoubleDown } from 'react-icons/bs'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center row-span-2 space-y-10 w-[100%] md:w-[90%] lg:w-[75%] xl:w-[65%]'>
        <div className='flex flex-row justify-start items-center pb-2 border-b border-neutral-200'>
            <BsFillFileEarmarkCodeFill/>
            <h1 className='text-xl font-bold pl-2 pr-2'>Projects</h1> 
            <motion.div initial={{x: 100}}
                animate={{x: 0}}>
                <BsChevronDoubleDown className='animate-bounce'/>
            </motion.div>
        </div>
        <ProjectItem name="Jott"
                    website='https://jottcode.com' 
                    code='https://github.com/xorizon/jott'
                    appCode='https://github.com/xorizon/jott_mobile'
                    points={["Web and mobile application powered by GPT-3.5, allowing users to code with natural language.", 
                             "Shared database and authentication system that syncs code across all devices."]}
                    techStack={["React", "React Native", "Tailwind", "Firebase", "Expo", "OpenAI"]}/>
        
        <ProjectItem 
            name='LA Fitness Front-End'
            website='' 
            code=''
            appCode='https://github.com/xorizon/la_fitness_rebuild'
            points={["A complete front-end rebuild for the LA Fitness app."]}
            techStack={["React", "React Native", "TypeScript", "Tailwind", "Expo"]}/>
        
        <ProjectItem 
            name='News Driven by Bitcoin'
            website='' 
            code='https://github.com/xorizon/lightning_news'
            appCode=''
            points={["Concept project for news payable with a Lightning Network Invoice to change news writing incentives."]}
            techStack={["React", "Tailwind", "Express"]}/>
        
        <ProjectItem 
            name='Start Page'
            website='https://dev-dashboard.herokuapp.com' 
            code='https://github.com/xorizon/dashboard'
            appCode=''
            points={["Launch page complete with Google search, stock prices, current weather, and frequently used documentation"]}
            techStack={["React", "Tailwind", "Express"]}/>

        <ProjectItem name="Featherr"
            website='https://featherr.io' 
            code='https://github.com/xorizon/featherr'
            appCode=''
            points={["Swiss Army Knife of common uses for GPT-3.5, particularly useful for students.", 
                     "Includes pages for text summarization, citation formatting, and even mathematics help"]}
            techStack={["React", "React Native", "Tailwind", "Firebase", "Expo", "OpenAI"]}/>

        <ProjectItem 
            name='Volatility Info'
            website='' 
            code='https://github.com/xorizon/dashboard'
            appCode=''
            points={["Dashboard with options implied volatility for major stock indexes",
                    "Includes model predictions, web scraped from NYU Stern's Volitility Lab"]}
            techStack={["React", "Tailwind", "Express"]}/>

    </div>)
}

export default Projects