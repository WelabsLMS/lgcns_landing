import React from 'react'

function ApplyTitle({ title, subTitle }: { title: string, subTitle?: string }) {
    return (
        <>
            <p className='applyTitle'>{title}</p>
            <p className='text-[#969696] font-semibold text-2xl whitespace-pre-line'>{subTitle}</p>
        </>
    )
}

export default ApplyTitle