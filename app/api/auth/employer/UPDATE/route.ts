import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const {
    id,
    company_name,
    description,
    aditional_info,
    website,
    logo,
    industry,
    founded,
    headquarters,
    awards,
    size,
    mission,
    values,
    culture,
     } = await req.json()

     const updateUser = await prisma.employer.create({
      data: {
        company_name,
        description,
        aditional_info,
        website,
        logo,
        industry,
        founded: new Date(founded).toISOString(),
        headquarters,
        awards,
        size: parseInt(size),
        mission,
        values,
        culture,
        userID: id
      }
    });


  let json_response = {
    status: "success",
    feedbacks: { ...updateUser },
  };
  return NextResponse.json(json_response);
}