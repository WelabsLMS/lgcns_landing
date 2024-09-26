import React from 'react'

function SelectionEle({ title }: { title: string }) {
    return (
        <div className='flex w-min h-min items-center justify-center'>
            <div className='rounded-full bg-[#E1EAFF] w-40 h-40 blur-[15px]' />
            <p className='absolute text-3xl font-semibold'>{title}</p>
        </div>
    )
}

export default SelectionEle