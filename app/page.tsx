import { User } from '@/components/user.components';
import React from "react";
import JobList from '@/components/joblist';

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-8">

      <User />
      <JobList />
    </main>
  )
}
