const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send(req.user);
  });

  //authenticate user with google strategy and ask for profile and email from google
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/projects", (req, res) => {
    res.send("hi");
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.post("/api/signup", async (req, res, next) => {
    await User.register(
      new User({ username: req.body.username, name: req.body.name }),
      req.body.password,
      (err) => {
        if (err) {
          console.log("error while user register!", err);
          return next(err);
        }
        console.log("user registered!");
        passport.authenticate("local")(req, res, () => {
          res.redirect("/");
        });
      }
    );
  });

  app.post("/api/projects", (req, res) => {});
};
