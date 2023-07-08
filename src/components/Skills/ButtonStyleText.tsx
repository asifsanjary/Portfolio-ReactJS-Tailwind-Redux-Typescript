import React from 'react'

const ButtonStyleText = ({ item }: { item: string }) => {
    return (
        <p className='text-white font-semibold text-xl bg-black px-4 py-2 rounded-md'>{item}</p>
    )
}

export default ButtonStyleText