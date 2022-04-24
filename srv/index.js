const express = require("express");

const app = express();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//Define route
app.use("/api/command", require("./routes/command"));

module.exports = app