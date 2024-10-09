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
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000]'>
            <div className='w-4/5 h-4/5 bg-white rounded-lg p-5'>
                <div className='container mx-auto flex flex-col items-center justify-center w-full h-full'>
                    <h2 className='text-3xl font-bold mb-4'>{data.title}</h2>
                    <Swiper
                        className='w-full h-[70%]'
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
                    <p className='text-2xl font-semibold'>{data.desc}</p>
                    <button
                        className='mt-8 px-4 py-2 bg-blue-500 text-white rounded'
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