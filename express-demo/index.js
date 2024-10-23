const express = require("express");
const app = express();

const courses = [
  {
    id: 1,
    name: "JAVA SCRIPT",
  },
  {
    id: 2,
    name: "C++",
  },
  {
    id: 3,
    name: "PYTHON",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((cour) => cour.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Course with given ID was not found");
  }

  res.send(course);
});

// app.get("/api/courses/:year/:month", (req, res) => {
//   res.send(req.params);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));