import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const id = await req.json()

  const feedbacks = await prisma.user.findUnique({
   where: {
    id
   },
   include: {
    job_seeker: {
      include: {
        applications: true,
        education: true,
        experience: true
      }
    }
   }
  });

  let json_response = {
    status: 'ok',
    feedbacks: {
        firstName: feedbacks.firstName,
        lastName: feedbacks.lastName,
        email: feedbacks.email,
        phone: feedbacks.phone,
        address: feedbacks.address,
        dateOfBirth: feedbacks.dateOfBirth,
        gender: feedbacks.gender,
        role: feedbacks.role,
        status:feedbacks.status,
        bio: feedbacks.bio,
        logo: feedbacks.logo,
        website: feedbacks.website,
        image: feedbacks.image,
        job_seeker: feedbacks.job_seeker
    },
  };
  return NextResponse.json(json_response);
}
