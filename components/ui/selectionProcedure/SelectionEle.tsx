import React from 'react'

function SelectionEle({ title }: { title: string }) {
    return (
        <div className='relative rounded-full flex w-min h-min items-center justify-center mb-8 md:mb-0'>
            <div className='rounded-full bg-[#E1EAFF] w-14 h-14 md:w-20 md:h-20 blur-[10px] md:blur-[15px]' />
            <p className='absolute text-lg md:text-2xl lg:text-3xl font-semibold text-nowrap'>{title}</p>
        </div>
    )
}

export default SelectionEle
