const Rating = require('../models/Rating');
const Booking = require('../models/Booking');
const User = require('../models/User');

// Function to rate a driver
exports.rateDriver = async (req, res) => {
  try {
    const { bookingId, driverRating } = req.body;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.passengerId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized to rate this driver' });
    }

    const rating = await Rating.create({
      bookingId,
      driverId: booking.driverId,
      passengerId: req.user.id,
      driverRating,
    });

    res.status(201).json(rating);
  } catch (error) {
    console.error('Error rating driver:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to rate a passenger
exports.ratePassenger = async (req, res) => {
  try {
    const { bookingId, passengerRating } = req.body;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.driverId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized to rate this passenger' });
    }

    const rating = await Rating.create({
      bookingId,
      driverId: req.user.id,
      passengerId: booking.passengerId,
      passengerRating,
    });

    res.status(201).json(rating);
  } catch (error) {
    console.error('Error rating passenger:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get ratings for a user
exports.getUserRatings = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const ratings = await Rating.findAll({
      where: {
        [Op.or]: [
          { driverId: userId },
          { passengerId: userId }
        ]
      }
    });

    res.status(200).json(ratings);
  } catch (error) {
    console.error('Error fetching user ratings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};