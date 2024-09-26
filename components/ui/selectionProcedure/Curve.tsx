import React from 'react'

function Curve({ id }: { id: number }) {
    if (id === 4) return null
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-32"
                viewBox="0 0 200 100"
                fill="none"
                stroke="gray"
                strokeWidth="2"
                transform={id % 2 === 0 ? "scale(1, -1) translate(0, -70)" : ""}
            >
                <path d="M 10,70 C 90,50 100,40 190,70" fill="transparent" strokeDasharray="8 8" />
                <polygon points="180,65 200,73 183,85" fill="gray" transform='rotate(45 190 70)' />
            </svg></div>
    )
}

export default Curve