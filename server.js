require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { usersRouter, coursesRouter } = require("./routes");

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Leitmotiv Academy is running");
});

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/courses", coursesRouter);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Leitmotiv Academy is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
