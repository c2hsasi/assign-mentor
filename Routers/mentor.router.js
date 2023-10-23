import express from "express";

import { addMentor } from "../Controllers/mentor.controller.js";

const router = express.Router();

router.post("/addMentor", addMentor);

export default router;
