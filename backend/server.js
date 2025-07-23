const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const reservationRoutes = require("./routes/reservationRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// ✅ Updated CORS to match your frontend port
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Routes
app.use("/reservation", reservationRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
