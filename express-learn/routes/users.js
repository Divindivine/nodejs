const express = require("express");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("users List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("create user");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`get the user with id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update the user with the id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete the user with the id: ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Jenner" }];

router.param((req, res, next, id) => {
  req.user = users[id];
  next();
  console.log(id);
});

module.exports = router;
