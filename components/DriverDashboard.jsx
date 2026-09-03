import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DriverDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/bookings/available');
        setBookings(response.data);
      } catch (err) {
        setError('Failed to fetch bookings. Please try again later.');
      }
    };

    fetchBookings();
  }, []);

  const handleSelectBooking = async (bookingId) => {
    try {
      await axios.post(`/api/bookings/select/${bookingId}`);
      setBookings((prevBookings) => prevBookings.filter((b) => b.id !== bookingId));
    } catch (err) {
      setError('Failed to select booking. Please try again.');
    }
  };

  return (
    <div>
      <h1>Driver Dashboard</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <p>Pickup: {booking.pickupLocation}</p>
            <p>Dropoff: {booking.dropoffLocation}</p>
            <button onClick={() => handleSelectBooking(booking.id)}>Select Booking</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverDashboard;