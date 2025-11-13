const Hotel = require('../models/hotel.model');

const createHotel = async (req, res) => {
    try {
        const { name, location, rating, description, image } = req.body;
        const newHotel = new Hotel({ name, location, rating, description, image });
        await newHotel.save();
        res.status(201).json({ message: 'Hotel created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error creating hotel', error: err });
    }
};

// Add other hotel-related functions here

module.exports = { createHotel };
