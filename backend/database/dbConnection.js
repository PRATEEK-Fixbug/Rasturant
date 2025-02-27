import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const dbConnection = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("MongoDB connection URI is missing in the environment variables.");
  }

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "RESTURANT",
    });
    console.log("Connected to database successfully!");
  } catch (err) {
    console.error(`Error connecting to database: ${err.message}`);
    process.exit(1); // Exit the process if the connection fails
  }
};