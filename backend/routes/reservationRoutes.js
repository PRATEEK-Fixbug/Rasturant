import express from 'express';
import {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservationStatus,
  deleteReservation,
  getAvailableTimeSlots
} from '../controllers/reservationController.js';

const router = express.Router();

// Public routes
router.post('/create', createReservation);
router.get('/available-slots/:date', getAvailableTimeSlots);

// Admin routes (in production, these should be protected with authentication)
router.get('/all', getAllReservations);
router.get('/:id', getReservationById);
router.patch('/:id/status', updateReservationStatus);
router.delete('/:id', deleteReservation);

export default router;

