'use client';
import React, { useState } from 'react';

const BookingForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!pickupLocation || !dropoffLocation || !pickupTime) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupLocation,
          dropoffLocation,
          pickupTime,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      const data = await response.json();
      alert('Booking created successfully!');
      setPickupLocation('');
      setDropoffLocation('');
      setPickupTime('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="pickupLocation">Pickup Location:</label>
        <input
          type="text"
          id="pickupLocation"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="dropoffLocation">Dropoff Location:</label>
        <input
          type="text"
          id="dropoffLocation"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="pickupTime">Pickup Time:</label>
        <input
          type="datetime-local"
          id="pickupTime"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Create Booking</button>
    </form>
  );
};

export default BookingForm;
