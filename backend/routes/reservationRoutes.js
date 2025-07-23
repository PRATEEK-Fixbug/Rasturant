const express = require("express");
const router = express.Router();
const { createReservation } = require("../controllers/reservationController");

router.post("/send", createReservation);

module.exports = router;
