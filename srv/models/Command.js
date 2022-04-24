const mongoose = require("mongoose");

const CommandSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  output: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Command =
  mongoose.models.command || mongoose.model("command", CommandSchema);
