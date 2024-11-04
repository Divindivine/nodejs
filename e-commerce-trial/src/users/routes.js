const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/:user_id", controller.getUserByID);
router.post("/", controller.addUser);
router.put("/:user_id", controller.updateUserDetails);
router.post('/:user_id/:product_id', controller.addOrders);

module.exports = router;

