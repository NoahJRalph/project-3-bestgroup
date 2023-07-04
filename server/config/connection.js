require('dotenv').config()
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL, console.log(`Connected to MongoDB Atlas`) || 'mongodb://127.0.0.1:27017/brainsync', console.log(`Connected to MongoDB Atlas`)).catch(error => console.error('Error connecting to MongoDB', error))

module.exports = mongoose.connection;

