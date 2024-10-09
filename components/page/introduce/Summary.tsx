import Image from 'next/image'
import React from 'react'

function Summary() {
    return (
        <div className='mt-10 md:mt-20'>
            <div className='flex gap-4 items-center'>
                <Image src="assets/images/introduce/circle_check.svg" alt="circlecheck" width={40} height={40} />
                <p className='text-2xl md:text-4xl font-extrabold text-[#5984EC]'>강의개요</p>
            </div>
            <ol className='list-disc p-5 text-xl md:text-3xl leading-8 md:leading-10'>
                <li className='mb-4'>
                    <p>AM 관련 현업에서 실무를 위해 필요한 <br className='md:hidden'/> 역량을 확보할 수 <br className='hidden md:block lg:hidden'/> 있도록 기반이 되는 <br className='md:hidden lg:block' />풀스택 개발부터 전문성을 갖추기 위한 Agile, MSA, DevOps 영역의 실습 위주 <br className='md:hidden'/>교육</p>
                </li>
                <li>
                    실무 중심 교육으로 현업 환경을 직접 <br className='md:hidden'/>경험함으로써 실무에 <br className='hidden md:block lg:hidden'/> 즉시 투입이 가능한 <br className='md:hidden lg:block'/> 현장형 인재 양성
                </li>
            </ol>
        </div>
    )
}

export default Summary
