const epxress = require("express");
const router = epxress.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /orders",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /orders",
  });
});

router.get("/:orderID", (req, res, next) => {
  const id = req.params.orderID;
  res.status(200).json({
    message: "Order details",
    id: id,
  });
});

router.delete("/:orderID", (req, res, next) => {
  const id = req.params.orderID;
  res.status(200).json({
    message: "Order has been deleted",
    id: id,
  });
});

module.exports = router;
