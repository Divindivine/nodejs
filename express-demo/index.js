const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((cour) => cour.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("Course with given ID was not found");
  }
  res.send(course);
});

// app.get("/api/courses/:year/:month", (req, res) => {
//   res.send(req.params);
// });

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  // const schema = {
  //   name: Joi.string().min(3).required(),
  // };
  // const result = Joi.validate(req.body, schema);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // if (!req.body.name || req.body.length < 3) {
  //   res
  //     .status(400)
  //     .send("Name is required and should be minimum of 3 characters");
  //   return;
  // }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((cor) => cor.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("Course with given ID was not found");
  }

  const { error } = validateCourse(req.body);
  // const schema = {
  //   name: Joi.string().min(3).required(),
  // };
  // const result = Joi.validate(req.body, schema);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  course.name = req.body.name;
  res.send(course);
});


app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((cor) => cor.id === parseInt(req.params.id));
  if (!course) {
   return res.status(404).send("Course with given ID was not found");
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}
