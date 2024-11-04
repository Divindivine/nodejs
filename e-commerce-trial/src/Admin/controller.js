const pool = require("../../database");
const queries = require("./query");

const getUsers = (request, response) => {
  pool.query(queries.getUsers, (error, result) => {
    if (error) throw error;
    response.send(result.rows);
  });
};

const getProducts = (request, response) => {
  pool.query(queries.getProducts, (error, result) => {
    if (error) throw error;
    response.send(result.rows);
  });
};

const getOrders = (request, response) => {
  pool.query(queries.getOrders, (error, result) => {
    if (error) throw error;
    response.send(result.rows);
  });
};

const removeUser = (request, response) => {
  const id = request.params.user_id;
  pool.query(queries.getUserByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      response.send(`No such user with id: ${id} in the database`);
      return;
    }
    pool.query(queries.removeUser, [id], (error, result) => {
      if (error) throw error;
      response.send(`Successfully removed user with id: ${id}`);
    });
  });
};

const removeProduct = (request, response) => {
  const id = request.params.product_id;
  pool.query(queries.getProductsByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      response.send(`No such user with id: ${id} in the database`);
      return;
    }
    pool.query(queries.removeProduct, [id], (error, result) => {
      if (error) throw error;
      response.send(`Successfully removed Prouduct with id: ${id}`);
    });
  });
};

const removeOrder = (request, response) => {
  const id = request.params.order_id;
  pool.query(queries.getOrderBYID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.error) {
      response.send(`No such order with id: ${id}`);
      return;
    }
    pool.query(queries.removeOrder, [id], (error, result) => {
      if (error) throw error;
      response.send(`succesfully removed the order orderId: ${id}`);
    });
  });
};

module.exports = {
  getUsers,
  getProducts,
  getOrders,
  removeUser,
  removeProduct,
  removeOrder,
};

