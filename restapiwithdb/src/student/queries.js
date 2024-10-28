const getStudents = "select * from students";
const getSingleStudent = "select * from students where id = $1";
const checkEmailExists = "select s from students s where s.email = &1";

module.exports = {
  getStudents,
  getSingleStudent,
  checkEmailExists,
};
