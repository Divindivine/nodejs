const { DataTypes } = require("sequelize");
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
};

module.exports = {
  initialize: (sequelize) => {
    this.model = sequelize.define("users", UserModel);
  },
  createUser: (user) => {
    return this.model.create(user);
  },
  updateUser: (user) => {
    return this.model.update(user);
  },
};
