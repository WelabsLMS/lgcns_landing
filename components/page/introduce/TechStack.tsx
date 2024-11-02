import React from 'react'
import { techLogoList } from '../../../data/staticData'
import TechListEle from '../../ui/introduce/TechListEle'
import BoxTitle from '@/components/ui/introduce/BoxTitle'

function TechStack() {
    return (
        <div className='mt-10 rounded-[30px] px-2 py-3 flex flex-col items-center bg-[#E0E9FF]'>
            {/* 제목 부분 */}
            <BoxTitle title='기술스택' />
            {/* 그리드 및 아이콘 부분 */}
            <div className='w-full rounded-xl md:rounded-[30px] py-3 md:py-5 flex flex-col bg-white'>
                <div className='flex flex-wrap justify-center items-center gap-y-2 md:gap-y-4 lg:gap-x-4 xl:gap-x-10 gap-x-7'>
                    {
                        techLogoList[0].map((img, index) => (
                            <React.Fragment key={img.id}>
                                <TechListEle img={img} />
                                {index === 4 || index === 8 ? <div className='xl:w-full'></div> : null}
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TechStack
