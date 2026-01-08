import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import express from "express";

const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

app.use(express.json());

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();
  res.json({ data });
});

app.post("/", async (req, res) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  res.json({ message: "Post endpoint" });
});

app.listen(3000);
