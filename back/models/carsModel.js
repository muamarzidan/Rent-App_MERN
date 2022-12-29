import mongoose from 'mongoose';

const carsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priceDay: {
        type: Number,
        required: true
    },
    carType: {
        type: String,
        required: true
    },
    bookedTimeSlots: {
        type: [String],
        required: true
    },
    statusRent: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
});

const Cars = mongoose.model('Cars', carsSchema);
export default Cars;