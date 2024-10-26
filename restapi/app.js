const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoutes = require("./api/routers/products");
const orderRoutes = require("./api/routers/orders");

app.use(morgan("dev"));
const bodyParser = require("body-parser");

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "oi oi gotcha",
  });
});

app.use("/products", productRoutes);
app.use("/order", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
