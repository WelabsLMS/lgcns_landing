import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer>
            <div className='p-20 flex items-center justify-center'>
                <div className='relative w-1/4 h-16'>
                    <Image src='/assets/images/layout/moel_logo.svg' alt='moel_logo' fill />
                </div>
                <div className='relative w-1/4 h-16'>
                    <Image src='/assets/images/layout/LGCNS_ROW_ENG.svg' alt='lgcns_logo' fill />
                </div>
                <div className='relative w-1/4 h-16'>
                    <Image src='/assets/images/layout/welabs_logo.svg' alt='welabs_logo' fill />
                </div>
            </div >
        </footer >
    )
}

export default Footer