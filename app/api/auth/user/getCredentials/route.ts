import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  
  const id = await req.json()

  const feedbacks = await prisma.job_Seeker.findMany({
   where: {
    userID: id
   },
   include: { applications: true , experience: true, education: true }
  });

  let json_response = {
    status: id,
    feedbacks
  };
  return NextResponse.json(json_response);

}