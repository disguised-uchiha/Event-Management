const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  Name: { type: String, required: true },
  Description: String,
  time: String,
  date: { type: String, required: true },
  location: String,
  certificate: { type: Boolean },
  fees: { type: Number, default: 0 },
  type: String,
  createdBy: Schema.Types.ObjectId,
  enrolled: [Schema.Types.ObjectId],
});

module.exports = mongoose.model("Event", eventSchema);
