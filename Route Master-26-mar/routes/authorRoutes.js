const express = require("express");
const router = express.Router();

let authors = [
  { id: 1, name: "Author 1" },
  { id: 2, name: "Author 2" }
];

// GET all authors
router.get("/", (req, res) => {
  res.json(authors);
});

// GET author by ID
router.get("/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).json({ message: "Author not found" });
  res.json(author);
});

// ADD author
router.post("/", (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    ...req.body
  };
  authors.push(newAuthor);
  res.json(newAuthor);
});

module.exports = router;