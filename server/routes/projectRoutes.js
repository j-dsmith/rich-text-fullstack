const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Project = mongoose.model("Project");
const User = mongoose.model("User");

module.exports = (app) => {
  app.get("/api/projects", async (req, res, next) => {
    try {
      const projects = await Project.find({ _user: req.user.id });
      return res.status(200).json(projects);
    } catch (err) {
      console.log(err);
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

  app.post("/api/projects", async (req, res, next) => {
    try {
      const { title } = req.body;

      const project = await new Project({
        title,
        _user: req.user.id,
      }).save();
      res.send(project);
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });

  app.post("/api/projects/:projectId/notes", async (req, res, next) => {
    try {
      const note = {
        title: req.body.title,
      };
      const project = await Project.findOne({
        _id: req.params.projectId,
        _user: req.user.id,
      });
      project.notes.push(note);
      project.save();
      res.send(project);
    } catch (err) {
      console.log(err);
      res.status(422).send({ error: err });
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

  app.delete("/api/goals/:goalId", async (req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.user.id });

      await user.goals.id(req.params.goalId).remove();
      user.save();

      res.send("goal deleted");
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });

  app.delete("/api/projects/:projectId", async (req, res, next) => {
    try {
      await Project.findByIdAndDelete(req.params.projectId);
      return res.status(200).json({ success: true, msg: "Project deleted" });
    } catch (err) {
      console.log(err);
      res.status(422).send({ error: err.message });
    }
  });
};
