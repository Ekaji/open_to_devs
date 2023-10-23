import { getServerSession, Session  } from "next-auth";
import { authOptions } from "@/lib/auth";

const baseUrl = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://open-to-devs.vercel.app'

type SessionWithRole = Session & { user: { role: string, id: number } };
type Role = string | null;
type id = number | null;

async function getEmployer(applicantID: number | string, url: string, method: string ){
//   const data = { applicantID }
  try{
    const res = await fetch(`${baseUrl}/${url}`, {
      method,
      body: JSON.stringify(applicantID),
      headers: { 'Content-Type': 'application/json' }
    })

    if(!res.ok){
      throw new Error('unable to fetch')
    }
  
    return await res.json()

  }catch(error){
    console.error(error)
  }
}

export default async function Employer() {
  
  const session: SessionWithRole | null = await getServerSession(authOptions) || null;
  const role: Role = session?.user?.role ?? null;
  const id: id = session?.user?.id ?? null;


  const response = await getEmployer(id, 'api/auth/employer/READ', "POST") 

//   additional_info
//   company_website
//   jobposts,
//   dateOfBirth
//   status
//   logo
//   website
//   image

if (role !== "EMPLOYER") { 

}

  return (
    <>
    <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-green-400">
                    <div className="image overflow-hidden">
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{response?.feedbacks?.company_name}</h1>
                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{response?.feedbacks?.bio}</p>
                </div>
                <div className="my-4"></div>
         
            </div>
            <div className="w-full md:w-9/12 mx-2 h-64">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div>
                             <span className="tracking-wide">Recruter Name</span>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">First Name</div>
                                    <div className="px-4 py-2">{response?.feedbacks?.firstName}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Last Name</div>
                                    <div className="px-4 py-2">{response?.feedbacks?.lastName}</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2">{response?.feedbacks?.gender}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">{response?.feedbacks?.phone}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Current Address</div>
                                <div className="px-4 py-2">{response?.feedbacks?.address}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                <div className="px-4 py-2">{response?.feedbacks?.address}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email</div>
                                <div className="px-4 py-2">
                                    <a className="text-blue-800" href="mailto:jane@example.com">{response?.feedbacks?.email}</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Date of Birth</div>
                                <div className="px-4 py-2">{response?.feedbacks?.dateOfBirth}</div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                        Full Information</button>
                </div>

                <div className="my-4"></div>

                <div className="bg-white p-3 shadow-sm rounded-sm">
{/*  */}
          { 
        //   response?.feedbacks?.role === "USER" &&    
              (<div className="grid grid-cols-2">
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About {response?.feedbacks?.company_name}</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">description</div>
                                    <div className="text-gray-500 text-xs">{response?.feedbacks?.description}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Founded</div>
                                    <div className="text-gray-500 text-xs">{response?.feedbacks?.founded}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Industry</div>
                                    <div className="text-gray-500 text-xs">{response?.feedbacks?.headquarters}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Headquarers</div>
                                    <div className="text-gray-500 text-xs">{response?.feedbacks?.industry}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Size</div>
                                    <div className="text-gray-500 text-xs">{response?.feedbacks?.size}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">values</div>
                                    <div className="text-gray-500 text-xs">{response?.feedbacks?.values}</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">culture</div>
                                    <div className="text-gray-500 text-xs">{response?.feedbacks?.culture}</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Education</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                {
                                   response?.feedbacks?.jobposts.map(() => (
                                   <>
                                        <li>
                                            <div className="text-teal-600">Masters Degree in Oxford</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                   </>
                                   )) 
                                }
                            </ul>
                        </div>
                    </div>
                    )
                  }
                  {/* "EMPLOYER" */}
                  {
        
                    (
                      <div className="grid grid-cols-2">
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Experience</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Education</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">Masters Degree in Oxford</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    )
                  }
                </div>
            </div>
        </div>
    </div>
    </>
    )
}