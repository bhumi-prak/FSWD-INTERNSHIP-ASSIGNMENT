const express = require("express");
const app = express();

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");

app.use(express.json());

// Routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});