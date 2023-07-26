import { useEffect } from 'react'
import Project, { ProjectInfo } from './Project'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import { setNewActiveNavBarItem } from '../Header/NavBarSlice'


const Projects = () => {
    const currentNavIndex = 1
    const [projectsRef, projectsInView] = useInView({ threshold: 0.3 })

    const dispatch = useDispatch()

    useEffect(() => {
        if (projectsInView) {
            dispatch(setNewActiveNavBarItem(currentNavIndex))
        }
    }, [projectsInView, dispatch])

    var sampleproect = require('../../assets/sampleproect.png')
    var openTableScreenshot = require('../../assets/screenshotOpenTable.png')
    var jobsterScreenshot = require('../../assets/screenshotJobster.png')

    const projectInfos: ProjectInfo[] = [
        {
            imgSrc: openTableScreenshot,
            title: "Open Table Clone",
            stack: ["ReactJS", "NextJS", "Tailwind CSS", "PostgreSQL", "Prisma", "Axios", "TypeScript", "HTML"],
            description: `An open table website clone. This is a full-stack project written in NextJS. Features are the following:
1. Search Restaurants with Region, Cuisine, and Pricing Filter
2. Restaurant details page with photos, menus, reviews, and reservation
3. Restaurant Reservation based on Time Availability and Party Size
4. Sign In and Sign Up for customer`,
            siteUrl: "https://opentableclone.vercel.app/"
        },
        {
            imgSrc: jobsterScreenshot,
            title: "Jobster",
            stack: ["ReactJS", "CSS Styled Components", "Redux", "Axios", "HTML"],
            description:
                `Jobster:
1. Track all the jobs applied so far. Update their status (interview, pending, declined)
2. Monthly chart view of jobs applied in the last 6 months. Add & Update details of jobs
3. Search jobs with filters and pagination were also added.
4. Unauthorized access handled.
5. Login, Register page added with Logout functionality.`,
            siteUrl: "https://jobster-ecru.vercel.app/"
        }]

    return (
        <div className='mt-20' id='Projects' ref={projectsRef}>
            <h1 className='text-5xl font-extrabold p-1 mb-2'>Projects I Worked On</h1>
            <div className='flex flex-wrap mt-5 gap-5'>
                {projectInfos.map((projectInfo, index) => {
                    return (
                        <Project key={index} props={projectInfo} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects