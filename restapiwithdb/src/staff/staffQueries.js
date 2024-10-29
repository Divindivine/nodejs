const getStaffs = "select * from staffs";
const getStaffByID = "select * from staffs where id = $1";
const checkEmailExists = "select * from staffs where email = $1";
const addStaff =
  "insert into staffs (name, desigination, email, age, dob) values ($1, $2, $3, $4, $5)";
const updateStaffDetails =
  "update staffs set name = $1, desigination = $2, email = $3, age = $4, dob = $5 where id = $6";
const deleteStaff = "delete from staffs where id = $1";

module.exports = {
  getStaffs,
  getStaffByID,
  checkEmailExists,
  addStaff,
  updateStaffDetails,
  deleteStaff,
};
