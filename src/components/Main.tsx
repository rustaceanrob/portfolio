import React from 'react'
import { motion } from 'framer-motion'
import { SiTypescript, SiTailwindcss, SiReact, SiFirebase, SiLinkedin, SiYoutube, SiGithub, SiBitcoin, SiPython, SiExpo } from 'react-icons/si'
import { SlLocationPin } from 'react-icons/sl'
import { VscFoldDown } from 'react-icons/vsc'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center w-full'>
            <motion.div className='flex flex-col justify-center items-center border border-neutral-200 px-10 py-10 rounded-md bg-white'
                        initial={{x: -400}} 
                        animate={{x: 0}}>
                <h1 className='lg:text-xl text-lg font-bold border-b border-neutral-200 pb-2'>Welcome to my portfolio</h1>
                <div className='pt-5'>
                    <img src={require('../assets/profile-pic-color.png')} className='object-cover border border-neutral-200 h-40 w-40 rounded-3xl'></img>
                </div>
                <div className='flex flex-row justify-center items-center pt-5'>
                    <SlLocationPin size={12}/>
                    <h1 className='pl-2 text-sm'>San Diego, CA</h1>
                </div>
                <div className='pt-5 pb-5 flex flex-row items-center space-x-5'>
                    <SiLinkedin size={20} className='duration-200 hover:text-blue-800 hover:cursor-pointer'/>
                    <SiGithub size={22} className='hover:cursor-pointer duration-200 hover:text-purple-800'/>
                    <SiYoutube size={25} className='duration-200 hover:text-red-600 hover:cursor-pointer'/>
                </div>
                {/* <h1 className='text-sm pt-5 border-t border-neutral-200'>ML Eng. turned Full Stack Eng.</h1> */}
                <div className='flex flex-row justify-center items-center space-x-5 pt-5 border-t border-neutral-200'>
                    <div>
                        <SiTypescript size={20} className=''/>
                    </div>
                    <div>
                        <SiTailwindcss size={20} className=''/>
                    </div>
                    <div>
                        <SiReact size={20} className='animate-spin-slow'/>
                    </div>
                    <div>
                        <SiExpo size={20} className=''/>
                    </div>
                    <div>
                        <SiPython size={20} className=''/>
                    </div>
                    <div>
                        <SiBitcoin size={20} className=''/>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Main