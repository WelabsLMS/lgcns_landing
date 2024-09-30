import Image from 'next/image'
import React from 'react'

function OverViewEle({ title, contents }: { title: string, contents: string }) {
    return (
        <div className='w-full lg:w-[33%] lg:px-4'>
            <div className="whitespace-pre text-wrap">
                <Image src={'/assets/images/overview/cloudIcon.svg'} alt={'cloud'} width={30} height={30} />
                <p className="text-xl lg:text-3xl font-extrabold text-gray-800">{title}</p>
                <p className="text-lg lg:text-xl font-semibold mt-4">{contents}</p>
            </div>
        </div>
    )
}

export default OverViewEle
