const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/", controller.getProducts);
router.get("/:product_id", controller.getProductsByID);
router.post("/", controller.addProduct);
router.put("/:product_id", controller.editProductDetails);
router.delete("/:product_id", controller.removeProduct);

module.exports = router;
