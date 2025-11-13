const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
    description: { type: String },
    image: { type: String }
});

module.exports = mongoose.model('Hotel', hotelSchema);
