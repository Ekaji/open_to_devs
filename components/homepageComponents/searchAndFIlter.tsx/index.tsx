import React from 'react'
import SearchBar from './SearchBar'
import DropDownBtn from './dropDownFilterBtn'
import Spacer from '@/components/spacer'
import { softwareDeveloperRoles } from '@/data/softwareDeveloperRoles'

export default function SearchAndFilter() {
    const location = ['remote', 'africa', 'asia', 'north america', 'south america', 'europe', 'australia']

  return (
      <div className='flex flex-col w-11/12 mx-auto'>
        <SearchBar />
        <Spacer space={10} />
        <div className='flex space-x-5'>
            <DropDownBtn dropDOwnText={'Location'} options={location} />
            <DropDownBtn dropDOwnText={'Roles'} options={softwareDeveloperRoles} />
        </div>
      </div>
  )
}

