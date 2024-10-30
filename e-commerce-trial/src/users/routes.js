const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/", controller.getUsers);
router.get("/:user_id", controller.getUserByID);
router.post("/", controller.addUser);
router.put("/:user_id", controller.updateUserDetails);
router.delete("/:user_id", controller.removeUser);

module.exports = router;
