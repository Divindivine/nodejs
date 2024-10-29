const pool = require("../../db");
const queries = require("./studentQueries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getStudentByID = (req, res) => {
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
    if (result.rows.length) res.send("Email Already Exists");
    pool.query(queries.addStudent, [name, email, age, dob], (error, result) => {
      if (error) throw error;
      res.status(201).send("Student created successfully");
    });
  });
};

const updateStudentDetails = (req, res) => {
  const id = parseInt(req.params.studentID);
  const { name } = req.body;
  pool.query(queries.getStudentByID, [id], (error, result) => {
    if (error) throw error;
    const noStudentFound = !result.rows.length;
    if (noStudentFound) res.send("Student does not exist in the database");
    pool.query(queries.updateStudentDetails, [name, id], (error, result) => {
      if (error) throw error;
      res.status(201).send("Student detail updated successfully");
    });
  });
};

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.studentID);
  pool.query(queries.getStudentByID, [id], (error, result) => {
    if (error) throw error;
    const noStudentFound = !result.rows.length;
    if (noStudentFound) res.send("Student does not exist in the database");
    pool.query(queries.deleteStudent, [id], (error, result) => {
      if (error) throw error;
      res.status(200).send("Student removed successfully");
    });
  });
};

module.exports = {
  getStudents,
  getStudentByID,
  addStudent,
  updateStudentDetails,
  deleteStudent,
};
