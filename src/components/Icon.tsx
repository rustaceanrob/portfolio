import React from 'react'
import { SiReact, SiTailwindcss, SiFirebase, SiOpenai, SiNodedotjs, SiExpo, SiExpress, SiTypescript, SiBitcoin, SiTauri, SiRust, SiVite } from 'react-icons/si'
import { DiMitlicence } from 'react-icons/di'
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
                "Tauri": <SiTauri/>,
                "Rust": <SiRust/>,
                "Bitcoin": <SiBitcoin/>,
                "Vite": <SiVite/>,
                "MIT License": <DiMitlicence size={22}/>

            } [props.name] || <></>
        }
    </div>
  )
}

export default Icon