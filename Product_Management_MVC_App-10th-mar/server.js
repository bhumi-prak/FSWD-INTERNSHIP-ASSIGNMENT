const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");
const logger = require("./middleware/logger");

app.use(express.json());

// Logger middleware
app.use(logger);

// Routes
app.use("/products", productRoutes);

// Error handler (global)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});