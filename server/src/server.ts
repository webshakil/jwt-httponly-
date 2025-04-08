import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/userRouters";
import morgan from "morgan"
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"))
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Exact origin, no wildcard
  credentials: true, // Allow cookies
}));
app.use(cookieParser());

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env");
}

mongoose
  .connect(uri, {
    
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/v1/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});     