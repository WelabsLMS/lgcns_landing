import React from 'react'

function ApplyTitle({ title, subTitle, required, notice }: { title: string, subTitle?: string, required?: boolean, notice?: string }) {
    return (
        <>
            <p className='applyTitle'>{title}{required ? <span className='text-red-600'>*</span> : null}</p>
            <p className='text-[#969696] font-semibold text-xl lg:text-2xl whitespace-pre-line'>{subTitle}</p>
            <p className='text-red-600 font-semibold text-xl lg:text-2xl whitespace-pre-line'>{notice}</p>
        </>
    )
}

export default ApplyTitle