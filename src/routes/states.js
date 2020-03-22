import express from "express";
const router = express.Router();

router.get("/posts", (req, res) => {
  res.render("home");
});

module.exports = router;