import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running....YAY');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
