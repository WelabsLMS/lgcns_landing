import SectionTitle from '@/components/ui/SectionTitle'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Contact() {
    return (
        <section id='contact' className="section mb-20">
            <SectionTitle title="문의처" />
            <div className='flex flex-col gap-8 lg:gap-16 items-center'>
                {/* 1 */}
                <div className='w-full lg:w-[33rem] h-auto lg:h-32 bg-[#C2D3FF] rounded-2xl shadow-[8px_8px_rgba(194,194,194,1)] p-4 flex items-center justify-center'>
                    <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center'>
                        <div className='text-xl lg:text-3xl font-extrabold'>
                            <p>교육지원 문의</p>
                        </div>
                        <div className='ml-4 lg:ml-10 text-base lg:text-xl font-bold'>
                            <p>문의처 : 위랩스페이스</p>
                            <p>이메일 : welabs2023@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className='w-full lg:w-[33rem] h-auto lg:h-32 bg-[#E0E9FF] rounded-2xl shadow-[8px_8px_rgba(194,194,194,1)] p-4 flex items-center justify-center'>
                    <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center'>
                        <div className='text-xl lg:text-3xl font-extrabold'>
                            <p>내일배움카드 문의</p>
                        </div>
                        <div className='ml-4 lg:ml-8 text-base lg:text-xl font-bold'>
                            <p>문의처 : 고용노동부</p>
                            <p>전화번호 : 1350</p>
                            <p>가능시간 : 평일 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <Link href='https://pf.kakao.com/_wbxkln' className='w-full lg:w-[33rem] h-auto md:h-28 lg:h-32 bg-[#FEE500] rounded-2xl shadow-[8px_8px_rgba(194,194,194,1)] p-4'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-full flex flex-col md:flex-row md:gap-0 justify-around items-center'>
                            <div className='relative w-20 h-20 lg:w-24 lg:h-24'>
                                <Image src={'/assets/images/contact/kakaotalk.svg'} alt='kakaotalk' fill />
                            </div>
                            <div className='text-xl lg:text-3xl font-bold'>
                                <p>카카오톡 1:1 상담</p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* 4 */}
                <Link href={'/apply'}>
                    <div
                        className='text-white w-52 h-16 flex items-center text-2xl justify-center rounded-full px-4 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold'
                    >
                        지원하기
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default Contact;
