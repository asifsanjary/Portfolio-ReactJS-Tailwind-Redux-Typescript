import { IconType } from 'react-icons/lib'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'

interface Link {
    icon: IconType;
    link: string;
}

const RightSideNavBar = () => {
    const linkItems: readonly Link[] = [
        { icon: AiFillGithub, link: "https://github.com/0sanjary" },
        { icon: AiFillLinkedin, link: "https://www.linkedin.com/in/0sanjary/" },
        { icon: AiFillTwitterCircle, link: "https://twitter.com/0sanjary" },
        { icon: HiOutlineMail, link: "mailto:send@asifsblog.com" }
    ]
    return (
        <>
            {linkItems.map((linkItem, index) => (
                <a
                    key={index}
                    className='text-4xl p-2 hover:rounded-lg hover:bg-slate-200'
                    href={linkItem.link}>
                    <linkItem.icon />
                </a>
            ))}
        </>
    )
}

export default RightSideNavBar