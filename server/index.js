require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Database connection established'))
	.catch(err => console.log(err));

const app = express();

app.listen(process.env.PORT || 5000, () => {
	console.log('Backend server is running');
});
