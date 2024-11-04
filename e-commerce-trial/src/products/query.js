const getProducts = "select * from products";
const getProductsByID = "select * from products where products.product_id = $1";
const checkProductExist =
  "select * from products where products.product_name = $1 and products.price = $2";
const addProduct =
  "insert into products (product_name, price, stock) values ($1, $2, $3)";
const editProductDetails =
  "update products set product_name = $1, price = $2, stock = $3 where products.product_id = $4";
const removeProduct = "delete from products where products.product_id = $1";

module.exports = {
  getProducts,
  getProductsByID,
  checkProductExist,
  addProduct,
  editProductDetails,
  removeProduct,
};

