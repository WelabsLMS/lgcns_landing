'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Header() {
    const [subMenuOpen, setSubMenuOpen] = React.useState(false)
    return (
        <>
            <header className='w-full sticky top-0 left-0 bg-white border border-gray-200 z-[99999] lg:px-20 xl:px-40 h-[80px] lg:h-[100px] flex items-center'>
                <div className='w-full h-min container mx-auto py-5 flex-row justify-between hidden lg:flex'>
                    <div className='basis-1/5'>
                        <Link href='/'>
                            <Image src={'/assets/images/logo/lg/LGCNS_ROW_ENG.png'} width={200} height={40} alt='lgcns_logo' />
                        </Link>
                    </div>
                    <nav className='basis-2/5 text-xl'>
                        <ul className='flex justify-evenly h-full items-center font-bold text-2xl'>
                            <li>
                                <a href='#introduce'>캠프소개</a>
                            </li>
                            <li>
                                <a href='#coreprogram'>핵심프로그램</a>
                            </li>
                            <li>
                                <a href='#faq'>FAQ</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='basis-1/4 flex justify-evenly text-2xl font-semibold lg:gap-4'>
                        <button className='text-white rounded-2xl w-32 bg-gradient-to-r from-[#E2275488] to-[#FFD028] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
                            <Link href={'https://wsts.kr'}>LMS</Link>
                        </button>
                        <button className='text-white rounded-2xl w-32 bg-gradient-to-r from-[#E2275488] to-[#FFD028] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
                            <Link href={'/apply'}>수강신청</Link>
                        </button>
                    </div>
                </div>
                {/* mobile */}
                <div className='w-full relative lg:hidden'>
                    <div className='flex justify-between px-4 items-center w-full'>
                        <div className=''>
                            <Link href='#'>
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
                    <ul className='text-center flex flex-col gap-3 text-xl font-bold cursor-pointer'>
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <Link href='#introduce'>캠프소개</Link>
                        </li>
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <Link href='#coreprogram'>핵심프로그램</Link>
                        </li>
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <Link href='#contact'>FAQ</Link>
                        </li>
                        <li
                            className='text-white rounded-2xl px-4 py-[1px] bg-gradient-to-r from-[#E2275488] to-[#FFD028] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-semibold'
                            onClick={() => setSubMenuOpen(!subMenuOpen)}
                        >
                            <Link href={'https://wsts.kr'}>LMS</Link>
                        </li>
                        <li
                            className='text-white rounded-2xl px-4 py-[1px] bg-gradient-to-r from-[#E2275488] to-[#FFD028] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-semibold'
                            onClick={() => setSubMenuOpen(!subMenuOpen)}
                        >
                            <Link href={'/apply'}>수강신청</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header