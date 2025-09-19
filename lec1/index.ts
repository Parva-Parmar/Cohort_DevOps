import express, { type Request, type Response } from "express";

const app = express();
const port = 3000;

// Define a simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World! 🚀");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
