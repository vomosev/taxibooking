const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  passengerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  driverId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pickupLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dropoffLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fare: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'completed', 'cancelled'),
    defaultValue: 'pending',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'bookings',
  timestamps: true,
});

module.exports = Booking;