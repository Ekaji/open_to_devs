import React from 'react'
import { ProfileButton } from './buttons.components'
import { useSession } from 'next-auth/react';

interface Session {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    role?: string | null | undefined;
    id?: string | null | undefined;
  } | null | undefined;
} 

export default function Profile() {
  const { data: session }: any = useSession(); //fix any
  const role = session?.user?.role ?? null;
  const id = session?.user?.id ?? null;

  return (
    <ProfileButton role={role} id={id} >
      <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white dark:ring-gray-800" src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="Image Description"></img>
    </ProfileButton>
  )
}
