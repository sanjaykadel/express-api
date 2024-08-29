const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  name: String,
  orderFromSun: Number,
  numberOfMoons: Number 
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;
