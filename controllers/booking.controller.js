const Booking = require('../models/booking.model');

const createBooking = async (req, res) => {
  try {
    const {firstName, lastName, email, roomType, numberOfGuests, specialRequests} = req.body
    const booking = new Booking({firstName, lastName, email, roomType, numberOfGuests, specialRequests} );
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBooking,
};
