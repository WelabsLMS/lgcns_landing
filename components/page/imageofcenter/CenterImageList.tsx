import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { centerImagesData } from '../../../data/staticData'
import CampImageEle from '../../ui/imageofcenter/CampImageEle'

function CenterImageList() {
    return (
        <section className="section">
            <SectionTitle title="교육장 사진" />
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-col justify-center'>
                    <div className='text-xl lg:text-[28px] text-center mb-10 md:my-10'>
                        <p className='text-[#002278] font-bold lg:mb-4'>온라인 교육장</p>
                        <p className='font-semibold'>메타버스 게더타운 강의실</p>
                    </div>
                    <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-center'>
                        {
                            centerImagesData.online.map((image) => (
                                <CampImageEle key={image.id} img={image.img} />
                            ))
                        }
                    </div>

                </div>
                <div className='flex flex-col md:flex-col justify-center'>
                    <div className='text-xl lg:text-[28px] text-center my-10 leading-9'>
                        <p className='text-[#002278] font-bold lg:mb-4'>오프라인 교육장</p>
                        <p className='font-semibold'>LG CNS 본사</p>
                        <p className='font-semibold'>(발산역 도보 5분)</p>
                    </div>
                    <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-center'>
                        {
                            centerImagesData.LG.map((image) => (
                                <CampImageEle key={image.id} img={image.img} />
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col md:flex-col justify-center'>
                    <div className='text-xl lg:text-[28px] text-center my-10 leading-9'>
                        {/* <p className='text-[#002278] font-bold lg:mb-4'>오프라인 교육장</p> */}
                        <p className='font-semibold'>동국대학교 서울캠퍼스</p>
                        <p className='font-semibold'>(동대입구역 도보 5분)</p>
                    </div>
                    <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-center'>
                        {
                            centerImagesData.DGU.map((image) => (
                                <CampImageEle key={image.id} img={image.img} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CenterImageList