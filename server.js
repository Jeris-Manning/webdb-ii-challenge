const express = require('express');

const Cars = require('./data/carsDbActions');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const cars = await Cars.get();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server didn't work =(" });
  }
});

module.exports = server