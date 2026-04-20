const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "Book A", author: "Author 1" },
  { id: 2, title: "Book B", author: "Author 2" }
];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// GET book by ID
router.get("/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// ADD book
router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body
  };
  books.push(newBook);
  res.json(newBook);
});

module.exports = router;