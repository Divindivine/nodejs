const pool = require("../../db");
const queries = require("./staffQueries");

const getStaffs = (req, res) => {
  pool.query(queries.getStaffs, (error, result) => {
    if (error) throw error;
    res.status(200).send(result.rows);
  });
};

const getStaffByID = (req, res) => {
  const id = req.params.staffID;
  pool.query(queries.getStaffByID, [id], (error, result) => {
    if (!result.rows.length) {
      res.send("No staff with this ID");
      return;
    }
    res.send(result.rows);
  });
};

const addStaff = (req, res) => {
  const { name, desigination, email, age, dob } = req.body;
  pool.query(queries.checkEmailExists, [email], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.send("email do exist");
      return;
    }
    pool.query(
      queries.addStaff,
      [name, desigination, email, age, dob],
      (error, result) => {
        if (error) throw error;
        res.send("Staff created successfully");
      }
    );
  });
};

const updateStaffDetails = (req, res) => {
  const id = req.params.staffID;
  pool.query(queries.getStaffByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      res.send("No staff with this id in database");
    }
    const { name, desigination, email, age, dob } = req.body;
    pool.query(
      queries.updateStaffDetails,
      [name, desigination, email, age, dob, id],
      (error, result) => {
        if (error) throw error;
        res.send("Staff updated successfully");
      }
    );
  });
};

const deleteStaff = (req, res) => {
  const id = req.params.staffID;
  pool.query(queries.getStaffByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      res.send("No Staff with this id in database");
      return;
    }
    pool.query(queries.deleteStaff, [id], (error, result) => {
      if (error) throw error;
      res.send("Staff removed from the database");
    });
  });
};

module.exports = {
  getStaffs,
  addStaff,
  getStaffByID,
  updateStaffDetails,
  deleteStaff,
};
