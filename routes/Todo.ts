import express, { Router, type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
	try {

        const todos = await prisma.todo.findMany();
 
        res.json(todos);
 
      } catch (error) {
 
        res.status(500).json({ error: 'An error occurred' });
 
      }
});

export default router;
