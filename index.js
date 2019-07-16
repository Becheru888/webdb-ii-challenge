const express = require('express');
const server = express();
const Cars = require('./data/carsQueries')

server.use(express.json())


server.get('/', async (req, res) =>{
    try {
        const cars = await Cars.get()
        res.status(200).json(cars)
    }catch(error){
        res.status(500).json('No Cars in the Date Base!')
    }
})

server.post('/', async (req, res) =>{
    try{
        const newCar = await Cars.createCar(req.body)
        res.status(201).json(newCar)
    }catch(error){
        res.status(500).json('Failed to create car')
    }

})


server.listen(4000, () => {
    console.log('listening on 4000');
  });