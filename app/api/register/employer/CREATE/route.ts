import { employer } from "@/data/employer";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { company_name, email, password } = (await req.json()) as {
      company_name: string;
      email: string;
      password: string;
    };
    const hashed_password = await hash(password, 12);

    const employer = await prisma.user.create({
      data: {
        firstName: '',
        lastName: '',
        gender: 'PREFERE_NOT_TO_DISCLOSE',
        email: email.toLowerCase(),
        hashedPassword: hashed_password,
        bio: "",
        role: "EMPLOYER",
        employer: {
          create: {
            company_name,
            description: '',
            aditional_info: '',
          }
        }
      },
    });

    return NextResponse.json({
      user: {
        status: 'ok',
        employer_name: employer.createdAt
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
