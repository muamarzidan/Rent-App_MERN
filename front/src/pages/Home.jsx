import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getAllCars } from "../redux/actions/actions";

const Home = () => {

    const {cars} = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    },[dispatch]);

    return (

        <Layout>
            <div className="slider">
                <div className="left">
                    <h1 className="title">Carbor Car Store</h1>
                </div>
                <div className="right">
                    <img src="./image/slider/avanza.png" alt="" />
                </div>
            </div>
            <div className="content">
                <div className="content-row">
                    <div className="content-groups">
                        {cars.map((car,) => {
                            return (
                                <div className="card">
                                    <div className="card-body">
                                        <img src={car.image ? car.image : "./image/car/avanza.png"} alt="" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-footer-top">
                                            <h3 className="car-title">{car.name}</h3>
                                            <hp className="car-price">({car.price}.toFixed(2))</hp>
                                        </div>
                                        <div className="card-footer-bottom">
                                            <button className="car-rent">Rental Sekarang</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {cars.length}
            </div>
        </Layout>
    )
}
  
export default Home; 