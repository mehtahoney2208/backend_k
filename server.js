const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const contactRouter = require('./routes/contact.routes');
const proRouter = require('./routes/pro.routes');
const hotelRouter = require('./routes/hotel.routes');
const userRoutes = require('./routes/user.routes'); // Fix here
const bookingRoutes = require('./routes/booking.routes');
const productRouter = require('./routes/product.routes')
const categoryRouter = require('./routes/category.routes')

const app = express();
const PORT = process.env.PORT || 5000;
app.use('/uploads',express.static('uploads'))
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/contact', contactRouter);
app.use('/api/pro', proRouter);
app.use('/api/hotel', hotelRouter);
app.use('/api/user', userRoutes);
app.use('/api/product',productRouter)
app.use('/api/category',categoryRouter)
app.use('/api/book', bookingRoutes);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
