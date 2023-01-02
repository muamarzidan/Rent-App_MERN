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

carsRouter.get('/car/:carId', async ( req, res) => {
    try {
        const car = await Cars.findById({_id:req.params.carId});
        if(car) {
            res.send(car);
        } else {
            res.status(404).send({message: 'Car not found'});
        }
    } catch (error) {
        console.log(error);
    }
});

export default carsRouter;
