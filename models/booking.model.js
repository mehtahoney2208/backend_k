const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  roomType: String,
  numberOfGuests: Number,
  specialRequests: String,
}, {timestamps : true});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
