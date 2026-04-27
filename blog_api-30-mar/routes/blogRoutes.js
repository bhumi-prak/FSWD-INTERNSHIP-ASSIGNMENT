const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// Create user
router.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Create post
router.post("/posts", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

// Get all posts
router.get("/posts", async (req, res) => {
  const posts = await Post.find().populate("author");
  res.json(posts);
});

// Add comment
router.post("/comments", async (req, res) => {
  const comment = await Comment.create(req.body);
  res.json(comment);
});

// Get comments for a post
router.get("/comments/:postId", async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user");
  res.json(comments);
});

module.exports = router;