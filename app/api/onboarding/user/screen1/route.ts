import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

const {
  id,
  phone,
  address,
  bio,
  website,
  image,
  intrests,
  avalability,
  skills,
  aditional_info,
  experience_level
} = await req.json()


  const feedbacks = await prisma.user.update({
    where: {
      id
    },
    data: {
      phone,
      address,
      bio,
      website,
      image,
      job_seeker: {
        create: [
          {
            intrests,
            avalability,
            skills,
            aditional_info,
            experience_level
          }
        ]
      }
    }
  });

  let json_response = {
    status: "success",
    feedbacks,
  };
  return NextResponse.json(json_response);
}
