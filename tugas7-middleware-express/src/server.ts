import express from "express";
import uploadRouter from "./route/route";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", uploadRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
