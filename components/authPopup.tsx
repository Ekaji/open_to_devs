import React from 'react'
import { LoginButton, RegisterButton, RoundLoginButton } from './buttons.components'
import Dropdown from './dropdown'

export default function AuthPopup({ setState }) {

  return (
      <div className='w-screen h-screen bg-black/80 top-0 m-auto z-20 fixed flex  ' onClick={() => setState(false)}>
          <div className="w-8/12 bg-white h-[500px] m-auto flex justify-center">
            <div className="w-2/4">
             <img src="/images/scene 3.png" alt=""/>
            </div>
            <div className="flex flex-col justify-center w-2/4 mx-auto items-center bg-[#FFF8C9]">
                <RoundLoginButton />
                <Dropdown />
            </div>
        </div>
    </div>
  )
}

