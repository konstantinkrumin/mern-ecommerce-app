require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/user');

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Database connection established'))
	.catch(err => console.log(err));

const app = express();

app.use(express.json());

app.get('/api/healthcheck', () => {
	console.log('server is working!');
});

app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log('Backend server is running');
});
