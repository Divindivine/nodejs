const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/", controller.getProducts);
router.get("/:product_id", controller.getProductsByID);
router.post("/", controller.addProduct);

module.exports = router;