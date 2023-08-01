import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const {
      name,
      bio,
      website,
      image,
      id
     } = await req.json()

  const feedbacks = prisma.user.update({
    where: {
      id
    },
    data: {
      name,
      bio,
      website,
      image,
    }
  })

  let json_response = {
    status: "success",
    feedbacks,
  };
  return NextResponse.json(json_response);
}