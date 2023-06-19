import Main from './Main'
import Academics from './Academics'
import Projects from './Projects'

type Props = {}

const Root = (props: Props) => {
    return (
        <div className=''>
            <div className='h-screen w-full'>
                <div className='flex flex-col justify-center items-center pt-4 sm:pt-10 pl-20 pr-20 bg-gradient-to-b from-slate-50 to-slate-200 pb-20'>
                    <div className='justify-center items-start grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-10 pb-10'>
                        <Main/>
                        <Academics/>
                    </div>
                    <Projects/>
                </div>
            </div>
        </div>
    )
}

export default Root