const request = require('supertest');
const express = require('express');
const bookingController = require('../../server/controllers/bookingController');
const Booking = require('../../server/models/Booking');

jest.mock('../../server/models/Booking');

const app = express();
app.use(express.json());
app.post('/bookings', bookingController.createBooking);
app.get('/bookings/:id', bookingController.getBookingById);
app.get('/bookings', bookingController.getAllBookings);

describe('Booking Controller', () => {
  describe('createBooking', () => {
    it('should create a new booking and return it', async () => {
      const newBooking = { passengerId: 1, driverId: 2, pickupLocation: 'A', dropoffLocation: 'B' };
      Booking.create.mockResolvedValue(newBooking);

      const response = await request(app)
        .post('/bookings')
        .send(newBooking);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(newBooking);
      expect(Booking.create).toHaveBeenCalledWith(newBooking);
    });

    it('should return 500 if there is an error creating the booking', async () => {
      Booking.create.mockRejectedValue(new Error('Database error'));

      const response = await request(app)
        .post('/bookings')
        .send({ passengerId: 1, driverId: 2, pickupLocation: 'A', dropoffLocation: 'B' });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to create booking' });
    });
  });

  describe('getBookingById', () => {
    it('should return a booking if found', async () => {
      const booking = { id: 1, passengerId: 1, driverId: 2, pickupLocation: 'A', dropoffLocation: 'B' };
      Booking.findByPk.mockResolvedValue(booking);

      const response = await request(app).get('/bookings/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(booking);
      expect(Booking.findByPk).toHaveBeenCalledWith('1');
    });

    it('should return 404 if booking is not found', async () => {
      Booking.findByPk.mockResolvedValue(null);

      const response = await request(app).get('/bookings/999');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Booking not found' });
    });
  });

  describe('getAllBookings', () => {
    it('should return all bookings', async () => {
      const bookings = [
        { id: 1, passengerId: 1, driverId: 2, pickupLocation: 'A', dropoffLocation: 'B' },
        { id: 2, passengerId: 3, driverId: 4, pickupLocation: 'C', dropoffLocation: 'D' }
      ];
      Booking.findAll.mockResolvedValue(bookings);

      const response = await request(app).get('/bookings');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(bookings);
      expect(Booking.findAll).toHaveBeenCalled();
    });

    it('should return 500 if there is an error retrieving bookings', async () => {
      Booking.findAll.mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/bookings');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to retrieve bookings' });
    });
  });
});