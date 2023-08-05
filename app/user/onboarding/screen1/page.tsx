"use client"
import React, { useReducer } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function page() {

  const router = useRouter()

  const { data: session } : any = useSession();
  const id = session?.user?.id;

      const initialEducationState = [
        {
          ID: new Date().toString(),
          name_of_institution: '',
          degree_type: '',
          from: '',
          to: ''
      }
    ];

    const initialExperienceData = [
      {
        ID: new Date().toString(),
        name_of_employer: '',
        from: '',
        to: '',
        i_currently_work_here: "FALSE"
      }
    ]

    
    const [educationData, educaionDispatch] = useReducer(reducer, initialEducationState)

    const [experienceData, experienceDispatch] = useReducer(reducer, initialExperienceData)


    function reducer (state: any, action: { payload?: { ID?: string, name?: any; value?: any; }; type: string; }) {
      switch (action.type) {
        case 'ADD_EDUCATION_INPUT':
          return [
            ...state, 
            {
              ID: new Date().toString(),
              name_of_institution: '',
              degree_type: '',
              from: '',
              to: ''
            }
          ]; 
        case 'ADD_EXPERIENCE_INPUT':
          return [
            ...state, 
            {
              ID: new Date().toString(),
              name_of_employer: '',
              i_currently_work_here : '',
              from: '',
              to: '',
            }
          ];
        case 'HANDLE_CHANGE':
          return state.map((item: { ID: string; }) => {
            console.log(item.ID , action.payload.ID)
            if (item.ID === action.payload.ID) {
              return { ...item, [action.payload.name]: action.payload.value }
            }
             return item;
          });
          default:
            throw new Error();
        }
      }

      const handle_experience_input = (e) => {
        e.preventDefault();
        experienceDispatch({type: 'ADD_EXPERIENCE_INPUT', payload: {ID: id }})
      }
      
      const handle_education_input = (e) => {
        e.preventDefault();
        educaionDispatch({type: 'ADD_EDUCATION_INPUT', payload: { ID: id }})
      }

      
      const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        const removeIDs = (data: any[]) => {
          return data.map((items) => {
            const {ID, ...otherValues} = items
            return { ...otherValues, userID: id }
          });
        }

      const educationDataWithoutIDs = removeIDs(educationData)
      const experienceDataWithoutIds = removeIDs(experienceData)
  
      const data = {
        id,
        bio: e.target.bio.value,
        website: e.target.website.value,
        image: e.target.image.value,
        designation: e.target.designation.value,
        address: e.target.address.value,

        intrests: e.target.interests.value,
        avalability: e.target.availability.value,
        skills: e.target.skills.value,
        aditional_info: e.target.additional_info.value,
        experience_level: e.target.experience_level.value,

        experience: experienceDataWithoutIds,
        education: educationDataWithoutIDs,
      }
  
      try {
  
        const response = await fetch("/api/auth/user/update", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })
  
        if (!response.ok) {
          throw new Error("Failed to create job post.");
        } else {
          router.push('/user/onboarding/screen2')
        }
      } catch (error) {
          console.error(error)
      }
    }


    const handle_education_change = (e: any, ID: string) => {
      e.preventDefault()
      educaionDispatch({type: 'HANDLE_CHANGE', payload: { ID, name: e.target.name, value: e.target.value} })
      console.log('HANDLE_CHANGE', ID, {name: e.target.name, value: e.target.value} )
    }

    const handle_experience_change = (e: any, ID: string) => {
      e.preventDefault()
      experienceDispatch({type: 'HANDLE_CHANGE', payload: { ID, name: e.target.name, value: e.target.value} })
    }


  return (
    <div>
      <div className='w-10/12 mx-auto py-12'>
  <form  onSubmit={handleSubmit} >
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      designation:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="tel" id="designation" name="designation" placeholder='Frontend, backend, fullstack' />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Address:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="address" name="address" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Bio:
      <textarea className='"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"' id="bio" name="bio"></textarea>
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Website:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="website" name="website" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Image:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file" id="image" name="image" accept="image/*" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Interests:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="interests" name="interests" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Availability:
      <select id="availability" name="availability">
        <option value="ENTRY">Immedieatly</option>
        <option value="One Week">One Week</option>
        <option value="Two Weeks">Two Weeks</option>
        <option value="Four Weeks">Four Weeks</option>
      </select>
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Skills:
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="skills" name="skills" />
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Additional Info:
      <textarea className='"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"' id="additional_info" name="additional_info"></textarea>
    </label>
    <br />
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Experience Level:
      <select id="experience_level" name="experience_level">
        <option value="ENTRY">ENTRY</option>
        <option value="INTERNSHIP">INTERNSHIP</option>
        <option value="INTERMIDIATE">INTERMIDIATE</option>
        <option value="JUNIOR">JUNIOR</option>
        <option value="MIDLEVEL">MIDLEVEL</option>
        <option value="SENIOR">SENIOR</option>
      </select>
    </label>
    <br />
    <hr />
    <button onClick={handle_education_input} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' type="submit">ADD EDUCATION</button>
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Education:
      {
        educationData.map((data: {
           name_of_institution: string | number | readonly string[]; 
           ID: string;
           degree_type: string;
           from: string;
           to: string;
          }) => (
          <div className=''>
          <span className='w-full flex space-x-5 mb-5'>
            <span className='w-2/4 flex flex-col'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Name of Institution
              <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={ (e) =>handle_education_change(e, data.ID) }  value={data.name_of_institution} type="text" id="name_of_institution" name="name_of_institution" />
              </label>
            </span>
            <span className='w-2/4 flex flex-col'>    
              <label>
                Degree Type
                <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={ (e) =>handle_education_change(e, data.ID) }  value={data.degree_type} type="text" id="degree_type" name="degree_type" />
              </label>
            </span>
          </span>

          <span className='w-full flex space-x-5 mb-5'>
            <span className='w-2/4 flex flex-col'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                start date
                <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={ (e) =>handle_education_change(e, data.ID) }  value={data.from} type="text" id="from" name="from" />
              </label>
            </span>
            <span className='w-2/4 flex flex-col'>
              <label>
                date of completion
                <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={ (e) =>handle_education_change(e, data.ID) }  value={data.to} type="text" id="to" name="to" />
              </label>
            </span>
          </span>
          </div>
        ))
      }
    </label>
    <br />

    <hr />
    <button onClick={handle_experience_input} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' type="submit">ADD EXPERIENCE</button>
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      Experience:
      {
        experienceData.map((data: {
           ID: string;
           name_of_employer: string;
           from: string;
           to: string;
           i_currently_work_here: string
          }) => (
          <div className=''>
          <span className='w-full flex space-x-5 mb-5'>
            <span className='w-2/4 flex flex-col'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              name of employer
              <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={ (e) => handle_experience_change(e, data.ID) }  value={data.name_of_employer} type="text" id="name_of_employer" name="name_of_employer" />
              </label>
            </span>
            <span className='w-2/4 flex flex-col'>    
              <label>
                i_currently_work_here
                <select onChange={(e) => handle_experience_change(e, data.ID)}
                value={data.i_currently_work_here}
                id="i_currently_work_here" name="i_currently_work_here">
                  <option value="TRUE">TRUE</option>
                  <option value="FALSE">FALSE</option>
                </select>
              </label>
            </span>
          </span>

          <span className='w-full flex space-x-5 mb-5'>
            <span className='w-2/4 flex flex-col'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                start date
                <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={ (e) =>handle_experience_change(e, data.ID) }  value={data.from} type="text" id="from" name="from" />
              </label>
            </span>
            <span className='w-2/4 flex flex-col'>
              <label>
                date of completion
                <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={ (e) =>handle_experience_change(e, data.ID) }  value={data.to} type="text" id="to" name="to" />
              </label>
            </span>
          </span>
          </div>
        ))
      }
    </label>

    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' type='submit' >Submit</button>
  </form>
</div>
    </div>
  )
}
