import { useEffect } from 'react'
import Employmet from './Employmet'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import { setNewActiveNavBarItem } from '../Header/NavBarSlice';

export interface Employment {
    employer: string;
    role: string;
    startDate: Date;
    endDate: Date;
    description: string;
}

const Employments = () => {

    const currentNavIndex = 3
    const [employmentsRef, employmentsInView] = useInView({ threshold: 0.3 })

    const dispatch = useDispatch()

    useEffect(() => {
        if (employmentsInView) {
            dispatch(setNewActiveNavBarItem(currentNavIndex))
        }
    }, [employmentsInView, dispatch])

    const employments: Employment[] = [
        {
            employer: "Agoda",
            role: "Software Engineer",
            startDate: new Date(2022, 5),
            endDate: new Date(2023, 5),
            description: `● Developing & maintaining a microservice architecture project where the Whitelabel partners manage hotels.
● Contributing to System design, Backend development with Scala, .NET, Microsoft SQL Server, and Frontend with React, Redux Typescript.`
        },
        {
            employer: "Samsung",
            role: "Software Engineer",
            startDate: new Date(2019, 5),
            endDate: new Date(2022, 5),
            description: `● Developed and maintained Android - Wear OS, Windows Desktop Applications.
● Namely worked on VeoSens (Android), QuickShare (Windows) & Bixby (Windows) - these 3 official projects.
● Passed the Professional test in May'21 and Advanced test in July’19, Coding Competency exams for Samsung engineers globally.
● Placed 3rd on April’21, 2nd on Feb’20, and 3rd on Jan’20, respectively in the SRBD Internal Monthly Programming Contest.
● Authored a Design and Use Case Patent for Smart Ring, rated A2 by Samsung.
● Proposed an Idea regarding Advanced Call Functions with Bixby and ranked third in Project Idea Selection in SRBD, 2021.
● Achieved the Icon of the Month Award at SRBD for August and September 2020.`
        }
    ]

    return (

        <div className='flex flex-col mt-20' id='Employment' ref={employmentsRef}>
            <h1 className='text-5xl font-extrabold'>Employment History</h1>
            {
                employments.map((employment, index) => {
                    return (
                        <Employmet key={index} props={employment} />
                    )
                })
            }
        </div>
    )
}

export default Employments