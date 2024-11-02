import Image from 'next/image'
import React from 'react'

function OverViewEle({ key, title, contents }: { key:number, title: string, contents: string }) {
    return (
        <div className={`whitespace-pre text-wrap text-center lg:text-start flex flex-col items-center lg:items-start p-4`}>
            <div className='w-[100%] flex flex-col items-center'>
                <Image src={'/assets/images/overview/cloudIcon.svg'} alt={'cloud'} width={30} height={30} />
                <p className="text-lg lg:text-3xl font-extrabold text-gray-800">{title}</p>
            </div>
            <p className="text-sm lg:text-xl font-semibold lg:mt-4">{contents}</p>
        </div>
    )
}

export default OverViewEle
