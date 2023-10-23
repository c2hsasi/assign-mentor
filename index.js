import express from "express";
import cors from "cors";
import connectDB from "./Database/dbConfig.js";
import mentorRouter from "./Routers/mentor.router.js";
import studentRouter from "./Routers/student.router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());

app.use("/api/mentors", mentorRouter);
app.use("/api/students", studentRouter);

connectDB();

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
