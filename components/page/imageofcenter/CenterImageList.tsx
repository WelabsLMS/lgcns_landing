import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { centerImagesData } from '../../../data/centerimage/centerImagesData'
import CampImageEle from '../../ui/imageofcenter/CampImageEle'

function CenterImageList() {
    return (
        <section className="section">
            <SectionTitle title="교육장 사진" />
            <div className='container mx-auto'>
                <div className='flex flex-col-reverse md:flex-col justify-center'>
                    <div className='flex flex-col gap-5 md:flex-row justify-evenly'>
                        {
                            centerImagesData.first.map((image) => (
                                <CampImageEle key={image.id} img={image.img} />
                            ))
                        }
                    </div>
                    <div className='text-xl lg:text-[28px] text-center mb-10 md:my-10'>
                        <p className='text-[#002278] font-bold lg:mb-4'>온라인 교육장</p>
                        <p className='font-semibold'>메타버스 게더타운 강의실</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-col justify-center'>
                    <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-evenly'>
                        {
                            centerImagesData.second.map((image) => (
                                <CampImageEle key={image.id} img={image.img} />
                            ))
                        }
                    </div>
                    <div className='text-xl lg:text-[28px] text-center my-10 lg:mb-0'>
                        <p className='text-[#002278] font-bold lg:mb-4'>오프라인 교육장</p>
                        <p className='font-semibold'>서울시 중구 필동로1길 30</p>
                        <p className='font-semibold'>동국대학교 학술관</p>
                        <p className='font-semibold'>(동대입구역 6번 출구 5분 도보)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CenterImageList