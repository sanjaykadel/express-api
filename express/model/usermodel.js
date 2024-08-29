const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user schema
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        
    },
    email: {
        type: String,
        
        // unique: true
    },
    age: {
        type: Number,
        
    },
    city: [{
        type: Schema.Types.ObjectId,
        ref:"address"
        
    }],
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
