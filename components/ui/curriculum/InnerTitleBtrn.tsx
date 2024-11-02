import React from 'react'

function InnerTitleBtrn({ title }: { title: string }) {
    return (
        <div className='bg-[#002278] w-24 md:w-32 lg:w-36 text-center text-nowrap text-white border rounded-full py-2 text-xl lg:text-2xl font-bold flex justify-center'>
            <p>{title}</p>
        </div>
    )
}

export default InnerTitleBtrn