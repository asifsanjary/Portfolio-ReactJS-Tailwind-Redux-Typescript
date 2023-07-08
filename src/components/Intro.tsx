import React from 'react'

var asifsanjary = require('../assets/asifsanjary.jpg');

const Intro = () => {
    return (
        <div className='flex mt-20 ml-2 items-center' id='Intro'>
            <img src={asifsanjary} alt="Asif Sanjary" className='rounded-md shadow-lg shadow-slate-400 w-[200px] h-[200px]' />
            <div className='flex flex-col ml-4'>
                <h1 className='text-5xl p-1'><span className='font-pacifico'>Hi, I am</span> Asif Sanjary</h1>
                <pre className='text-lg mt-2 p-2'>
                    {`As a Full-Stack Developer with extensive experience of 4+ years in both Front-end and Back-end development, I am able to work independently and in pair programming settings. I am a good team player who can adjust quickly in every environment and hit the ground running.`}
                </pre>
                <div className='flex items-center font-crimson-text font-bold mt-5'>
                    <p className='p-3 text-4xl italic'>Let's collaborate to bring your vision to life!</p>
                    <a href="mailto:send@asifsblog.com"><button className='p-3 text-3xl bg-white rounded-3xl shadow-md shadow-slate-400'>Get In Touch</button></a>
                </div>
            </div>
        </div>
    )
}

export default Intro