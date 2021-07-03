const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const { rawListeners } = require("../models/Note");

const Note = mongoose.model("Note");

module.exports = (app) => {
  app.post("/api/projects/:project/notes", async (req, res) => {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
      _project: req.body.projectId,
    });
  });
};
