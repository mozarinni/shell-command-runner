const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//Define route
app.use("/command", require("./routes/command"));

const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));