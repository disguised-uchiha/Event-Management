const mongoose = require("mongoose");

const String_and_required = { type: String, required: true };
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String_and_required,
  lastName: String_and_required,
  email: String_and_required,
  password: String_and_required,
});

module.exports = mongoose.model("User", userSchema);
