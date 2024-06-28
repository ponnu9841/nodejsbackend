import { Router, type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, password, phone, } = req.body;
  const hashedPassword = await bcrypt.hash(password, 11);

  try {
    if (name && phone) {
      const createdUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
        },
      });
      res.status(200).json(createdUser);
    } else {
      res.status(203).json({ error: "Name or phone needed" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;
