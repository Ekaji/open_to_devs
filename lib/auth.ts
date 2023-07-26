import { prisma } from "@/lib/prisma"
import { compare } from "bcryptjs"
import type { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com"
        },
        password: { label: "Password", type: "Password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          },
        });

        if (!user || !(await compare(credentials.password, user.hashedPassword))) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          randomKey: "Welcome"
        };
      },
    }),
  ],
  // pages: {

  // },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
          role: u.role
        }
      }
      return token;
    },

    session: ({ session, token }) => {
      return {
        ...session,
        user : {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
          role: token.role
        },
      };
    },
  },
}