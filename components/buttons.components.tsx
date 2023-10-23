"use client"
import { useState } from "react";

interface RegisterOptions {
  text: string;
  link: string;
  role?: string ;
}

import { signIn, signOut } from "next-auth/react"
import Link from "next/link"

export const LoginButton = () => {
  return (
    <button style={{marginRight: 10}} onClick={() => signIn()}>
      Sign In
    </button>
  )
}

export const RoundLoginButton = () => {
  return (
    <button onClick={() => signIn()}
      className='border bg-[#FF9B9B] border-black rounded-full w-48 my-2 mr-2 py-3'>Sign In</button>
  )
}

export const RegularButton = ({text, type, state, setState}: { text: any;
  type?: any;
  state?: any;
  setState?: any;} ) => {
  return (
    <button onClick={() => state && setState && setState(!state)}
      type={type ?? null}
      className='border bg-[#FF9B9B] border-black rounded-full w-48 my-2 mr-2 py-3'>{ text }</button>
  )
}


export const RegisterButton = ({text, link, role }: RegisterOptions ) => {
  return (
    <Link href={`${link}`} style={{marginRight: 10}}>
      { text ?? 'register' }
    </Link>
  )
}

export const LogoutButton = () => {
  return (
    <button style={{marginRight: 10}} onClick={() => signOut( { callbackUrl: `/` })}>
      Sign Out
    </button>
  )
}

export const ProfileButton = ({ children, role, id }: any) => {

  return (
  <Link href={ role !== null || "USER" ? `/profile` : `/profile`}>
    {children}
  </Link>
  )
}
