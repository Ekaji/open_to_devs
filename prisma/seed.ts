import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { hash } from "bcryptjs";

async function main() {
  const hashedPassword = await hash("password123", 12)
  await prisma.user.create({
      data: {
        name: "Example Company",
        email: "coolcacuz93@gmail.com",
        hashedPassword,
        role: "EMPLOYER",
        bio: "",
        logo: "https://example.com/logo.png",
        website: "https://example.com",
        image: "https://example.com/image.png",
        phone: "+23412345678"
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