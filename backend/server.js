const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/todo", require("./routes/todoRoutes"));

app.use(errorHandler);

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow.bold);
});
