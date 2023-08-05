import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const id = await req.json()

  const feedbacks = await prisma.user.findUnique({
   where: {
    id
   }
  });

  let json_response = {
    status: id,
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
        image: feedbacks.image
    },
  };
  return NextResponse.json(json_response);
}
