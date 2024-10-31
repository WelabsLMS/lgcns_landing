import React from 'react'

function InnerTitleBtrn({ title }: { title: string }) {
    return (
        <div className='bg-[#002278] w-24 md:w-36 lg:w-40 text-center text-nowrap text-white border rounded-full py-2 text-xl lg:text-4xl flex justify-center'>
            <p>{title}</p>
        </div>
    )
}

export default InnerTitleBtrn