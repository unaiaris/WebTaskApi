const express = require("express");
const router = express.Router();
//post model
const Posts = require("../../models/Posts");

// @route GET api/posts
// @desc GET ALL post
router.get("/", async (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
});
  try {
    const posts = await Posts.find();
    if (!posts) throw Error("No Items");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});


// @route GET api/posts/:id
// @desc GET An post
router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) throw Error("No Items");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @route POST api/posts
// @desc Creat An post
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong while saving the Post");

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @route DELETE api/posts/:id
// @desc delete An post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("No post found");
    res.status(200).json({ succes: true });
  } catch (err) {
    res.status(400).json({ msg: err });}
});

// @route UPDATE api/posts/:id
// @desc update An post
router.patch("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("Something went wrong while updating the Post");
    res.status(200).json({ succes: true });
  } catch (err) {
    res.status(400).json({ msg: err });}
});


module.exports = router;
