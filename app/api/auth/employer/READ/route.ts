import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const id = await req.json()

  const feedbacks = await prisma.user.findUnique({
   where: {
    id
   },
   include: {
    employer: {
      include: {
        jobposts: true
      }
    }, 
   }
  });

  const { 
    company_name, 
    industry, 
    description, 
    aditional_info, 
    website,founded, 
    headquarters, 
    size, 
    values, 
    culture,
    jobposts
  } = feedbacks.employer[0]

  let json_response = {
    status: 'ok',
    feedbacks: {
        company_name, 
        industry, 
        description, 
        additional_info: aditional_info, 
        company_website: website,
        founded, 
        headquarters, 
        size, 
        values, 
        culture,
        jobposts,
        email: feedbacks.email,
        phone: feedbacks.phone,
        address: feedbacks.address,
        dateOfBirth: feedbacks.dateOfBirth,
        role: feedbacks.role,
        status:feedbacks.status,
        bio: feedbacks.bio,
        logo: feedbacks.logo,
        website: feedbacks.website,
        image: feedbacks.image,
    },
  };
  return NextResponse.json(json_response);
}
