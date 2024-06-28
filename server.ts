// const express = require('express');
// const { PrismaClient } = require('@prisma/client');
import express, { type Express, type Request, type Response } from "express";
import User from "./routes/User"
import Todo from "./routes/Todo";
import Item from "./routes/Item";

const app: Express = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));

app.use("/user", User);
app.use("/todo", Todo);
app.use("/todo/item", Item);

app.listen(3000);

module.exports = app;
