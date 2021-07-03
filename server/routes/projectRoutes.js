const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Project = mongoose.model("Project");

module.exports = (app) => {
  app.get("/api/projects", async (req, res) => {
    const projects = await Project.find({ _user: req.user.id });
    console.log(projects);
    res.send("found projects for user");
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

    const project = await Project.findById(req.params.projectId);
    project.notes.push(note);
    project.save();
    res.send("note added to project successfully");
  });
};
