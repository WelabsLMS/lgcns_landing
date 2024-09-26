import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <header className='w-full sticky top-0 left-0 bg-white border-b-[1px] border-gray-200 z-[99999] px-40 transition-all'>
            <div className='h-min container mx-auto py-5 flex flex-row justify-between'>
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
                            <a href='#contact'>FAQ</a>
                        </li>
                    </ul>
                </nav>
                <div className='basis-1/4 flex justify-evenly text-2xl font-semibold'>
                    <button className=' border-orange-200 border-2 rounded-full w-32 hover:text-white hover:bg-gradient-to-r from-[#E2275488] to-[#FFD028]'>
                        <Link href={'https://wsts.kr'}>LMS</Link>
                        </button>
                    <button className='text-white rounded-full w-32 bg-gradient-to-r from-[#E2275488] hover:from-white hover:to-white to-[#FFD028] hover:text-black hover:border-orange-200 hover:border-2'>
                        <Link href={'/apply'}>수강신청</Link>
                        </button>
                </div>
            </div>
        </header>
    )
}

export default Header