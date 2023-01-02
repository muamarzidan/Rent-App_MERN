import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { getAllCars } from "../redux/actions/actions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from '../components/Layout';
import axios from "axios";

const Car = () => {

  const navigate = useNavigate();
  const [car, setCar] = useState([]);
  const parameter = useParams();
    const {carId} = parameter;

  useEffect(() => {
      if (!localStorage.getItem('userInfo')) {
          navigate('/login');
      }

      const ambilData = async () => {
        try {
          const result = await axios.get(`/api/cars/car/${carId}`);
          console.log(result.data);
          setCar(result.data);
        } catch (error) {
          console.log(error);
        }
      }
      ambilData();
    }, [carId, navigate]);

  

  return (
    <Layout>
      <div className="car container">
        <h3 className="car-title">Rental Kendaraan Sekarang</h3>
        <div className="car-row">
          <div className="car-col">
            {car.name}
          </div>
          <div className="car-col">

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Car;
