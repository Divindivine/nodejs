const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/users", controller.getUsers);
router.get("/products", controller.getProducts);
router.get("/orders", controller.getOrders);
router.delete("/users/:user_id", controller.removeUser);
router.delete("/products/:product_id", controller.removeProduct);
router.delete("/orders/:order_id", controller.removeOrder);

module.exports = router;
