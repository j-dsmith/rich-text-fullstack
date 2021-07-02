const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  googleId: String,
  username: String,
  name: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

mongoose.model("User", userSchema);
