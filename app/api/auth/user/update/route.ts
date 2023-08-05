import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(req: NextRequest) {

  const {
      id,
      bio,
      website,
      image,
      designation,
      address,

      intrests,
      avalability,
      skills,
      aditional_info,
      experience_level,

      experience,
      education
     } = await req.json()

     const updateUser = await prisma.user.update({
      where: {
        id
      },
      data: {
        bio,
        website,
        image,
        designation,
        address
      }
    });

    const createJob_seeker = await prisma.job_Seeker.create({
      data: {
        userID: id,
        intrests,
        avalability,
        skills,
        aditional_info,
        experience_level,
        experience: {
          createMany: {
            data: experience
          },
        },
        education: {
          createMany: {
            data: education
          }
        }
      }
    });


  let json_response = {
    status: "success",
    feedbacks: { ...updateUser, ...createJob_seeker },
  };
  return NextResponse.json(json_response);
}