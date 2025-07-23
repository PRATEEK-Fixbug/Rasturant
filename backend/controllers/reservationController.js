const Reservation = require("../models/Reservation");

exports.createReservation = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const reservation = new Reservation({ firstName, lastName, email, phone, date, time });
    await reservation.save();

    res.status(201).json({ message: "Reservation successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
