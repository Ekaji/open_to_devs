'use client'
import React, { useState } from 'react';

export default function DropDownBtn({dropDOwnText, options}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    };

  return (
    <div>
      <button
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="text-black min-w-[10rem] justify-between focus:outline-none border-2 pr-2 pl-3 py-1.5 z-20 border-black font-medium rounded-full text-sm text-center inline-flex items-center relative"
        type="button"
        onClick={toggleDropdown}
      >
        {' '}{selectedValue ? selectedValue : dropDOwnText}{' '}
        <div className='rounded-full bg-[#BEADFA] p-2.5'>
          <svg
            className="w-2.5 h-2.5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownDelay"
          className=" bg-[#BEADFA]/50 absolute divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDelayButton">
            {options.map((option: string) => (
                <li>
                <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 "
                    onClick={() => handleItemClick(option)}
                >
                    {option}
                </a>
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

