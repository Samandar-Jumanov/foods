import prisma from "../../../prisma/prisma";
import { hashPassword } from "../../../lib/auth";

// Assuming this is a Next.js API route handler
export default async function handler(req : Request, res : Response ) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, password } : { email : string , password : string } = req.body;
    
    if (!email || !password) {
      return res.status(422).json({ error: "Missing inputs" });
    }
    
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);
    
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...userWithoutPassword } = newUser;

    return res.status(201).json({ message: "User created", user: userWithoutPassword });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
