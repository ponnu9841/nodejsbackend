// const express = require('express');
// const { PrismaClient } = require('@prisma/client');
import express, {type Express, type Request, type Response} from 'express';

const app: Express = express();
// const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(3000);

module.exports = app;