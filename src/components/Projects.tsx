import ProjectItem from './ProjectItem'
import { BsFillFileEarmarkCodeFill, BsChevronDoubleDown } from 'react-icons/bs'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center row-span-2 space-y-10 w-[100%] md:w-[90%] lg:w-[75%] xl:w-[65%]'>
        <div className='flex flex-row justify-start items-center pb-2 border-b border-neutral-200 dark:border-neutral-700'>
            <BsFillFileEarmarkCodeFill/>
            <h1 className='text-xl font-bold pl-2 pr-2'>Projects</h1> 
            <motion.div initial={{x: 100}}
                animate={{x: 0}}>
                <BsChevronDoubleDown className='animate-bounce'/>
            </motion.div>
        </div>

        <ProjectItem name="Flow Bitcoin Wallet"
                    website='' 
                    code='https://github.com/rustaceanrob/flow'
                    appCode=''
                    points={["A fully featured Bitcoin wallet that extends the Ledger Nano S, ColdCard MK4, Specter DYI, and Keystone hardware wallet devices."]}
                    techStack={["Tauri", "React", "Tailwind", "Vite", "Bitcoin", "TypeScript", "Rust", "MIT License"]}/>

        <ProjectItem name="Coinline"
                    website='https://coinline.dev' 
                    code='https://github.com/rustaceanrob/coinline'
                    appCode=''
                    points={["A Bitcoin wallet completely in the command line."]}
                    techStack={["Rust", "MIT License"]}/>

        <ProjectItem name="Jott"
                    website='https://jottcode.com' 
                    code='https://github.com/rustaceanrob/Jott'
                    appCode='https://github.com/rustaceanrob/JottMobile'
                    points={["Web and mobile application powered by GPT-4, allowing users to code with natural language. Shared database and authentication system that syncs code across all devices."]}
                    techStack={["React", "React Native", "Tailwind", "Firebase", "Expo", "OpenAI"]}/>
        
        <ProjectItem 
            name='LA Fitness Front-End'
            website='' 
            code=''
            appCode='https://github.com/rustaceanrob/lafitness'
            points={["A complete front-end rebuild for the LA Fitness app."]}
            techStack={["React", "React Native", "TypeScript", "Tailwind", "Expo"]}/>

        <ProjectItem name="Digikey"
                    website='' 
                    code=''
                    appCode='https://github.com/rustaceanrob/digikey'
                    points={["A simple but powerful password manager. Data is encrypted and stored locally. Complete with Spanish support, quick search, dark mode, and open-source code."]}
                    techStack={["React Native", "Tailwind", "Expo", "TypeScript", "MIT License"]}/>

        <ProjectItem 
            name='Start Page'
            website='https://dev-dashboard.herokuapp.com' 
            code='https://github.com/rustaceanrob/dashboard'
            appCode=''
            points={["Launch page complete with Google search, stock prices, current weather, and frequently used documentation."]}
            techStack={["React", "Tailwind", "Express"]}/>
        
        <ProjectItem 
            name='News Driven by Bitcoin'
            website='' 
            code='https://github.com/rustaceanrob/news'
            appCode=''
            points={["Concept project for news payable with a Lightning Network Invoice to change news writing incentives [check out Nostr]."]}
            techStack={["React", "Tailwind", "Express"]}/>

        <ProjectItem name="Featherr"
            website='https://featherr.io' 
            code='https://github.com/rustaceanrob/featherr'
            appCode=''
            points={["Swiss Army Knife of common uses for GPT-3.5, particularly useful for students. Includes pages for text summarization, citation formatting, and even mathematics help."]}
            techStack={["React", "React Native", "Tailwind", "Firebase", "Expo", "OpenAI"]}/>

        <ProjectItem 
            name='Volatility Info'
            website='' 
            code='https://github.com/rustaceanrob/volatility'
            appCode=''
            points={["Dashboard with options implied volatility for major stock indexes. Includes model predictions, web scraped from NYU Stern's Volitility Lab.",]}
            techStack={["React", "Tailwind", "Express"]}/>

        <ProjectItem name="This Portfolio"
                    website='' 
                    code='https://github.com/rustaceanrob/portfolio'
                    appCode=''
                    points={["Shares some personal info."]}
                    techStack={["React", "Tailwind", "Firebase", "TypeScript", "MIT License"]}/>

    </div>)
}

export default Projects