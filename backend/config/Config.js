import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

export const connectDB = async () => {
  try {


    /*mongodb+srv://guldestehmedova2025:j4D9JUueDTZcaCer@cluster0.7tpzdtq.mongodb.net/*/
    await mongoose.connect(process.env.MONGO_URL); 
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};
