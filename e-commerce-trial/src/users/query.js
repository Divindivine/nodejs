const getUserByID = "select * from users where user_id = $1";
const addUser =
  "insert into users (user_name, address, age, dob) values ($1, $2, $3, $4)";
const checkNameExists = "select * from users where users.user_name = $1";
const updateUserDetails =
  "update users set user_name = $1, address = $2, age = $3, dob = $4 where users.user_id = $5";
const addOrders =
  "insert into orders (user_id, product_id) values ($1, $2)";

module.exports = {
  getUserByID,
  addUser,
  checkNameExists,
  updateUserDetails,
  addOrders,
};
