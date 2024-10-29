import Image from 'next/image'
import React, { useEffect } from 'react'
import { applyModalData } from '@/data/staticData'

function ApplySubmitModal({ isModalOpen, setIsModalOpen }: { isModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    // 스크롤 방지
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
            return () => {
                document.body.style.overflow = 'unset'
            }
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    if (!isModalOpen) return null

    // 랜덤한 색상 생성 함수
    // const getRandomColor = () => {
    //     const colors = ['#FFD700', '#FF69B4', '#7B68EE', '#00CED1', '#ADFF2F']
    //     return colors[Math.floor(Math.random() * colors.length)]
    // }

    // 인라인 SVG 별 이미지
    // const Star = ({ style, className }: { style: React.CSSProperties, className?: string }) => (
    //     <svg
    //         width="20"
    //         height="20"
    //         viewBox="0 0 24 24"
    //         fill="currentColor"
    //         style={style}
    //         className={className}
    //     >
    //         <path d="M12 .587l3.668 7.431 8.209 1.193-5.938 5.789 1.401 8.167L12 18.896l-7.34 3.858 1.401-8.167L.093 9.211l8.209-1.193z" />
    //     </svg>
    // )

    return (
        <>
            <div className='w-screen h-screen fixed top-0 left-0 bg-gray-400/80 z-[1001]' />
            <div className='fixed w-screen h-screen flex items-center justify-center px-2 md:px-0 z-[1002]' onClick={() => setIsModalOpen(!isModalOpen)}>
                <div
                    className='relative w-full h-[40vh] md:w-[40vw] md:h-[40vh] md:min-w-[600px] md:min-h-[265px] rounded-xl bg-white animate-fadeIn overflow-hidden'
                    onClick={(e) => e.stopPropagation()}>
                    <div className='flex flex-col items-center justify-center h-full gap-5 px-2'>
                        <div className='flex flex-col items-center justify-center'>
                            {/* 이미지는 임의로 대체하였습니다 */}
                            <Image src={applyModalData[0].success.img} width={100} height={100} alt='apply_submit' />
                            <p className='text-3xl md:text-4xl font-bold whitespace-pre-line text-center'>{applyModalData[0].success.title}</p>
                            {/* <p className='text-3xl md:text-4xl font-bold'></p> */}
                        </div>
                        <p className='text-xl md:text-3xl font-semibold mt-2 text-center whitespace-pre-line'>{applyModalData[0].success.desc}</p>
                        <button onClick={() => setIsModalOpen(!isModalOpen)} className='bg-[#002278] text-2xl text-white font-semibold rounded-2xl px-7 py-3 mt-6'>확인</button>
                    </div>
                    {/* 스파클 효과 수정
                    <div className='absolute inset-0 pointer-events-none'>
                        {[...Array(30)].map((_, i) => (
                            <Star
                                key={i}
                                className='animate-sparkle'
                                style={{
                                    position: 'absolute',
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animation: 'sparkle 1s ease-out infinite',
                                    animationDelay: `${Math.random() * 2}s`,
                                    color: getRandomColor(),
                                }}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ApplySubmitModal