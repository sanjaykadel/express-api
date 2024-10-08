const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Database connected');
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;