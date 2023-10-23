import express from "express";

import {
  addStudent,
  assignMentor,
  getStudents,
  findpreMentor,
  multipleAssign,
} from "../Controllers/student.controller.js";

const router = express.Router();

router.post("/addStudent", addStudent);
router.post("/assignMentor", assignMentor);
router.post("/assign/allstudents", multipleAssign);
router.post("/previousMentor/:id", findpreMentor);
router.get("/mentor/getStudents/:id", getStudents);

export default router;
