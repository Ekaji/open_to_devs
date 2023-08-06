import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const {
      id,
      bio,
      image,
      skills,
      website,
      address,
      intrests,
      education,
      experience,
      designation,
      avalability,
      applications,
      aditional_info,
      experience_level,
     } = await req.json()

     const updateUser = await prisma.user.update({
      where: {
        id
      },
      data: {
        bio,
        image,
        website,
        address,
        designation,
        job_seeker: {
          create: {
            skills,
            intrests,
            avalability,
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
            },
            applications: {
              createMany: {
                data: applications
              }
            }
          }
        }
      }
    });


  let json_response = {
    status: "success",
    feedbacks: { ...updateUser },
  };
  return NextResponse.json(json_response);
}