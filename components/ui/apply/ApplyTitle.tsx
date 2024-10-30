import React from 'react'

function ApplyTitle({ title, subTitle, required }: { title: string, subTitle?: string, required?: boolean }) {
    return (
        <>
            <p className='applyTitle'>{title}{required ? <span className='text-red-600'>*</span> : null}</p>
            <p className='text-[#969696] font-semibold text-xl lg:text-2xl whitespace-pre-line'>{subTitle}</p>
        </>
    )
}

export default ApplyTitle