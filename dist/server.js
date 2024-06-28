"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
// const { PrismaClient } = require('@prisma/client');
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("./routes/User"));
const Todo_1 = __importDefault(require("./routes/Todo"));
const Item_1 = __importDefault(require("./routes/Item"));
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));
app.use("/user", User_1.default);
app.use("/todo", Todo_1.default);
app.use("/todo/item", Item_1.default);
app.listen(3000);
module.exports = app;
//# sourceMappingURL=server.js.map