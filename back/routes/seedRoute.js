import express from 'express';
import data from '../data_car.js';
import Cars from '../models/carsModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    try {
        await Cars.remove({});
        const createdCars = await Cars.insertMany(data.cars);
        res.send({createdCars});
    } catch (error) {
        console.log(error);
    }
});

export default seedRouter;