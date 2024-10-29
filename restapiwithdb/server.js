const express = require("express");
const studentRoutes = require("./src/student/studentRoutes");
const staffRoutes = require("./src/staff/staffRoutes");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});

app.get("/", (req, res) => {
  res.send("gotchaa");
});

app.use("/students", studentRoutes);
app.use("/staffs", staffRoutes);
