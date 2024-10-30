'use client'
import React from 'react'

function ScrollToTop() {
    return (
        <div
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className='fixed bottom-5 right-5 lg:bottom-10 lg:right-10 bg-[#C2D3FF] rounded-full w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center z-[1000] cursor-pointer border'>
            {/* generate scroll to top icon */}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 lg:w-8 lg:h-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='white'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 10l7-7m0 0l7 7m-7-7v18'
                />
            </svg>
        </div>
    )
}

export default ScrollToTop