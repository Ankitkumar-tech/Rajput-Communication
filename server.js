import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// configure env
dotenv.config();

// DataBase Connected
connectDB();

const app = express();
app.use(express.json());
app.use(morgan("dev"));

//  routes
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/auth");

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app </h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening running on ${PORT}`.bgCyan.red);
});
