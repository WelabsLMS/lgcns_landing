import React from 'react'

function Curve({ id }: { id: number }) {
    if (id === 4) return null
    return (
        <div className=''>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`relative w-8 md:w-32 md:h-24 bottom-8 ${id % 2 === 0 ? "-scale-y-100 translate-y-8" : ""} `}
                viewBox="0 0 200 100"
                fill="none"
                stroke="gray"
                strokeWidth="8"
            >
                <path d="M 10,70 C 90,50 100,40 190,70" fill="transparent" strokeDasharray="8 8" />
                <polygon points="180,65 200,73 183,85" fill="gray" transform='rotate(45 190 70)' />
            </svg>
        </div>
    )
}

export default Curve
