import React from 'react'

const ButtonStyleText = ({ item }: { item: string }) => {
    return (
        <p className='text-white font-semibold text-base bg-black px-2 py-1 rounded-md'>{item}</p>
    )
}

export default ButtonStyleText