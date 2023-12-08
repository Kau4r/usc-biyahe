import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    res.status(200).json({ message: "User authenticated" });
  } catch (error) {
    res.status(500).json({ error: "Error signing in" });
  }
}
