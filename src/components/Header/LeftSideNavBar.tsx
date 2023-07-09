import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNewActiveNavBarItem, selectedIndex } from './NavBarSlice'

const LeftSideNavBar = () => {
    const activeNavIndex = useSelector(selectedIndex)

    const dispatch = useDispatch()

    const navBarItems: readonly string[] = ["Intro", "Projects", "Skills", "Employment"]

    const getNavItemStyle = (index: number): string => {
        const commonStyle = "text-3xl text-center px-3 py-1 font-semibold"
        return (activeNavIndex === index) ?
            (`${commonStyle} decoration-slate-900 underline underline-offset-4`) :
            (`${commonStyle} no-underline hover:bg-slate-200 hover:rounded-2xl`)
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, navIndex: number) => {
        dispatch(setNewActiveNavBarItem(navIndex))
    }

    return (
        <>
            {navBarItems.map((item, index) => (
                <a
                    key={index}
                    onClick={(e) => handleClick(e, index)}
                    className={getNavItemStyle(index)}
                    href={`#${item}`}>
                    {item}
                </a>
            ))}
        </>
    )
}

export default LeftSideNavBar