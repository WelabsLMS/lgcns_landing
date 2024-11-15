'use client'
interface FAQItemProps {
    index: number;
    question: string;
    answer: string;
}

export default function FaqItem({ index, question, answer }: FAQItemProps) {

    const toggleAccordion = (index: number) => {
        const content = document.getElementById('content-'+index);
        const icon = document.getElementById('icon-'+index);
        if (content) {
            content.classList.toggle('max-h-0');
            content.classList.toggle('overflow-hidden');
        }
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    }

    return (
        <div className="bg-white font-bold px-1">
            <button onClick={() => toggleAccordion(index+1)} className="w-full flex justify-between items-center py-5 whitespace-pre md:whitespace-normal">
                <span className='text-start md:text-xl lg:text-2xl'>Q. {question}</span>
                <span id={`icon-${index+1}`} className="text-slate-800 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-5">
                        <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <div id={`content-${index+1}`} className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <div className="pb-5 text-sm md:text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: answer }}>
                </div>
            </div>
        </div>
    );
}
