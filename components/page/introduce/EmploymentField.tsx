import Image from 'next/image'
import React from 'react'

function EmploymentField() {
    return (
        <div className='mt-20'>
            <div className='flex gap-4'>
                <Image src="assets/images/introduce/circle_check.svg" alt="circlecheck" width={50} height={50} />
                <p className='text-3xl font-extrabold text-[#5984EC]'>취업분야</p>
            </div>
            <div className='w-2/3 flex flex-wrap justify-between '>
                <ol className='list-disc p-5 text-2xl leading-10 '>
                    <li>클라우드 엔지니어</li>
                    <li>DevOps 엔지니어</li>
                    <li>클라우드 아키텍트</li>
                    <li>프론트엔드 개발자</li>
                </ol>
                <ol className='list-disc p-5 text-2xl leading-10 '>
                    <li>백엔드 개발자</li>
                    <li>IT 컨설턴트</li>
                    <li>AI 엔지니어</li>
                    <li>기획자</li>
                </ol>
            </div>
        </div>
    )
}

export default EmploymentField