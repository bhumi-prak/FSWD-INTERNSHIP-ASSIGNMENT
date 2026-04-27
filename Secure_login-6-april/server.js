require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./config/db");

app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.listen(process.env.PORT, () => {
  console.log("Server running...");
});