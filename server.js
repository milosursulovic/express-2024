import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import posts from "./routes/posts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/posts", posts);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
