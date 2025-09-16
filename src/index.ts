import express from "express";
import dotenv from "dotenv";
import appRoute from "./routes/app.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2024;

app.use(express.json());
app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
