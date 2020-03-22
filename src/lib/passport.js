import passport from "passport";
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../server/database");
const helpers = require("./helpers");

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "user",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      let newUser = {
        username,
        password
      };
      newUser.password = await helpers.encryptPassword(password);
      // Saving in the Database
      const result = await pool.query("INSERT INTO user SET ? ", newUser);
      newUser.id = result.insertId;
      return done(null, newUser);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
  done(null, rows[0]);
});