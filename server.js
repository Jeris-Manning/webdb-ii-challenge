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

server.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const carId = await Cars.getById(id);

    res.status(200).json(carId);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.post('/', async (req, res) => {
  try {
    const newCar = await req.body;
    const addCar = await Cars.add(newCar);
    res.status(200).json(addCar);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

server.delete('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
   const carId = await Cars.remove(id);
    res.status(200).json(`Post ${carId} successfully removed.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = server;


