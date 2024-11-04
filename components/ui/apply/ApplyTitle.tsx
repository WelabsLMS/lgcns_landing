import React from 'react'

function ApplyTitle({ title, subTitle, required, notice, ex }: { title: string, subTitle?: string, required?: boolean, notice?: string, ex?: string }) {
    return (
        <>
            <p className='applyTitle'>{title}{required ? <span className='text-red-600'>*</span> : null} {ex && <span className='text-[#969696] xl:text-xl'>{ex}</span>} {notice && <span className='text-red-600 font-semibold text-lg lg:text-xl whitespace-pre-line'>{notice}</span>} </p>
            <p className={`text-[#969696] font-semibold text-sm md:text-base lg:text-xl xl:text-2xl whitespace-pre-line ${title.includes('서류') ? "md:whitespace-normal" : ""}`}>{subTitle}</p>
        </>
    )
}

export default ApplyTitle