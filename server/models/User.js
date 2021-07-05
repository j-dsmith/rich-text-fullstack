const mongoose = require("mongoose");
const { Schema } = mongoose;
const GoalSchema = require("./Goal");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  googleId: String,
  username: String,
  name: String,
  password: String,
  goals: [GoalSchema],
});

userSchema.plugin(passportLocalMongoose);

mongoose.model("User", userSchema);
