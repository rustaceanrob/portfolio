import { useScroll, motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
    const { scrollYProgress } = useScroll()
    return (
        <div className='sticky top-0 flex flex-row justify-between items-center pt-5 pb-5 bg-trasparent border-b border-neutral-200 pl-5 pr-5'>
            <div className='flex flex-row justify-center items-center space-x-2'>
                <button className='text-neutral-600 font-semibold text-sm border-r pr-2 hover:scale-105 duration-200'>Home</button>
                <button className='text-neutral-600 font-semibold text-sm border-r pr-2 hover:scale-105 duration-200'>Section 1</button>
                <button className='text-neutral-600 font-semibold text-sm border-r pr-2 hover:scale-105 duration-200'>Section 2</button>
                <button className='text-neutral-600 font-semibold text-sm hover:scale-105 duration-200'>Section 3</button>
            </div>
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg-white" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </div>
    )
}

export default Header