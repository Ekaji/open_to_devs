"use client"

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

export const RegisterButton = ({text, link, role }: RegisterOptions ) => {
  return (
    <Link href={`${link}`} style={{marginRight: 10}}>
      { text ?? 'register' }
    </Link>
  )
}

export const LogoutButton = () => {
  return (
    <button style={{marginRight: 10}} onClick={() => signOut()}>
      Sign Out
    </button>
  )
}

export const ProfileButton = ({ children, role, id }: any) => {

  return (
  <Link href={ role !== null || "USER" ? `/profile/${id}` : `/profile/${id}`}>
    {children}
  </Link>
  )
}