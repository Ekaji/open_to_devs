import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = (await req.json()) as {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    };
    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        gender: 'PREFERE_NOT_TO_DISCLOSE',
        email: email.toLowerCase(),
        hashedPassword: hashed_password,
        bio: "",
        role: "JOBSEEKER"
      },
    });


    return NextResponse.json({
      user: {
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
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


