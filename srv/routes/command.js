const express = require("express");
const router = express.Router();
const { exec } = require("child_process");
const cors = require("cors");

const Command = require("../models/Command");

router.all("*", cors());

router.post("/", async (req, res) => {

   exec(req.body.text, async (error, stdout) => {

    if (error) {
      console.log(`error: ${error.message}`);
      res.status(500).send("Server Error");
      return;
    }

    res.json(stdout);

    const newCommand = new Command({
        text: req.body.text,
        output: stdout
      });
    await newCommand.save();

  });

});

module.exports = router;
