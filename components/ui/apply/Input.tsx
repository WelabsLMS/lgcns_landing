import React from 'react';

function Input({
    title, type, placeholder, required, checked, disabled, name, value, onChange }:
    { title?: string, type?: string, placeholder?: string, required?: boolean, checked?: boolean, disabled?: boolean, name?: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative mr-4">
                <input
                    type={type}
                    name={name}
                    className="peer h-8 w-8 lg:h-9 lg:w-9 cursor-pointer transition-all appearance-none rounded-lg shadow hover:shadow-md border border-slate-300 checked:bg-[#B2A7FF] checked:border-[#D0C5FF]"
                    placeholder={placeholder}
                    required={required}
                    checked={checked}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </span>
            </label>
            <label className="cursor-pointer text-xl lg:text-2xl font-semibold">
                {title}
            </label>
        </div>
    )
}

export default Input;
