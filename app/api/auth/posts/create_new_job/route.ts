import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

const {
  benefits,
  city,
  country,
  deadline,
  description,
  duration,
  employerID,
  experience,
  from,
  job_post_status,
  level,
  link,
  niceToHave,
  responsibilities,
  skill_requirements,
  source,
  state,
  tags,
  title,
  to,
  workLocation
} = await req.json()


  const feedbacks = await prisma.jobPost.create({
   data: {
    title,
    description,
    deadline: new Date(deadline),
    duration,
    employerID: parseInt(employerID),
    experience,
    job_post_status,
    level,
    link,
    source,
    workLocation,
    benefits: JSON.stringify([benefits]),
    niceToHave: JSON.stringify([niceToHave]),
    responsibilities: JSON.stringify([responsibilities]),
    // salaryRange: { 
    //   connect: { from, to}
    // },
    location: JSON.stringify([ city, state,country,]),
    skill_requirements: {connect: [skill_requirements]},
    tags: JSON.stringify([tags]),
   }
  });

  let json_response = {
    status: "success",
    feedbacks,
  };
  return NextResponse.json(json_response);
}
