import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getAllCars } from "../redux/actions/actions";

const Home = () => {

    const {cars} = useSelector(state => state.reducer);
    const {loading} = useSelector(state => state.loading);
    
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
                    <h1 className="topCar">Top Mobil</h1>
                </div>
                <div className="content-row">

                </div>
                <div className="content-row">
                    <div className="content-groups">
                        {cars.map((car) => {
                            return (
                                <div className="card">
                                    <div className="card-body">
                                        <img className="img-cars" src={car.image ? car.image : "./image/car/avanza.png"} alt="{car.name}" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-footer-top">
                                            <p className="car-title">{car.name}</p>
                                            <p className="car-price">Per Hari: Rp.{(car.priceDay).toFixed(3)}</p>
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