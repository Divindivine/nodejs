const { Router } = require("express");
const controller = require("./staffController");
const router = Router();

router.get("/", controller.getStaffs);          
router.post("/", controller.addStaff);
router.get("/:staffID", controller.getStaffByID);
router.put("/:staffID", controller.updateStaffDetails);
router.delete("/:staffID", controller.deleteStaff);

module.exports = router;
