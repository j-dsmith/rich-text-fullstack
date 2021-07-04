const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Project = mongoose.model("Project");

module.exports = (app) => {
  app.get("/api/projects", async (req, res) => {
    console.log(req);
    const projects = await Project.find({ _user: req.user.id });

    res.send(projects);
  });

  app.get("/api/projects/:projectId/notes", async (req, res) => {
    const project = await Project.findOne({
      _id: req.params.projectId,
      _user: req.user.id,
    });
    res.send(project);
  });

  app.post("/api/projects", requireLogin, async (req, res) => {
    const { title } = req.body;

    const project = await new Project({
      title,
      _user: req.user.id,
    }).save();
    res.redirect("/api/projects");
  });

  app.post("/api/projects/:projectId/notes", async (req, res) => {
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
  });
};
