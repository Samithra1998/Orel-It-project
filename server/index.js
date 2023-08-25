import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
