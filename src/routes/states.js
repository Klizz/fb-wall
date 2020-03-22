import express from "express";
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');

router.get("/posts", isLoggedIn, (req, res) => {
  res.render("home");
});

module.exports = router;