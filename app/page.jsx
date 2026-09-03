'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import DriverDashboard from '../components/DriverDashboard';
import RatingForm from '../components/RatingForm';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Welcome to the Taxi Booking App</h1>
          <p>Book a ride, rate your experience, and enjoy the journey!</p>
        </section>
        <section>
          <h2>Book a Ride</h2>
          <BookingForm />
        </section>
        <section>
          <h2>Driver Dashboard</h2>
          <DriverDashboard />
        </section>
        <section>
          <h2>Rate Your Experience</h2>
          <RatingForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;