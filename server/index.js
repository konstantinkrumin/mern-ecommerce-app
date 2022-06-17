require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Database connection established'))
	.catch(err => console.log(err));

const app = express();

app.use(express.json());

app.get('/api/healthcheck', () => {
	console.log('server is working!');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log('Backend server is running');
});
