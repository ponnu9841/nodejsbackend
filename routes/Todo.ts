import { Router, type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();

    if (todos) {
      res.json(todos);
    } else {
      res.status(404).json({ error: "No todos found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { title, description, userId } = req.body;
  try {
    if ((title || description ) && userId) {
      const createdTodo = await prisma.todo.create({
        data: {
          title,
          description,
          user_id: userId
        },
      });
      res.status(200).json(createdTodo);
    } else {
      res.status(203).json({ error: "Title or description needed" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    if (title || description) {
      const updatedTodo = await prisma.todo.update({
        where: {
          id: String(id),
        },
        data: {
          title,
          description,
        },
      });
      res.status(200).json(updatedTodo);
    } else {
      res.status(203).json({ error: "Title or description needed" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTodo = await prisma.todo.delete({
      where: {
        id: String(id),
      },
    });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
