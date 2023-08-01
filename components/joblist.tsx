// "use client";

import { JobPost } from "@prisma/client";
import React, { cache, use } from "react";

interface UpdatedJobPost extends JobPost {
  // ok: any;
  results: number
  status: string
  feedbacks: JobPost[];
}

const baseUrl = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://open-to-devs.vercel.app'

const getJobPosts = cache(
  async () => {
     try{
       const res = await fetch(`${baseUrl}/api/auth/posts/fetch_all_jobs`)

       if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json()
   
     } catch (error) {
       console.error(error)
     }
     
   }
) 


export default function JobList() {
  let response = use<UpdatedJobPost>(getJobPosts());

  const job_posts = response?.feedbacks

  if(!job_posts) {
    return <div>an error cccured</div>
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 20,
      }}
    >
     
     {
       response ? (
           job_posts.map((job: any) => (
        <div
          key={job.id}
          style={{ border: "1px solid #ccc", textAlign: "center" }}
        >
          <img
            src={`https://robohash.org/${job.id}?set=set2&size=180x180`}
            alt={job.title}
            style={{ height: 180, width: 180 }}
          />
          <h3>{job.title}</h3>
        </div>
      ))
      ) : (<>An error Occured</>)
     }
     
    </div>
  );
}
