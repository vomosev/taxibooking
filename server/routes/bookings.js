const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

// Route to create a new booking
router.post('/create', async (req, res) => {
  try {
    const booking = await bookingController.createBooking(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await bookingController.getAllBookings();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a specific booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await bookingController.getBookingById(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a booking by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBooking = await bookingController.updateBooking(req.params.id, req.body);
    if (updatedBooking) {
      res.status(200).json(updatedBooking);
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a booking by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await bookingController.deleteBooking(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Booking deleted successfully' });
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;