import SectionTitle from '@/components/ui/SectionTitle'
import Image from 'next/image'
import React from 'react'

function Contact() {
    return (
        <section id='contact' className="section">
            <SectionTitle title="문의처" />
            <div className='flex flex-col gap-16 pt-12'>
                {/* 1 */}
                <div className='w-[33rem] h-32 bg-[#C2D3FF] rounded-2xl shadow-[8px_8px_rgba(194,194,194,1)]'>
                    <div className='flex justify-center p-6'>
                        <div className='flex gap-10 items-center'>
                            <div className='text-3xl font-extrabold'>
                                <p>교육신청 문의</p>
                            </div>
                            <div className='text-xl font-bold'>
                                <p>문의처 : 위랩스페이스</p>
                                <p>이메일 : hnlee@welabs.kr</p>
                                <p>문의시간 : 평일 09:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className='w-[33rem] h-32 bg-[#E0E9FF] rounded-2xl shadow-[8px_8px_rgba(194,194,194,1)]'>
                    <div className='flex justify-center py-6 px-4'>
                        <div className='flex gap-8 items-center'>
                            <div className='text-3xl font-extrabold'>
                                <p>내일배움카드 문의</p>
                            </div>
                            <div className='text-xl font-bold'>
                                <p>문의처 : 고용노동부</p>
                                <p>전화번호 : 1350</p>
                                <p>문의시간 : 평일 09:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className='w-[33rem] h-32 bg-[#FEE500] rounded-2xl shadow-[8px_8px_rgba(194,194,194,1)]'>
                    <div className='flex justify-center p-4'>
                        <div className='flex items-center gap-10'>
                            <div>
                                <Image src={'/assets/images/contact/kakaotalk.svg'} alt='kakaotalk' width={100} height={100} />
                            </div>
                            <div className='text-3xl font-bold'>
                                <p>카카오톡 1:1 상담</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact