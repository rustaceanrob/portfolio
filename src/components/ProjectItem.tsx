import React from 'react'
import { SiExpo, SiFirebase, SiGithub, SiOpenai, SiReact, SiTailwindcss } from 'react-icons/si'
import { CiExport } from 'react-icons/ci'
import { TbPoint } from 'react-icons/tb'

type Props = {}

const ProjectItem = (props: Props) => {
  return (
    <div className='flex flex-col justify-start items-start'>
            <div className='px-10 py-10 border-neutral-200 border rounded-md bg-white'>
                <div className='flex flex-row justify-start items-center pb-5 border-b border-neutral-200 space-x-4'>
                    <h1 className='text-xl font-bold pr-2'>Jott</h1>
                    <button className='hover:animate-pulse border border-neutral-200 flex flex-row justify-center items-center rounded-sm px-2 py-2'>
                        <CiExport size={16}/>
                        <h1 className='text-xs font-semibold pl-2'>Demo</h1>
                    </button>
                    <button className='hover:animate-pulse border border-neutral-200 flex flex-row justify-center items-center rounded-sm px-2 py-2'>
                        <SiGithub size={15} className='hover:cursor-pointer duration-200 hover:text-purple-800'/>
                        <h1 className='text-xs font-semibold pl-2'>Web</h1>
                    </button>
                    <button className='hover:animate-pulse border border-neutral-200 flex flex-row justify-center items-center rounded-sm px-2 py-2'>
                        <SiGithub size={15} className='hover:cursor-pointer duration-200 hover:text-purple-800'/>
                        <h1 className='text-xs font-semibold pl-2'>App</h1>
                    </button>
                </div>
                <div className='flex flex-col pt-5'>
                    <div className='flex flex-row justify-start items-center'>
                        <TbPoint size={15}/>
                        <h1 className='pl-2 text-sm'>Web and mobile application powered by GPT-3.5, allowing users to code with natural language.</h1>
                    </div>
                    <div className='flex flex-row justify-start items-center pt-2 pb-5'>
                        <TbPoint size={15}/>
                        <h1 className='pl-2 text-sm'>Shared database and authentication system that syncs code across all devices.</h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 xl:grid-cols-6 xl:gap-2 gap-2 pt-5 border-t border-neutral-200'>
                    <div className='flex flex-row justify-center items-center px-2 py-2 border border-neutral-200 rounded-sm'>
                        <SiReact size={15}/>
                        <h1 className='pl-2 text-xs font-semibold'>React</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-2 border border-neutral-200 rounded-sm'>
                        <SiReact size={15}/>
                        <h1 className='pl-2 text-xs font-semibold'>Native</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-2 border border-neutral-200 rounded-sm'>
                        <SiTailwindcss size={15}/>
                        <h1 className='pl-2 text-xs font-semibold'>Tailwind</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-2 border border-neutral-200 rounded-sm'>
                        <SiFirebase size={15}/>
                        <h1 className='pl-2 text-xs font-semibold'>Firebase</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-2 border border-neutral-200 rounded-sm'>
                        <SiExpo size={15}/>
                        <h1 className='pl-2 text-xs font-semibold'>Expo</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-2 border border-neutral-200 rounded-sm'>
                        <SiOpenai size={15}/>
                        <h1 className='pl-2 text-xs font-semibold'>GPT</h1>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectItem