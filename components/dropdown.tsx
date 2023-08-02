"use client"
import React, { useState } from 'react';
import { LoginButton, LogoutButton, RegisterButton } from './buttons.components';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative w-48"  
    onClick={ () => setIsOpen(!isOpen) }
    >
      <div
        className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-lg "
      >
        { 'Sign Up' }
      </div>
        {
        isOpen && (
          <ul className=" ab lute z-50 top-12 le ft-0  bg-white border border-gray-300 rounded-lg shadow-md w-48">
            {/* {options.map((option) => ( */}
              <li
                className="py-2  px-4 cursor-pointer hover:bg-blue-100"
              >
                <RegisterButton text={'Applicant'} link={'/user/register'} />
              </li>
              <li
                className="py-2  px-4 cursor-pointer hover:bg-blue-100"
              >
                <RegisterButton text={'Employer'} link={'/auth/employer/register'} />
              </li>
            {/* ))} */}
          </ul>
        )
      }

    </div>
  );
};

export default Dropdown;
