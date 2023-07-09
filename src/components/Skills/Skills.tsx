import { useEffect } from 'react'
import ButtonStyleText from './ButtonStyleText';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux'
import { setNewActiveNavBarItem } from '../Header/NavBarSlice';

export interface Stack {
    category: string;
    items: string[];
}

const Skills = () => {

    const currentNavIndex = 2
    const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });

    const dispatch = useDispatch()

    useEffect(() => {
        if (skillsInView) {
            dispatch(setNewActiveNavBarItem(currentNavIndex))
        }
    }, [skillsInView, dispatch])

    const stacks: Stack[] = [
        { category: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "C#", "Scala", "Java", "Python", "PostgreSQL", "MSSQL", "GraphQL", "XML"] },
        { category: "Technologies", items: ["ReactJS", "NextJS", "Redux", "Axios", "Prisma", "Tailwind CSS", "ASP.NET", "Kafka", "GIT", "Docker", "Kibana", "Grafana"] },
        { category: "Roles", items: ["Front-end Engineer", "Back-end Engineer", "Android Developer"] }
    ]

    return (
        <div className='flex flex-col mt-20' id='Skills' ref={skillsRef}>
            <h1 className='text-5xl font-extrabold'>My Skill Set</h1>
            {stacks.map((stack, index) => {
                return (
                    <div key={index} className='flex flex-col mt-5'>
                        <h2 className='text-4xl'>{stack.category}</h2>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {stack.items.map((item, nestedIndex) => {
                                return (
                                    <ButtonStyleText item={item} key={nestedIndex} />
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills