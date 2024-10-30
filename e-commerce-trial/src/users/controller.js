const { response } = require("express");
const pool = require("../../database");
const queries = require("./query");

const getUsers = (request, response) => {
  pool.query(queries.getUsers, (error, result) => {
    if (error) throw error;
    response.send(result.rows);
  });
};

const getUserByID = (request, response) => {
  const id = request.params.user_id;
  pool.query(queries.getUserByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      response.send(`No such user with id: ${id}`);
      return;
    }
    response.send(result.rows);
  });
};

const addUser = (request, response) => {
  const { user_name, address, age, dob } = request.body;
  pool.query(queries.checkNameExists, [user_name], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      pool.query(
        queries.addUser,
        [user_name, address, age, dob],
        (error, result) => {
          if (error) throw error;
          response.send(`user: ${user_name} has successfully added`);
        }
      );
      return;
    }
    response.send(`username ${user_name} already existing`);
  });
};

const updateUserDetails = (request, response) => {
  const id = request.params.user_id;
  pool.query(queries.getUserByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      response.send(`no user with id: ${id}`);
      return;
    }
    const { user_name, address, age, dob } = request.body;
    pool.query(
      queries.updateUserDetails,
      [user_name, address, age, dob, id],
      (error, result) => {
        if (error) throw error;
        response.send(`user with id: ${id} has updated succesfully`);
      }
    );
  });
};

const removeUser = (request, response) => {
  const id = request.params.user_id;
  pool.query(queries.getUserByID, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      response.send(`no user with id: ${id}`);
      return;
    }
    pool.query(queries.removeUser, [id], (error, result) => {
      if (error) throw error;
      response.send(
        `user with id: ${id} has removed successfully from the database`
      );
    });
  });
};

module.exports = {
  getUsers,
  getUserByID,
  addUser,
  updateUserDetails,
  removeUser,
};
