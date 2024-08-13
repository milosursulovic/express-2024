import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
