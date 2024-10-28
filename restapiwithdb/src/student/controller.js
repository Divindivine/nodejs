const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getSingleStudent = (req, res) => {
  const id = parseInt(req.params.studentID);
  pool.query(queries.getSingleStudent, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(queries.checkEmailExists, [email], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.send("Email Already Exists");
    } else res.send("gotttt");
  });
};

const deleteStudent = (req, res) => {
  const email = req.body.email;
  pool.query(queries.checkEmail, )
}

module.exports = {
  getStudents,
  getSingleStudent,
  addStudent,
};

