import Image from 'next/image'
import React from 'react'

interface SelectionEleProps {
    id: number
    imgSrc: string
    title: string
    desc: string
}

function SelectionEle({ selectionEle }: { selectionEle: SelectionEleProps }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='relative rounded-full flex flex-col w-[200px] h-[200px] items-center bg-[#DEE7FF] justify-center mb-3'>
                <div className='relative mb-3 w-20 h-20'>
                    <Image src={selectionEle.imgSrc} alt={selectionEle.title} fill />
                </div>
                <p className='text-2xl font-semibold text-nowrap'>{selectionEle.title}</p>
                {
                    selectionEle.id !== 4 ?
                        <div className='hidden lg:block lg:absolute -right-full w-full h-[3px] bg-[#DEE7FF]' /> : null
                }
            </div>
            <p className='text-center whitespace-pre-line text-xl font-semibold'>{selectionEle.desc}</p>
        </div>
    )
}

export default SelectionEle
