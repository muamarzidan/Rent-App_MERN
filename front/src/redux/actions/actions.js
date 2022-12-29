import axios from 'axios';

export const getAllCars = () => async dispatch => {
    dispatch({type: 'LAODING', payload: true});

    try {
        const cars = await axios.get('/api/cars/getall');
        console.log(cars);
        dispatch({type: 'GET_ALL_CARS', payload: cars.data});
        dispatch({type: 'LAODING', payload: false});
    } catch (error) {
        console.log(error);
        dispatch({type: 'LAODING', payload: false});
    }
};