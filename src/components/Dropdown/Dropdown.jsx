import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Options');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false); //close after selection
    };

    return (
        <div className="relative inline-block text-left px-6 ">
            
            <div>
               
                <button
                    
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md 
                    border border-gray-300 shadow-sm px-2 py-0.5 bg-[#F8F9FF] 
                    text-md font-medium text-gray-700 hover:bg-gray-50 
                    focus:outline-none"
                >
                    <span className="text-md text-gray-500 px-1 ">Sort by :</span>
                    {selectedOption}
                    <svg
                        className="ml-2 -mr-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none z-10"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        <button
                            onClick={() => handleOptionSelect('Newest')}
                            className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                        >
                            Newest
                        </button>
                        <button
                            onClick={() => handleOptionSelect('Support')}
                            className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                        >
                            Support
                        </button>
                        <button
                            onClick={() => handleOptionSelect('License')}
                            className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                        >
                            License
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
