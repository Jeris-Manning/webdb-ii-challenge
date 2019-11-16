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

server.post('/', async (req, res)=>{
  try {

const newCar = await req.body;
const addCar = await Cars.insert(newCar);

res.status(200).json(addCar);

  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})


module.exports = server