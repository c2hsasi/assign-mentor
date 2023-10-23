import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  previousMentor: {
    type: Schema.Types.ObjectId,
    ref: "mentor",
  },
  currentMentor: {
    type: Schema.Types.ObjectId,
    ref: "mentor",
  },
});

const student = mongoose.model("student", studentSchema);

export default student;
