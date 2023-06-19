import React from 'react'
import { SiReact, SiTailwindcss, SiFirebase, SiOpenai, SiNodedotjs, SiExpo, SiExpress, SiTypescript } from 'react-icons/si'

type Props = {
    name: string
}

const Icon = (props: Props) => {
  return (
    <div>
        {
            {   
                "Node.js": <SiNodedotjs/>,
                "Expo": <SiExpo/>,
                "React": <SiReact/>,
                "React Native": <SiReact/>,
                "Tailwind": <SiTailwindcss/>,
                "OpenAI": <SiOpenai/>,
                "Express": <SiExpress/>,
                "TypeScript": <SiTypescript/>,
                "Firebase": <SiFirebase size={15}/>,

            } [props.name] || <></>
        }
    </div>
  )
}

export default Icon