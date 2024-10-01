'use client'
import { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FaqItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null); // 콘텐츠 높이를 계산하기 위한 참조

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            // 높이 설정을 통해 애니메이션 성능 개선
            contentRef.current.style.height = isOpen
                ? `${contentRef.current.scrollHeight}px`
                : '0px';
        }
    }, [isOpen]);

    return (
        <div className="border-b border-gray-300 bg-white w-full h-auto">
            <button
                className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
                onClick={toggleAccordion}
            >
                <div>
                    <span className="lg:text-2xl font-bold mr-2 lg:mr-4">Q</span>
                    <span className="lg:text-lg font-semibold">{question}</span>
                </div>
                <svg
                    className={`w-5 h-4 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <div
                ref={contentRef} // 콘텐츠 높이 참조
                className={`transition-all duration-300 ease-in-out overflow-hidden`}
                style={{ height: '0px' }} // 기본 높이를 0으로 설정
            >
                <p className="py-2 text-sm text-gray-700 whitespace-pre-line">{answer}</p>
            </div>
        </div>
    );
}
