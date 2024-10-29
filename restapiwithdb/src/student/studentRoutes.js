const { Router } = require("express");
const controller = require("./studentController");
const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:studentID", controller.getStudentByID);
router.put("/:studentID", controller.updateStudentDetails);
router.delete("/:studentID", controller.deleteStudent);

module.exports = router;

