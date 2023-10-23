/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function page() {

  const router = useRouter()

  const { data: session } : any = useSession();
  const id = session?.user?.id;


      const handleSubmit = async (e: any) => {
        e.preventDefault();

      const data = {
        id,
        company_name: e.target.company_name.value,
        description: e.target.description.value,
        aditional_info: e.target.aditional_info.value,
        website: e.target.website.value,
        logo: e.target.logo.value,
        industry: e.target.industry.value,
        founded: e.target.founded.value,
        headquarters: e.target.headquarters.value,
        awards: e.target.awards.value,
        size: e.target.size.value,
        mission: e.target.mission.value,
        values: e.target.values.value,
        culture: e.target.culture.value
      }

  
      try {
  
        const response = await fetch("/api/auth/employer/UPDATE", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })
  
        if (!response.ok) {
          throw new Error("Failed to create job post.");
        } else {
          router.push('/profile')
        }
      } catch (error) {
          console.error(error)
      }
    }

  return (
    <div>
      <div className='w-10/12 mx-auto py-12'>
  <form  onSubmit={handleSubmit} >
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      company name:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="tel" id="company_name" name="company_name" placeholder='Frontend, backend, fullstack' />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      description:
      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" name="description" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      aditional info:
      <textarea className='"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"' id="aditional_info" name="aditional_info"></textarea>
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Website:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="website" name="website" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      logo:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file" id="logo" name="logo" accept="logo/*" />
    </label>
    <br />

    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      industry:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="industry" name="industry" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      founded:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" id="founded" name="founded" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      awards:
      <textarea className='"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"' id="awards" name="awards"></textarea>
    </label>
    <br />
    <hr />

    <div className=''>
      <span className='w-full flex space-x-5 mb-5'>
        <span className='w-2/4 flex flex-col'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            size
          <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="size" name="size" />
          </label>
        </span>
        <span className='w-2/4 flex flex-col'>    
          <label>
            mission
            <textarea className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mission" name="mission" />
          </label>
        </span>
      </span>

      <span className='w-full flex space-x-5 mb-5'>
        <span className='w-2/4 flex flex-col'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            values
            <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="values" name="values" />
          </label>
        </span>
        <span className='w-2/4 flex flex-col'>
          <label>
            culture
            <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="culture" name="culture" />
          </label>
        </span>
      </span>
    </div>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
    headquarters:
      <input className='"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"' id="headquarters" name="headquarters" />
    </label>

    <hr />
    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' type='submit' >Submit</button>
  </form>
</div>
    </div>
  )
}

