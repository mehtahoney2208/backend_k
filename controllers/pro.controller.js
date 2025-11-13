const Pro = require('../models/pro.model');

const createPro = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        const newPro = new Pro({ name, description, price, image });
        await newPro.save();
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error creating product', error: err });
    }
};

// Add other product-related functions here

module.exports = { createPro };
