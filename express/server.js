const express = require("express");
const connectDB = require('./db/db');
const userRouter = require('./routes/user');
const planetRouter = require('./routes/sample.route'); 

const app = express();

require('dotenv').config()

connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/user", userRouter);
app.use("/planets", planetRouter);

// Default route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the API" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
