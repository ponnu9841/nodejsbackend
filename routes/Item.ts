import { Router, type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { title, todoId, isCompleted = false } = req.body;
  try {
    if (title && todoId) {
      const createdItem = await prisma.item.create({
        data: {
          title,
          is_completed: isCompleted,
          todo_id: todoId,
        },
      });
      res.status(200).json(createdItem);
    } else {
      res.status(203).json({ error: "Name or description needed" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;
