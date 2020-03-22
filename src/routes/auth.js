import express from "express";
const router = express.Router();

const passport = require('passport');

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", passport.authenticate('local.signup', {
    sucessRedirect: '/',
    failureRedirect: '/signup'
  }));

module.exports = router;