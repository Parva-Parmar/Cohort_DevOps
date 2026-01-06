import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();
  res.json({
    data
  });
});

app.post("/", async(req, res) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  res.json({
    message: "Post endpoint",
  });
});

app.listen(3000);
