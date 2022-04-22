const mongoose = require("mongoose");

const CommandSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  output: {
    type: String,
  },
});

module.exports = Command =
  mongoose.models.command || mongoose.model("command", CommandSchema);
