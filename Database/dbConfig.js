// import mongoose from "mongoose";

// export function connectDB() {
//   const params = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };
//   try {
//     mongoose.connect(process.env.MONGODBCONNECTIONSTRING, params);
//     console.log("***connected to the MongoDB***");
//   } catch (error) {
//     console.log("Mongodb connection error");
//   }
// }
// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGODBCONNECTIONSTRING;
    const connection = await mongoose.connect(mongoURL);

    console.log("***connected to the MongoDB***");
    return connection;
  } catch (error) {
    console.error("Error in connection", error);
  }
};

export default connectDB;
