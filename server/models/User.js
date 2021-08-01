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
  goalsCompleted: Number,
});

userSchema.plugin(passportLocalMongoose, {
  errorMessages: {
    IncorrectUsernameError: "Password or username are incorrect",
    IncorrectPasswordError: "Password or username are incorrect",
  },
});

mongoose.model("User", userSchema);
