import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='flex justify-center mt-40 mb-10'>
            <p className='text-center text-xl font-semibold'>Copyright © {currentYear} - All Rights Reserved | Asif Sanjary</p>
        </div>
    )
}

export default Footer