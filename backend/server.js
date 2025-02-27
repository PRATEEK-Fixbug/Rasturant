import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow these methods
  allowedHeaders: "Content-Type,Authorization", // Allow these headers
};

app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Handle preflight requests
app.options("*", cors(corsOptions)); // Enable preflight requests for all routes

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "RESTURANT", // Replace with your database name
  })
  .then(() => {
    console.log("Connected to database successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
  });

// Reservation route
app.post("/reservation/send", (req, res) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  console.log("Received reservation data:", { firstName, lastName, email, phone, date, time });

  // Save the reservation to the database (add your logic here)
  // For now, just send a success response
  res.status(200).json({ message: "Reservation successful" });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server has started at port ${PORT}`);
});