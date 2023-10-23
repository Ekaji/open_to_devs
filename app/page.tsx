import { User } from '@/components/user.components';
import React from "react";
import JobList from '@/components/joblist';
import HeroSection from '@/components/homepageComponents/HeroSection';
import SearchBar from '@/components/homepageComponents/searchAndFIlter.tsx/SearchBar';
import SearchAndFilter from '@/components/homepageComponents/searchAndFIlter.tsx';
import AuthPopup from '@/components/authPopup';

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 space-y-8">
      <HeroSection />
        {/* <User /> */}
      <div className=' container mx-auto'>
        <SearchAndFilter />
        <JobList />
      </div>
    </main>
  )
}
