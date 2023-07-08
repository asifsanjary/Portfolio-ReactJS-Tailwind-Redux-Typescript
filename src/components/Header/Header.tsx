import React from 'react'
import LeftSideNavBar from './LeftSideNavBar';
import RightSideNavBar from './RightSideNavBar';

const Header = () => {
    return (
        <div className='flex flex-wrap p-1 bg-white border-b-4 border-zinc-200 fixed top-0 w-4/6'>
            <div className='grow-[8] flex flex-wrap justify-start items-center'>
                <LeftSideNavBar />
            </div>
            <div className='grow-0 flex flex-wrap justify-end items-center'>
                <RightSideNavBar />
            </div>
        </div>
    )
}

export default Header