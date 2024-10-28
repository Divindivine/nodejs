const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products",
  });
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };

  res.status(201).json({
    message: "Handling POST requests to /products",
    createdProduct: product,
  });
});

router.post("/:productsID", (req, res, next) => {
  const id = req.params.productsID;
  if (id === "special") {
    res.status(200).json({
      message: "you discovered the special id",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "you passed an id",
      id: id,
    });
  }
});

router.patch("/:productID", (req, res, next) => {
  res.status(200).json({
    message: "Updated product!",
  });
});

router.delete("/:productID", (req, res, next) => {
  res.status(200).json({
    message: "Product has been deleted",
  });
});

module.exports = router;
