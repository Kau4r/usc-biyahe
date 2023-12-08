import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
 const { username, password } = req.body;

 const user = await prisma.user.findUnique({
   where: { username },
 });

 if (!user) {
   return res.status(401).json({ message: "Invalid username or password" });
 }

 const validPassword = await bcrypt.compare(password, user.password);

 if (!validPassword) {
   return res.status(401).json({ message: "Invalid username or password" });
 }

 // Create a session for the user
 // ...

 res.status(200).json({ message: "Logged in successfully" });
}
