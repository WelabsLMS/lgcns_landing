import React from 'react'

function BoxTitle({title}: {title: string}) {
    return (
        <div className='rounded-full bg-white px-10 py-2 lg:px-10 lg:py-3 mb-5'>
            <p className='text-2xl lg:text-3xl font-extrabold text-[#5984EC]'>{title}</p>
        </div>
    )
}

export default BoxTitle