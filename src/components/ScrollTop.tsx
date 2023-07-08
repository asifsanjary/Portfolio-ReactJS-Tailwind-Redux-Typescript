import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className={`fixed top-1/2 p-5 text-6xl ${visible ? "inline" : "hidden"}`}>
            <FaArrowCircleUp onClick={scrollToTop} />
        </button>
    )
}

export default ScrollTop