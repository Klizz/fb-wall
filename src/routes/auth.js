import express from "express";
const router = express.Router();

const passport = require("passport");

router.get("/", (req, res) => {
  res.render("signup");
});

router.post("/signup", passport.authenticate("local.signup", {
    sucessRedirect: "/posts",
    failureRedirect: "/"
  }));

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", passport.authenticate("local.login", {
    sucessRedirect: "/posts",
    failureRedirect: "/"
  })
);

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect('/login');
});

module.exports = router;
