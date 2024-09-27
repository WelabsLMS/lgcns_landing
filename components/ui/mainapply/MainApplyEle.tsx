import React from 'react'

function MainApplyEle({ title, desc }: { title: string, desc: string }) {
    return (
        <div className='bg-white rounded-[20px] w-[48%] p-5 text-xl'>
            <p className='text-[#002278] font-semibold mb-1'>{title}</p>
            <p className='font-medium'>{desc}</p>
        </div>
    )
}

export default MainApplyEle