import React from 'react'

export default function SearchBar() {
  return (
    <div className='w-full border border-black rounded-full h-16 flex my-auto pl-5'>
        <input className='border-none outline-none my-1 w-full' placeholder='Search jobs' type="text" name="search" id="" />
        <button className='border bg-[#BEADFA] border-black rounded-full w-48 my-2 mr-2'>Search</button>
    </div>
  )
}

