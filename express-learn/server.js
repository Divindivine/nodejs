const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(logger);

app.listen(3000);

app.get("/", (req, res) => {
  console.log("Start");
  res.send("ola");
});

const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

app.use("/users", userRouter);
app.use("/posts", postRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
