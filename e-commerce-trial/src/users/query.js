const getUsers = "select * from users";
const getUserByID = "select * from users where user_id = $1";
const addUser =
  "insert into users (user_name, address, age, dob) values ($1, $2, $3, $4)";
const checkNameExists = "select * from users where users.user_name = $1";
const updateUserDetails =
  "update users set user_name = $1, address = $2, age = $3, dob = $4 where users.user_id = $5";
const removeUser = "delete from users where user_id = $1";

module.exports = {
  getUsers,
  getUserByID,
  addUser,
  checkNameExists,
  updateUserDetails,
  removeUser,
};
