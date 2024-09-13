import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import connectDB from "./db/connectDB.js";

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port ${PORT}`);
});
