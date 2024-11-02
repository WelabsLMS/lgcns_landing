import BoxTitle from '@/components/ui/introduce/BoxTitle'
import React from 'react'

function Summary() {
    return (
        <div className='mt-10 rounded-[30px] px-2 py-3 flex flex-col items-center bg-[#E0E9FF]'>
            <BoxTitle title='강의개요' />
            <ol className='lg:list-disc flex flex-col items-center text-center lg:text-start lg:items-start lg:px-12 text-xl lg:text-2xl font-medium bg-white rounded-[30px] w-full py-5'>
                <li className='mb-4'>
                    <p className='leading-relaxed'>현업에서 실무를 위해 필요한 <br className='md:hidden'/>AM 관련 역량을 확보할 수 있도록 <br className='hidden lg:block xl:hidden' /> 기반이 되는 <br className='lg:hidden'/> 풀스택 개발부터 <br className='hidden xl:block'/> 전문성을 갖추기 위한 <br className='md:hidden'/> Agile, MSA, DevOps 영역의 실습 위주 <br className='hidden'/>교육</p>
                </li>
                <li>
                    실무 중심 교육으로 현업 환경을 직접 <br className='md:hidden'/>경험함으로써 실무에 <br className='hidden md:block xl:hidden'/> 즉시 투입 가능한 <br className='md:hidden'/> 현장형 인재 양성
                </li>
            </ol>
        </div>
    )
}

export default Summary
