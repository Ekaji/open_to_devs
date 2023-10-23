"use client"

import { RegularButton } from "../buttons.components";
import { useFormik } from 'formik';
import { createJobSchema } from "@/config/formValidation";
import useSWR from 'swr';
import { useEffect, useState } from "react";

export default function JobPostForm({ id }: any) {
  const handleSubmit = async (values: {
    title: any; description: any; deadline: any; link: any; source: any; level: any; duration: any; job_post_status: any; city: any; country: any; state: any; workLocation?: string; skill_requirements: any; niceToHave?: string; experience: any; responsibilities: any; benefits: any; from: any; to: any; currency?: string; tags: any; employerID?: string; work_location?: any; nice_to_have?: any;
  }) => {
    const data = {
        title: values.title,
        description: values.description,
        deadline: values.deadline,
        link: values.link,
        source: values.source,
        level: values.level,
        duration: values.duration,
        job_post_status: values.job_post_status,
        city: values.city,
        state: values.state,
        country: values.country,
        workLocation: values.work_location,
        skill_requirements: values.skill_requirements, //comma seperated list
        niceToHave: values.nice_to_have, //comma seperated list
        experience: values.experience,
        responsibilities: values.responsibilities,
        benefits: values.benefits, //comma seperated list
        from: parseInt(values.from.value),
        to: parseInt(values.to.value),
        // currency: values.currency,
        tags: values.tags, //comma seperated list
        employerID: id,
    }

    try {
      console.log('raw data', data)
      // /api/auth/posts/create_new_job
      const JSONdata = JSON.stringify(data)
      // API endpoint where we send form data.
      const endpoint = '/api/auth/posts/create_new_job'
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.log('an error occurred', error)
    }
  };

  const formik = useFormik({
    initialValues : {
      title: '',
      description: '',
      deadline: '',
      link: '',
      source: '',
      level: '',
      duration: '',
      job_post_status: '',
      city: '',
      country: '',
      state: '',
      workLocation: '',
      skill_requirements: '',
      niceToHave: '',
      experience: '',
      responsibilities: '',
      benefits: '',
      from: '',
      to: '',
      currency: '',
      tags: '',
      employerID: ''
    },
    validationSchema: createJobSchema,
    onSubmit: values => handleSubmit(values)
  })

        return (
          // <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
          <form className="space-y-4" onSubmit={formik.handleSubmit} >
            <label className='flex flex-col' >
              Title:
              <input
                className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.title && formik.errors.title ? 'border-red-500' : 'border-black'}
              `} type="text" id='title' name='title'
              {...formik.getFieldProps('title')}
              />
            </label>
            <br />
            <div className="flex space-x-6">
              <label className='flex flex-col w-8/12' >
                Description:
                <textarea className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-black'}
              `}
                  id='description' name='description'
                  {...formik.getFieldProps('description')}
                />
              </label>
              <label className='flex flex-col  w-4/12' >
                Deadline:
                <input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.deadline && formik.errors.deadline ? 'border-red-500' : 'border-black'}
              `}
                  type="datetime-local" id='deadline' name='deadline'
                  {...formik.getFieldProps('deadline')}
                />
              </label>
            </div>
            <div className="flex w-full space-x-6">
              <label className='flex flex-col w-6/12' >
                Link:
                <input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.link && formik.errors.link ? 'border-red-500' : 'border-black'}
              `}
                  type="text" id='link' name='link'
                  {...formik.getFieldProps('link')}
                />
              </label>
              <br />
              <label className='flex flex-col w-6/12' >
                Source:
                <input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.source && formik.errors.source ? 'border-red-500' : 'border-black'}
              `}
                  type="text" id='source' name='source'
                  {...formik.getFieldProps('source')}
                />
              </label>
            </div>

            <br />
            <div className="flex w-full space-x-6">
              <label className='flex flex-col w-3/12' >
                Level:
                <select
                  className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.level && formik.errors.level ? 'border-red-500' : 'border-black'}
              `}
                  id='level' name='level'
                  {...formik.getFieldProps('level')}
                >
                  <option value="">Select an Option</option>
                  <option value="JUNIOR">Junior</option>
                  <option value="MIDLEVEL">Mid</option>
                  <option value="SENIOR">Senior</option>
                  <option value="ENTRY">Entry</option>
                  <option value="INTERNSHIP">Internship</option>
                  <option value="INTERMIDIATE">Intermediate</option>
                </select>
              </label>
              <label className='flex flex-col w-3/12' >
                Work Location:
                <select
                  className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.workLocation && formik.errors.workLocation ? 'border-red-500' : 'border-black'}
              `}
                  id='workLocation' name='workLocation'
                  {...formik.getFieldProps('workLocation')}
                >
                  <option value="">Select an Option</option>
                  <option value="ONSITE">Onsite</option>
                  <option value="REMOTE">Remote</option>
                </select>
              </label>
              <label className='flex flex-col w-6/12' >
                Duration:
                <input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.duration && formik.errors.duration ? 'border-red-500' : 'border-black'}
              `}
                  type="text" id='duration' name='duration'
                  {...formik.getFieldProps('duration')}
                />
              </label>
            </div>

            <Location formik={formik} />

            <br />
            <br />
            <div className="flex w-full space-x-6">
              <label className='flex flex-col w-6/12' >
                Skill Requirements:
                <input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.skill_requirements && formik.errors.skill_requirements ? 'border-red-500' : 'border-black'}
              `}
                  type="text" id='skill_requirements' name='skill_requirements'
                  {...formik.getFieldProps('skill_requirements')}
                />
              </label>
              {/* <br /> */}
              <label className='flex flex-col w-6/12 ' >
                Experience<input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.experience && formik.errors.experience ? 'border-red-500' : 'border-black'}
              `} type="text"
                  id='experience' name='experience'
                  {...formik.getFieldProps('experience')}
                />
              </label>
              {/* <br /> */}
            </div>
            <div className="flex w-full space-x-6">
              <label className='flex flex-col w-6/12' >
                Nice to Have:
                <input className="outline-none border-2 border-black bg-[#BEADFA]/40 rounded-md w- h-10" type="text"
                  id='niceToHave' name='niceToHave'
                  {...formik.getFieldProps('niceToHave')}
                />
              </label>
              {/* <br /> */}
              <label className='flex flex-col w-6/12' >
                Responsibilities:
                <input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.responsibilities && formik.errors.responsibilities ? 'border-red-500' : 'border-black'}
              `} type="text"
                  id='responsibilities' name='responsibilities'
                  {...formik.getFieldProps('responsibilities')}
                />
              </label>
              {/* <br /> */}
            </div>
            <label className='flex flex-col' >
              Benefits:
              <textarea className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.benefits && formik.errors.benefits ? 'border-red-500' : 'border-black'}
              `}
                id='benefits' name='benefits'
                {...formik.getFieldProps('benefits')}
              />
            </label>
            <br />

              <p className=''>Compensation</p>
            <div className="flex w-full space-x-6">
              <label className='flex flex-col w-4/12' >
                {/* From: */}
                Between:
                <input type="number" className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.from && formik.errors.from ? 'border-red-500' : 'border-black'}
              `}
                  id='from' name='from'
                  {...formik.getFieldProps('from')}
                />
              </label>
              <label className='flex flex-col w-4/12'>
                {/* To: */}
                And:
                <input type="number" className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.to && formik.errors.to ? 'border-red-500' : 'border-black'}
              `}
                  id='to' name='to'
                  {...formik.getFieldProps('to')}
                />
              </label>
              <label className='flex flex-col w-4/12'>
                currency:
                <input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.currency && formik.errors.currency ? 'border-red-500' : 'border-black'}
              `} type="text"
                  id='currency' name='currency'
                  {...formik.getFieldProps('currency')}
                />
              </label>
            </div>
            <label className='flex flex-col' >
            </label>
            <div>
            </div>

            <div className="flex w-full space-x-6" >
              <label className='flex flex-col w-8/12' >
                Tags:
                <input className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.tags && formik.errors.tags ? 'border-red-500' : 'border-black'}
              `} type="text"
                  id='tags' name='tags'
                  {...formik.getFieldProps('tags')}
                />
              </label>
              <label className='flex flex-col w-4/12' >
                Job Post Status:
                <select className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10
                ${formik.touched.job_post_status && formik.errors.job_post_status ? 'border-red-500' : 'border-black'}
              `}
                  id='job_post_status' name='job_post_status'
                  {...formik.getFieldProps('job_post_status')}
                >
                  <option value="">Select Post Status</option>
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                </select>
              </label>
            </div>
            <RegularButton type="submit" text={'Submit'} />
            {/* <button type="submit" >Submit</button> */}
          </form>
          // </main>
        )
}

const Location = ({formik}) => {
  // const [country, setCountry] = useState(null)
  const [city, setCity] = useState(null)
  const [countryState, setCountryState] = useState(null)

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: countriesData, error } = useSWR('/api/countriesData', fetcher);


  useEffect(() => {
    if (formik.values.country) {
      countriesData.find(country => {
        if(country.name === formik.values.country) setCountryState(country.states);
      })
    }
    if (formik.values.state) {
      countriesData.find(country => {
        country.states.find(state => {
          if (state.name === formik.values.state) setCity(state.cities)
        })
      })
    }
  }, [formik])

  if(countriesData) console.log('<x>', countriesData.flat())

  return (
    <>
          <div>Location</div>
            <div className="flex w-full space-x-6">
              <label className='flex flex-col w-5/12' >
                Country:
                <select
                  // onChange={setselectedCountryIDOption}
                  className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10 border-black
              `}
              {...formik.getFieldProps('country')}
                  id='country' name='country'
                >
                      <option value={null}>Choose a Country</option>
                  {countriesData && (
                    countriesData.map(({name, id} ) => (
                      <option value={`${name}`}>{`${name}`}</option>
                    ))
                  )
                  }
                </select>
              </label>
              <label className='flex flex-col w-5/12' >
                City:
                <select className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10 border-black
              `}
            type="text" id='state' name='state'
            {...formik.getFieldProps('state')}
          >
            <option value={null}>Choose a state</option>
                {countryState && (
                    countryState.map(({name, id} ) => (
                      <option value={`${name}`}>{`${name}`}</option>
                    ))
                  )
                  }
                </select>
              </label>
              <label className='flex flex-col w-5/12' >
                State:
                <select className={`outline-none border-2 bg-[#BEADFA]/40 rounded-md h-10 border-black
              `}
            type="text" id='city' name='city'
            {...formik.getFieldProps('city')}
          >
                      <option value={null}>Choose a City</option>
             {city && (
                    city.map(({name, id} ) => (
                      <option value={`${id}`}>{`${name}`}</option>
                    ))
                  )
                  }
                </select>

              </label>
            </div>
    </>
  )
}
