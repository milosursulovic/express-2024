import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(logger);
app.use("/api/posts", posts);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
