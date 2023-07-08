import React from 'react'
import { Employment } from './Employments'

const Employmet = ({ props: { employer, role, startDate, endDate, description } }: { props: Employment }) => {
    return (
        <div className='flex flex-col items-start mt-5'>
            <h2 className='text-4xl'>{`${employer} | ${role}`}</h2>
            <h3 className='text-2xl mt-2'>{`${startDate.getFullYear()}-${endDate.getFullYear()}`}</h3>
            <pre className='mt-4 text-xl'>{description}</pre>
        </div>
    )
}

export default Employmet