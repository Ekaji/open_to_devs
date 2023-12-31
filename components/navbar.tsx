'use client';

import React, { useState } from 'react'
import { LoginButton, RegisterButton, LogoutButton, RegularButton } from './buttons.components'
import Dropdown  from './dropdown';
import { useSession } from "next-auth/react";
import Profile from './profile';
// import { Session } from '@/types/session';
import AuthPopup from './authPopup';


export default function  Navbar() {
  const [popUpState, setPopUpState] = useState(false)
  const { data: session } : any = useSession();

  return (
    <section className="flex flex-wrap sm:justify-start -z-50 sm:flex-nowrap w-full bg-white text-sm py-4 mx-auto container">
     { popUpState && <AuthPopup  setState={setPopUpState}/>}
  <nav className="max-w-[85rem] container w-11/12 mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div className="flex items-center justify-between">
      <a className="flex-none text-xl font-semibold " href="/">Brand</a>
      <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
        <pre className="font-medium text-gray-600 hover:text-gray-400" >
          {
            !session?.user ? <RegularButton text={'Get Started'} state={popUpState} setState={setPopUpState} /> : <LogoutButton />
            // !session?.user ? <LoginButton /> : <LogoutButton />
          }
        </pre>
        {/* <span className='relative'>
          {
          (session?.user?.role === "EMPLOYER" || session?.user?.role === "ADMIN") ?
          (<RegisterButton text='dashboard' link='/dashboard' />) :
          // (session?.user?.role === "JOBSEEKER") ?  null :
          (<Dropdown  /> )
          }

        </span> */}
            {
                 (session?.user?.role === "EMPLOYER" || session?.user?.role === "ADMIN") &&  (<RegisterButton text='dashboard' link='/dashboard' />)
           }
        {
            session?.user ? <Profile  /> : null
          }

      </div>
    </div>
  </nav>
</section>
  )
}
