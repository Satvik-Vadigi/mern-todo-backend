const mongoose = require('mongoose');

const colors = require('colors');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL_LOCAL);
        console.log(`Connected to MongoDB Database: ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`MongoDB connection error: ${error.message}`.bgRed.white);
    }
};

module.exports = connectDB;