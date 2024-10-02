import Image from 'next/image'
import React from 'react'

function Summary() {
    return (
        <div className='mt-10 md:mt-20'>
            <div className='flex gap-4 items-center'>
                <Image src="assets/images/introduce/circle_check.svg" alt="circlecheck" width={40} height={40} />
                <p className='text-xl md:text-3xl font-extrabold text-[#5984EC]'>강의개요</p>
            </div>
            <ol className='list-disc p-5 text-base md:text-2xl leading-7 md:leading-10'>
                <li>
                    <p>AM 관련 현업에서 실무를 위해 필요한 역량을 확보할 수 있도록 기반이 되는 <br className='hidden xl:block' />풀스택 개발부터 전문성을 갖추기 위한 Agile, MSA, DevOps 영역의 실습 위주 교육</p>
                </li>
                <li>
                    실무 중심 교육으로 현업 환경을 직접 경험함으로써 실무에 즉시 투입이 가능한 현장형 인재 양성
                </li>
            </ol>
        </div>
    )
}

export default Summary
