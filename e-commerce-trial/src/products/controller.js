const pool = require("../../database");
const queries = require("./query");

const getProducts = (request, response) => {
  pool.query(queries.getProducts, (error, result) => {
    if (error) throw error;
    response.send(result.rows);
  });
};

const getProductsByID = (request, response) => {
  const id = request.params.product_id;
  pool.query(queries.getProductsByID, [id], (error, result) => {
    if (error) throw error;
    response.send(result.rows);
  });
};

const addProduct = (request, response) => {
  const { product_name, price, stock } = request.body;
  pool.query(
    queries.checkProductExist,
    [product_name, price],
    (error, result) => {
      if (error) throw error;
      if (!result.rows.length) {
        pool.query(
          queries.addProduct,
          [product_name, price, stock],
          (error, result) => {
            if (error) throw error;
            response.send(
              `product: ${product_name} has successfully added to the database`
            );
          }
        );
        return;
      }
      response.send(
        `product: ${product_name} has already existed in the database`
      );
    }
  );
};

const editProductDetails = (request, response) => {
  const id = request.params.product_id;
  pool.query(queries.getProductsByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      response.send(`product with id: ${id} not exist in the database`);
      return;
    }
    const { product_name, price, stock } = request.body;
    pool.query(
      queries.editProductDetails,
      [product_name, price, stock, id],
      (error, result) => {
        if (error) throw error;
        response.send(`product: ${product_name} has succesfully updated`);
      }
    );
  });
};

const removeProduct = (request, response) => {
  const id = request.params.product_id;
  pool.query(queries.getProductsByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      response.send(`No such product with id: ${id} in database`);
      return;
    }
    pool.query(queries.removeProduct, [id], (error, result) => {
      if (error) throw error;
      response.send(
        `product with id: ${id} has succesfully removed from the database`
      );
    });
  });
};

module.exports = {
  getProducts,
  getProductsByID,
  addProduct,
  editProductDetails,
  removeProduct,
};
