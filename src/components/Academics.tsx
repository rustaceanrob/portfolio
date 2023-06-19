import React from 'react'
import { motion } from 'framer-motion'
import { IoIosSchool } from 'react-icons/io'
import { CiCircleCheck } from 'react-icons/ci'
import { SlLocationPin } from 'react-icons/sl'
import { ImBooks } from 'react-icons/im'
import { BsLink45Deg } from 'react-icons/bs'

type Props = {}

const Academics = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <motion.div className='flex flex-col justify-start border-neutral-200 border rounded-md bg-white px-8 py-8 md:px-10 md:py-10'
            initial={{x: -400}} animate={{x: 0}}>
            <div className='flex flex-row justify-start items-center border-neutral-200 border-b pb-2'>
                <h1 className='lg:text-xl text-lg font-bold pr-2'>Education</h1>
                <IoIosSchool size={22}/>
            </div>
            <div className='flex flex-row justify-start items-center pt-5'>
                    <SlLocationPin size={18}/>
                    <h1 className='pl-2 text-sm'>University of California, Berkeley</h1>
                </div>
            <div className='flex flex-row justify-start items-center pt-2'>
                <CiCircleCheck size={18}/>
                <h1 className='pl-2 text-sm'>B.A. Applied Mathematics</h1>
            </div>
            <div className='flex flex-row justify-start items-center pt-2'>
                <CiCircleCheck size={18}/>
                <h1 className='pl-2 text-sm'>B.A. Data Science</h1>
            </div>
            <div className='flex flex-row justify-start items-center border-neutral-200 border-b pb-2 pt-10'>
                <h1 className='lg:text-xl text-lg font-bold pr-2'>Books</h1>
                <ImBooks size={22}/>
            </div>
            <a className='flex flex-row justify-start items-center pt-5 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>The Bitcoin Standard</h1>
            </a>
            <a className='flex flex-row justify-start items-center pt-2 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>Deep Nutrition</h1>
            </a>
            <a className='flex flex-row justify-start items-center pt-2 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>Mastering Bitcoin</h1>
            </a>
            <a className='flex flex-row justify-start items-center pt-2 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>Hands-on Machine Learning</h1>
            </a>
            <a className='flex flex-row justify-start items-center pt-2 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>Atomic Habits</h1>
            </a>
        </motion.div>
    </div>
  )
}

export default Academics