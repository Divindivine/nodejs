const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:studentID", controller.getSingleStudent);
router.delete("/:studentID", controller.deleteStudent);


module.exports = router;
