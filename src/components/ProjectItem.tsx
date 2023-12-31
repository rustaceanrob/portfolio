import { SiGithub } from 'react-icons/si'
import { CiExport } from 'react-icons/ci'
import { TbPoint } from 'react-icons/tb'
import Icon from './Icon'
import { motion } from 'framer-motion'

type Props = {
    name: string,
    website: string,
    code: string,
    appCode: string,
    points: string[],
    techStack: string[],
}

const ProjectItem = (props: Props) => {
  return (
    <motion.div className='flex flex-col w-full' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .1}}>
            <div className='px-10 py-10 border-neutral-200 dark:border-neutral-700 border rounded-md bg-white dark:bg-neutral-950'>
                <div className='flex justify-start items-center pb-5 border-b border-neutral-200 dark:border-neutral-700 space-x-2'>
                    <h1 className='sm:text-xl text-sm font-bold pr-2'>{props.name}</h1>
                    {props.code !== '' &&<a href={props.code} target="_blank" className='hover:animate-pulse border border-neutral-200 dark:border-neutral-700 flex flex-row justify-center items-center rounded-sm px-2 py-2'>
                        <SiGithub size={12} className='hover:cursor-pointer duration-200 hover:text-purple-800'/>
                        <h1 className='text-xs font-semibold pl-1'>Code</h1>
                    </a>}
                    {
                        props.appCode !== '' && <a href={props.appCode} target="_blank" className='hover:animate-pulse border border-neutral-200 dark:border-neutral-700 flex flex-row justify-center items-center rounded-sm px-2 py-2'>
                        <SiGithub size={12} className='hover:cursor-pointer duration-200 hover:text-purple-800'/>
                        <h1 className='text-xs font-semibold pl-1'>App</h1>
                    </a>}
                    {props.website !== '' && <a href={props.website} target="_blank" className='hover:animate-pulse border border-neutral-200 dark:border-neutral-700 flex flex-row justify-center items-center rounded-sm px-2 py-2'>
                        <CiExport size={12}/>
                        <h1 className='text-xs font-semibold pl-1'>Website</h1>
                    </a>}
                </div>
                <div className='flex flex-col pt-5 pb-5 space-y-2'>
                    {
                        props.points.map((point) => {
                            return (
                                <div className='flex flex-row justify-start items-center'>
                                    <h1 className='pl-2 text-sm'>{point}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-2 xl:grid-cols-3 xl:gap-2 gap-2 pt-5 border-t border-neutral-200 dark:border-neutral-700'>
                    {
                        props.techStack.map((tech) => {
                            return (
                                <div className='flex flex-row justify-center items-center px-2 py-2 border border-neutral-200 dark:border-neutral-700 rounded-sm'>
                                    <Icon name={tech}/>
                                    <h1 className='pl-2 text-xs'>{tech}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
  )
}

export default ProjectItem