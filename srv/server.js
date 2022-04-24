const connectDB = require("./config/db");
const app = require('./index')

//Connect Database
connectDB();

const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

