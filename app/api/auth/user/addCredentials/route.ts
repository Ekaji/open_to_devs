import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const {
      id,
     } = await req.json()


    const createJob_seeker = await prisma.job_Seeker.update({
      where: {
        id
      },
      data: {
        
      }
    });


  let json_response = {
    status: "success",
    feedbacks: {  ...createJob_seeker },
  };
  return NextResponse.json(json_response);
}