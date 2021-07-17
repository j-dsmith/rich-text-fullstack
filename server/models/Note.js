const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "",
    sparse: true,
  },
  content: {
    type: String,
  },
  // _project: { type: Schema.Types.ObjectId, ref: "Project" },
});

module.exports = noteSchema;
