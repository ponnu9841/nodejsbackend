// const express = require('express');
// const { PrismaClient } = require('@prisma/client');
import express, { type Express, type Request, type Response } from "express";
import todos from "./routes/Todo";

const app: Express = express();
// const prisma = new PrismaClient();


app.use("/todo", todos);

app.listen(3000);

module.exports = app;
