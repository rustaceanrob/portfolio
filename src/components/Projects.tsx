import React from 'react'
import ProjectItem from './ProjectItem'
import { BsFillFileEarmarkCodeFill, BsChevronDoubleDown } from 'react-icons/bs'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='flex flex-col justify-start items-center row-span-2 w-full space-y-10'>
        <div className='flex flex-row justify-start items-center pb-2 border-b border-neutral-200'>
            <BsFillFileEarmarkCodeFill/>
            <h1 className='text-xl font-bold pl-2 pr-2'>Projects</h1> 
            <motion.div initial={{x: 1500}}
                animate={{x: 0}}
                transition={{ delay: 3 }}>
                <BsChevronDoubleDown className='animate-bounce'/>
            </motion.div>
        </div>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
    </div>
  )
}

export default Projects