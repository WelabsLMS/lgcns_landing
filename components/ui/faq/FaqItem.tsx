'use client'
import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FaqItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-300 bg-white w-full h-15">
            <button
                className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <span className="text-2xl font-bold mr-4">Q</span>
                    <span className="text-lg font-semibold">{question}</span>
                </div>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
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
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}
            >
                <p className="py-2 text-gray-700 whitespace-pre-line">{answer}</p>
            </div>
        </div>
    )
}
