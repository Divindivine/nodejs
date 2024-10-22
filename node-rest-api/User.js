const router = require("express").Router();
router.get("/", UserController.getAllUser)

const { DataTypes } = required("sequelize");
const { roles } = require("../../config");

const UserModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
};

module.exports = {
  initilalize: (sequelize) => {
    this.model = sequelize.define("user", UserModel);
  },

  createUser: (user) => {
    return this.model.create(user);
  },
};
