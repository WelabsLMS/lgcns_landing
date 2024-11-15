'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
    const [subMenuOpen, setSubMenuOpen] = React.useState(false)
    const pathname = usePathname()
    if (pathname.includes('/apply')) return null

    return (
        <>
            <header className='w-full sticky top-0 left-0 bg-white border border-gray-200 z-[999] lg:px-5 xl:px-20 h-[80px] lg:h-[100px] flex items-center '>
                <div className='w-full h-min container mx-auto py-5 flex-row hidden lg:flex justify-center items-center lg:gap-4 xl:gap-32'>
                    <div className='basis-1/6'>
                        <Link href='https://www.lgcns.com/'>
                            <Image src={'/assets/images/logo/lg/LGCNS_ROW_ENG.png'} width={200} height={40} alt='lgcns_logo' />
                        </Link>
                    </div>
                    <nav className='basis-3/6 text-xl'>
                        <ul className='flex justify-evenly h-full items-center font-bold text-2xl '>
                            <li>
                                <Link href='#introduce'>Camp 소개</Link>
                            </li>
                            <li>
                                <Link href='#benefit'>훈련생 혜택</Link>
                            </li>
                            <li>
                                <Link href='#selection'>선발절차</Link>
                            </li>
                            <li>
                                <Link href='#faq'>FAQ</Link>
                            </li>
                            <li>
                                <Link href='#briefing'>홍보 일정</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='basis-1/6 flex justify-evenly text-2xl font-semibold lg:gap-4'>
                        <button className='text-white font-bold rounded-full lg:w-28 h-[44px] xl:w-32 xl:h-[44px] bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
                            <Link href={'/apply'}>지원하기</Link>
                        </button>
                        <Link href={'https://lms.wsts.kr/'} className='flex lg:w-28 h-[44px] xl:w-32 xl:h-[44px] items-center justify-center px-4 rounded-full bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] shadow-[0_4px_10px_rgba(255,95,109,0.4)]'>
                            <Image src='/assets/images/logo/solutionLms.png' alt='wsts' width={150} height={19} />
                        </Link>
                    </div>
                </div>
                {/* mobile */}
                <div className='w-full relative lg:hidden'>
                    <div className='flex justify-between px-4 items-center w-full'>
                        <div className=''>
                            <Link href='https://www.lgcns.com/'>
                                <Image src={'/assets/images/logo/lg/LGCNS_ROW_ENG.png'} width={150} height={100} alt='lgcns_logo' />
                            </Link>
                        </div>
                        <div className='flex justify-end'>
                            <button className='text-2xl' onClick={() => setSubMenuOpen(!subMenuOpen)}>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`absolute top-[79px] bg-white w-full h-max flex flex-col items-center py-4 lg:hidden transition-all duration-500 transform ${subMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top`}>
                    <ul className='text-center flex flex-col gap-4 text-xl font-bold cursor-pointer'>
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <Link href='#introduce'>Camp 소개</Link>
                        </li>
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <Link href='#benefit'>훈련생 혜택</Link>
                        </li>
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <Link href='#selection'>선발절차</Link>
                        </li>
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <Link href='#faq'>FAQ</Link>
                        </li>
                        <li
                            className='text-white w-[120px] h-[38px] flex items-center justify-center rounded-full px-4 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold'
                            onClick={() => setSubMenuOpen(!subMenuOpen)}
                        >
                            <Link href={'/apply'}>지원하기</Link>
                        </li>
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <button className='flex w-[120px] h-[38px] items-center justify-center px-4 rounded-full bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] shadow-[0_4px_10px_rgba(255,95,109,0.4)]'>
                                <Link href={'https://wsts.kr'}><Image src='/assets/images/logo/solutionLms.png' alt='wsts' width={65} height={19} /></Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header