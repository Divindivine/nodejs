const getUsers = "select * from users";
const getProducts = "select * from products";
const getOrders = "select * from orders";
const getUserByID = "select * from users where user_id = $1";
const getProductsByID = "select * from products where product_id = $1";
const getOrderBYID = "select * from orders where order_id = $1";
const removeUser = "delete from users where user_id = $1";
const removeProduct = "delete from products where product_id = $1";
const removeOrder = "delete from orders where order_id = $1";

module.exports = {
  getUsers,
  getProducts,
  getOrders,
  getUserByID,
  getProductsByID,
  getOrderBYID,
  removeUser,
  removeProduct,
  removeOrder,
};
