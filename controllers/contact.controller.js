const Contact = require('../models/contact.model');

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully', contact });
  } catch (error) {
    console.error('Error saving contact', error);
    res.status(400).json({ message: 'Error saving contact', error });
  }
};

module.exports = { createContact };
