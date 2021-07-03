const mongoose = require("mongoose");
const { Schema } = mongoose;
const NoteSchema = require("./Note");

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  notes: { type: [NoteSchema], default: [] },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model("Project", projectSchema);
