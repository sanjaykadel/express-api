const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user schema
const addressSchema = new mongoose.Schema({

    zone: {
        type: String,
        
    },
    district: {
        type: String,
        ref:"user"
    },
    city: {
        type: String,
        
    }
});

// Create User model
const User = mongoose.model('address', addressSchema);

module.exports = User;
