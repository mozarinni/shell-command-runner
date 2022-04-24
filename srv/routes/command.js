const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

const Command = require("../models/Command");

router.post("/", async (req, res) => {
  exec(req.body.text, async (error, stdout) => {
    if (error) {
      console.log(`error: ${error.message}`);
      res.status(500).send("Server Error");
    } else {
      res.status(200).json(stdout);
    }

    const output = stdout || error.message

    const newCommand = new Command({
      text: req.body.text,
      output: output,
    });
    await newCommand.save();
  });
});

module.exports = router;
