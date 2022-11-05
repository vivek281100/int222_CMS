const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// to log reqests in console.
app.use(morgan("tiny"));

//database connection
connectDB();

//to prase request to bodyparser;
app.use(bodyparser.urlencoded({ extended: true }));

//view engine
app.set("view engine", "ejs");

//loading assets;
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/add_user", (req, res) => {
//   res.render("add_user");
// });
// app.get("/user_update", (req, res) => {
//   res.render("user_update");
// });
//load routes
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`running at port ${PORT}...`);
});
