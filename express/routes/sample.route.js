const express = require('express');
const planetController = require('../controller/planet.controller');

const app = express();
app.use(express.json());

// Routes
app.post('/', planetController.createPlanet);
app.get('/', planetController.getPlanets);
app.get('/:id', planetController.getPlanetById);
app.put('/:id', planetController.updatePlanet);
app.delete('/:id', planetController.deletePlanet);

module.exports = app;