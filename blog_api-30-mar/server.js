require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");

app.use(express.json());

// ✅ Connect DB
connectDB();

// ✅ THIS IS IMPORTANT
app.use("/api", blogRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});