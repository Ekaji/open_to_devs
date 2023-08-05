import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { hash } from "bcryptjs";

async function main() {
  const hashedPassword = await hash("password123", 12)
  await prisma.user.create({
      data: {
        firstName: "Example",
        lastName: "Company",
        email: "coolcacuz93@gmail.com",
        hashedPassword,
        role: "EMPLOYER",
        bio: "",
        logo: "https://example.com/logo.png",
        website: "https://example.com",
        image: "https://example.com/image.png",
        phone: "+23412345678",
        dateOfBirth: new Date("2001-01-01").toISOString(),
        gender: 'PREFERE_NOT_TO_DISCLOSE'
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })