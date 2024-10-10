import Image from 'next/image'
import React, { useEffect } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/navigation"


interface CoreProgramEleModalProps {
    title: string
    desc: string
    image: string[]
}

function EleModal({ data, modalOpen, setModalOpen }: { data: CoreProgramEleModalProps, modalOpen: boolean, setModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [modalOpen])

    if (!modalOpen) return null

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000]' onClick={() => setModalOpen(!modalOpen)}>
            <div className='w-[96%] h-max md:w-4/5 md:h-[90%] bg-white rounded-lg px-5' onClick={(e) => e.stopPropagation()}>
                <div className='container mx-auto flex flex-col items-center justify-center w-full h-full gap-10 py-10'>
                    <h2 className='text-3xl font-bold mb-4'>{data.title}</h2>
                    <div className='w-full h-[60%] hidden md:block'>
                        <Swiper
                            className='w-full h-full'
                            navigation
                            modules={[Navigation]}
                        >
                            {
                                data.image.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <Image src={img} alt={data.title} fill />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <p className='text-xl text-center font-semibold whitespace-pre-line ' dangerouslySetInnerHTML={{ __html: data.desc }} />
                    <button
                        className='px-4 py-2 bg-blue-500 font-semibold text-white rounded'
                        onClick={() => setModalOpen(false)}
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EleModal