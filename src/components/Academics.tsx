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
        <motion.div className='flex flex-col justify-start border-neutral-200 dark:border-neutral-700 border rounded-md dark:bg-neutral-950 bg-white px-8 py-8 md:px-10 md:py-10'
            initial={{x: -400}} animate={{x: 0}}>
            <div className='flex flex-row justify-start items-center border-neutral-200 dark:border-neutral-700 border-b pb-2'>
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
            <div className='flex flex-row justify-start items-center border-neutral-200 dark:border-neutral-700 border-b pb-2 pt-10'>
                <h1 className='lg:text-xl text-lg font-bold pr-2'>Books</h1>
                <ImBooks size={22}/>
            </div>
            <a target="_blank" href="https://www.resistance.money/research/library/to%20be%20organised%20better/The%20Bitcoin%20Standard.pdf" className='flex flex-row justify-start items-center pt-5 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>The Bitcoin Standard</h1>
            </a>
            <a target="_blank" href="https://ia801600.us.archive.org/28/items/DeepNutritionWhyYourGenesNeedTraditionalFood/DeepNutritionWhyYourGenesNeedTraditionalFood.pdf" className='flex flex-row justify-start items-center pt-2 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>Deep Nutrition</h1>
            </a>
            <a target="_blank" href="https://github.com/bitcoinbook/bitcoinbook" className='flex flex-row justify-start items-center pt-2 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>Mastering Bitcoin</h1>
            </a>
            <a target="_blank" href="http://14.139.161.31/OddSem-0822-1122/Hands-On_Machine_Learning_with_Scikit-Learn-Keras-and-TensorFlow-2nd-Edition-Aurelien-Geron.pdf" className='flex flex-row justify-start items-center pt-2 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>Hands-on Machine Learning</h1>
            </a>
            <a target="_blank" href="https://srinathramakrishnan.files.wordpress.com/2019/02/brief-summary-of-atomic-habits.pdf" className='flex flex-row justify-start items-center pt-2 cursor-pointer hover:animate-pulse'>
                <BsLink45Deg size={18}/>
                <h1 className='pl-2 text-sm font-semibold'>Atomic Habits</h1>
            </a>
        </motion.div>
    </div>
  )
}

export default Academics