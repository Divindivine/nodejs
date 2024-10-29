const getStudents = "select * from students";
const getStudentByID = "select * from students where id = $1";
const checkEmailExists = "select s from students s where s.email = $1";
const addStudent =
  "insert into students (name, email, age, dob) values ($1, $2, $3, $4)";
const deleteStudent = "delete from  students where id = $1";
const updateStudentDetails = "update students set name = $1 where id = $2";

module.exports = {
  getStudents,
  getStudentByID,
  checkEmailExists,
  addStudent,
  updateStudentDetails,
  deleteStudent,
};
