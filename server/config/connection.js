require('dotenv').config()
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL, console.log(`Connected to MongoDB`)).catch(error => console.error('Error connecting to MongoDB', error))

module.exports = mongoose.connection;

