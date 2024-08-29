const Planet = require('../model/samplemodel');

exports.getPlanets = async (req, res) => {
    try {
        const planets = await Planet.find();
        res.json(planets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPlanet = async (req, res) => {
    try {
        const planetData = req.body;
        const existingPlanet = await Planet.findOne({ name: planetData.name });
        if (existingPlanet) {
            throw new Error('A planet with the same name already exists');
        }
        if (!planetData.name) {
            planetData.name = "1x67";
        }

        const planet = new Planet(planetData);
        const savedPlanet = await planet.save();

        res.status(201).json(savedPlanet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPlanetById = async (req, res) => {
    try {
        const planet = await Planet.findById(req.params.id);
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        res.json(planet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePlanet = async (req, res) => {
    try {
        const planet = await Planet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        res.json(planet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePlanet = async (req, res) => {
    try {
        const planet = await Planet.findByIdAndDelete(req.params.id);
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        res.json({ message: 'Planet deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
