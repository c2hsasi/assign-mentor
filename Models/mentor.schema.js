import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
  mentorId: {
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
});

const mentor = mongoose.model("mentor", mentorSchema);

export default mentor;
