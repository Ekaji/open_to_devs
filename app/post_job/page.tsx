import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Post_Job() {
  const session: any = await getServerSession(authOptions);

  console.log(session.user.id)

  if(!session) {
    redirect("/api/auth/signin");
  }


  return (
    <div>

    </div>
  )
}
