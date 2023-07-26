import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { id } =  await req.json()

  const feedbacks = await prisma.jobPost.findUnique({
   where: {
    id
   }
  });

  let json_response = {
    status: "success",
    feedbacks,
  };
  return NextResponse.json(json_response);
}