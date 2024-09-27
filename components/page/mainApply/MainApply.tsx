import SectionTitle from '@/components/ui/SectionTitle'
import React from 'react'
import { applyStepEleData } from '@/data/mainapply/applyStepEleData'
import MainApplyEle from '@/components/ui/mainapply/MainApplyEle'
import Link from 'next/link'

function MainApply() {
    return (
        <section className='section'>
            <SectionTitle title='교육신청' />
            <p className='text-center mb-14'>* 선착순으로 지원 마감되므로 모집기간에 변동이 있을 수 있습니다.</p>
            <div className='container mx-auto'>
                <div className='bg-[#C2D3FF] rounded-xl h-[600px] w-1/2 mx-auto px-16 py-8 flex flex-col'>
                    <div className='flex items-center gap-8'>
                        <div className='font-bold flex flex-col items-center'>
                            <p>S T E P</p>
                            <p className='text-7xl'>1</p>
                        </div>
                        <div>
                            <p className='text-[28px] font-bold'>LG CNS AM Inspire Camp</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap w-full items-center justify-between h-4/5 py-6'>
                        {
                            applyStepEleData.map((data) => (
                                <MainApplyEle key={data.id} title={data.title} desc={data.desc} />
                            ))
                        }
                    </div>
                    <div className='w-full flex justify-center'>
                        <button className='bg-white rounded-[40px] px-14 py-4 text-2xl'><Link href={'/apply'}>수강신청</Link></button>
                    </div>
                </div>
            </div>
            {/* TODO : 과정 추가시 carousel 방식으로 전환 */}
        </section>
    )
}

export default MainApply