import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoute.js';
import carsRouter from './routes/carsRoute.js';

mongoose.set('strictQuery', true);
const app  = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed/', seedRouter);
app.use('/api/cars/', carsRouter);

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    }).catch(err => {
        console.log(err);
    }
);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});