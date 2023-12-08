import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
  import bcrypt from "bcryptjs";

export async function POST(req, res) {
  const { username, email, password } = req.body;
  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
}
