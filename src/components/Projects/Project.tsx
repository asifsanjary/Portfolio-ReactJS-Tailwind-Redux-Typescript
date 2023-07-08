import React from 'react'
import ButtonStyleText from './ButtonStyleText'

export interface ProjectInfo {
    imgSrc: any
    title: string
    stack: string[]
    description: string
    siteUrl: string
}

const Project = ({ props: { imgSrc, title, stack, description, siteUrl } }: { props: ProjectInfo }) => {
    return (
        <div className='flex flex-col w-[610px] h-[770px] mb-2 p-10 shadow-lg shadow-slate-400'>
            <a href={siteUrl}>
                <img src={imgSrc} alt={title} className='object-fill shadow-md rounded-md mt-2 w-[550px] h-[350px]' />
                <h2 className='text-4xl mt-2 p-1 hover:underline underline-offset-4 decoration-blue-600'>{title}</h2>
            </a>
            <div className='flex flex-wrap gap-1 mt-2'>
                {stack.map((item, index) => (
                    <ButtonStyleText key={index} item={item} />
                ))}
            </div>
            <pre className='text-xl p-1 mt-5 mb-3 overflow-auto'>{description}</pre>
        </div>
    )
}

export default Project