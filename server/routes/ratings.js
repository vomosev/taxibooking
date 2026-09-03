const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

// Route to rate a driver
router.post('/rate-driver', async (req, res) => {
  try {
    const { bookingId, driverRating } = req.body;
    const result = await ratingController.rateDriver(bookingId, driverRating);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to rate a passenger
router.post('/rate-passenger', async (req, res) => {
  try {
    const { bookingId, passengerRating } = req.body;
    const result = await ratingController.ratePassenger(bookingId, passengerRating);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;