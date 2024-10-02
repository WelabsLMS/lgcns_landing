import SectionTitle from '@/components/ui/SectionTitle'
import React from 'react'
import { applyStepEleData } from '@/data/mainapply/applyStepEleData'
import MainApplyEle from '@/components/ui/mainapply/MainApplyEle'
import Link from 'next/link'

function MainApply() {
    return (
        <section className='section'>
            <SectionTitle title='교육신청' />
            <p className='text-center mb-14'>* 선착순으로 지원 마감되므로<br className='md:hidden' /> 모집기간에 변동이 있을 수 있습니다.</p>
            <div className='container mx-auto'>
                {/* TODO : 과정 추가시 carousel 방식으로 전환 */}
                <div className='bg-[#C2D3FF] rounded-xl w-full lg:w-2/3 mx-auto px-8 py-8 flex flex-col'>
                    <div className='flex items-center gap-4 lg:gap-8'>
                        <div className='font-bold flex flex-col items-center text-nowrap'>
                            <p>S T E P</p>
                            <p className='text-5xl lg:text-7xl'>1</p>
                        </div>
                        <div>
                            <p className='text-xl lg:text-[28px] font-bold'>LG CNS AM <br className='md:hidden' /> Inspire Camp</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap items-center justify-between py-6 gap-4'>
                        {
                            applyStepEleData.map((data) => (
                                <MainApplyEle key={data.id} title={data.title} desc={data.desc} />
                            ))
                        }
                    </div>
                    <div className='w-full flex justify-center mt-6 lg:mt-0'>
                        <button className='bg-white rounded-[40px] font-bold px-10 lg:px-14 py-3 lg:py-4 text-lg lg:text-2xl'>
                            <Link href={'/apply'}>수강신청</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainApply;
