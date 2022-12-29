import express from 'express';
import Cars from '../models/carsModel.js';

const carsRouter = express.Router();

carsRouter.get('/getall', async ( req, res) => {
    try {
        const cars = await Cars.find();
        res.send(cars);
    } catch (error) {
        console.log(error);
    }
})

export default carsRouter;
