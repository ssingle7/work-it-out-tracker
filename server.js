const express = require("express");
// const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongoose connect to deploy into Heroku
mongoose.connect(process.env.MONGODB_URI || "https://git.heroku.com/still-bayou-21852", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Required routes paths
 app.use(require("./routes/api-routes.js"));
 app.use(require("./routes/html-routes.js"));

// Listener
app.listen(PORT, function () {
  console.log(`App listening on http://localhost:${PORT}`);
});