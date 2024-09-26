import React from 'react'

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="flex items-center w-1/2 mx-auto mb-14">
            <div className="flex-grow border-t border-gray-400 w-1/2"></div>
            <p className="flex-shrink mx-10 text-white text-3xl border px-6 py-4 rounded-2xl bg-[#002278] text-nowrap font-bold">{title}</p>
            <div className="flex-grow border-t border-gray-400 w-1/2"></div>
        </div>
    )
}

export default SectionTitle