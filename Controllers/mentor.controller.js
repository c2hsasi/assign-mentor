import mentor from "../Models/mentor.schema.js";

//Adding mentor to the database

export const addMentor = async (req, res) => {
  const emailFound = await mentor.findOne({ email: req.body.email }); //email matching
  if (emailFound) {
    return res.status(400).send("Email already exist");
  }
  const idFound = await mentor.findOne({ mentorId: req.body.mentorId }); //id matching
  if (idFound) {
    return res.status(400).send("Id already assigned ");
  }
  const createMentor = new mentor({
    mentorId: req.body.mentorId,
    name: req.body.name,
    email: req.body.email,
  });
  try {
    await createMentor.save();
    return res
      .status(201)
      .send({ message: "Mentor added sucessfully", AddedMentor: createMentor });
  } catch (error) {
    console.error("Error creating mentor:", error);
    res.status(500).json({ message: "Error in creating mentor", error });
  }
};


