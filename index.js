const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/routes");

const mongoString = process.env.DATABASE_URL;
// Connecting Mongo to server with mongoose
mongoose.connect(mongoString);
const database = mongoose.connection;

// connection status
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// express
const app = express();

// middlewares
app.use(express.json());
app.use("/api", routes);
app.use(cors());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
