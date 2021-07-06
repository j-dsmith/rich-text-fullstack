const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
  goal: {
    type: String,
    required: true,
    unique: true,
  },
  dateAdded: {
    type: Date,
    default: new Date(),
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = goalSchema;
