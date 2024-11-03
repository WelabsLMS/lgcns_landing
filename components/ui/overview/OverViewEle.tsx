import Image from 'next/image'
import React from 'react'

function OverViewEle({ title, contents, id }: { title: string, contents: string, id: number }) {
    return (
        <div className={`whitespace-pre text-wrap text-center flex flex-col items-center p-4 ${id == 1 || id==3 ? 'border-r':''} ${id == 1 || id == 2 ? 'border-b md:border-b-0':''} border-dotted border-[#00227830]`}>
            <div className='w-[100%] flex flex-col items-center'>
                <Image src={'/assets/images/overview/cloudIcon.svg'} alt={'cloud'} width={25} height={25} className='block md:hidden'/>
                <Image src={'/assets/images/overview/cloudIcon.svg'} alt={'cloud'} width={30} height={30} className='hidden md:block'/>
                <p className="text-lg lg:text-3xl font-extrabold text-gray-800">{title}</p>
            </div>
            <p className="text-sm lg:text-xl font-semibold lg:mt-4">{contents}</p>
        </div>
    )
}

export default OverViewEle
