const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Project = mongoose.model("Project");
const User = mongoose.model("User");

module.exports = (app) => {
  app.get("/api/projects", async (req, res, next) => {
    try {
      const projects = await Project.find({ _user: req.user.id });

      res.send(projects);
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });

  app.get("/api/projects/:projectId/notes", async (req, res, next) => {
    try {
      const project = await Project.findOne({
        _id: req.params.projectId,
        _user: req.user.id,
      });
      res.send(project).catch(next);
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });

  app.post("/api/projects", requireLogin, async (req, res, next) => {
    try {
      const { title } = req.body;

      const project = await new Project({
        title,
        _user: req.user.id,
      }).save();
      res.redirect("/api/projects");
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });

  app.post("/api/projects/:projectId/notes", async (req, res, next) => {
    try {
      const note = {
        title: req.body.title,
        content: req.body.content,
      };
      const project = await Project.findOne({
        _id: req.params.projectId,
        _user: req.user.id,
      });
      project.notes.push(note);
      project.save();
      res.redirect("/api/projects/:projectId/notes");
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });

  app.post("/api/goals", async (req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.user.id });

      user.goals.push({
        ...req.body,
      });
      await user.save();
      res.send("user goal added");
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });

  app.patch("/api/goals", async (req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.user.id });
      const goal = user.goals.id(req.body._id);

      if (req.body.complete) {
        await user.goals.id(req.body._id).remove();
        user.save();
      }

      res.send("user goal updated");
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });
};
