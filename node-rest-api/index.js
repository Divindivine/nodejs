const Express = require("express");
const app = Express();
const cors = require("cors");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");

const { port } = require("./config");
const PORT = process.env.PORT || port;

const AuthorizationRoutes = require("./authorization/routes");
const UserRoutes = require("./users/routes");
const ProductRoutes = require("./products/routes");

const UserModel = require("./common/models/User");
const ProductModel = require("./common/models/Product");

app.use(morgan("tiny"));
app.use(cors());

app.use(Express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.db",
});

UserModel.initialise(sequelize);
ProductModel.initialise(sequelize);

sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialised!!");
    app.use("/", AuthorizationRoutes);
    app.use("/user", UserRoutes);
    app.use("/product", ProductRoutes);

    app.listen(PORT, () => {
      console.log("Server Listening on PORT:", port);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });

const UserRoutes = require("./users/routes");
app.use("/user", UserRoutes);