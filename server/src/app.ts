import express from "express";
import connectDB from "./db";
import userApi from "./apis/user.api";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "../env/.env" });

const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api", userApi);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
