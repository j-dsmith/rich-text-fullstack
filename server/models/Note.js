const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  // _project: { type: Schema.Types.ObjectId, ref: "Project" },
});

module.exports = noteSchema;
