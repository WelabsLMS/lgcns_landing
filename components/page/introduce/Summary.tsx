import React from 'react'

function Summary() {
    return (
        <div className='mt-10 md:mt-20 rounded-[30px] py-3 flex flex-col items-center bg-[#E0E9FF]'>
            <div className='rounded-full bg-white px-10 py-2 lg:px-14 lg:py-4 mb-5 lg:mb-10'>
                <p className='text-2xl lg:text-3xl font-extrabold text-[#5984EC]'>강의개요</p>
            </div>
            <ol className='lg:list-disc text-center lg:text-start py-5 lg:px-12 text-xl lg:text-2xl font-medium'>
                <li className='mb-4'>
                    <p className='leading-relaxed'>AM 관련 현업에서 실무를 위해 필요한 <br className='md:hidden'/> 역량을 확보할 수 있도록 <br className='hidden lg:block xl:hidden' /> 기반이 되는 <br className='lg:hidden'/> 풀스택 개발부터 <br className='hidden xl:block'/> 전문성을 갖추기 위한 <br className='md:hidden'/> Agile, MSA, DevOps <br className='hidden lg:block xl:hidden' /> 영역의 실습 위주 <br className='hidden'/>교육</p>
                </li>
                <li>
                    실무 중심 교육으로 현업 환경을 직접 <br className='md:hidden'/>경험함으로써 실무에 <br className='hidden md:block xl:hidden'/> 즉시 투입이 가능한 <br className='md:hidden'/> 현장형 인재 양성
                </li>
            </ol>
        </div>
    )
}

export default Summary
