const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Rating = sequelize.define('Rating', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Bookings',
      key: 'id',
    },
  },
  givenBy: {
    type: DataTypes.ENUM('passenger', 'driver'),
    allowNull: false,
  },
  givenTo: {
    type: DataTypes.ENUM('passenger', 'driver'),
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'ratings',
  timestamps: true,
});

module.exports = Rating;