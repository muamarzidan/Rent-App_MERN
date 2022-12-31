import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch({
            type: 'LOADING',
            payload: true
        });

        try {
            const {data} = await axios.post('/api/users/login', {
                username,
                password
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('Login success');
            dispatch({
                type: 'LOADING',
                payload: false
            });
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error('Login failed');
            dispatch({
                type: 'LOADING',
                payload: false
            });
        }
    }

    useEffect(() => {
        if (localStorage.getItem('userInfo')) {
            localStorage.getItem('userInfo');
            navigate('/');
        }
    });

    return (
        <Layout>
            <div className="form-container">
                <div className="form-groups">
                    <form className="form" onSubmit={submitHandler}>
                        <h3 className="form-title">
                            Login 
                        </h3>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="input" onChange={(e) => setUsername(e.target.value)} id="username" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="input" onChange={(e) => setPassword(e.target.value)} id="password" required></input>
                        </div>
                        <div className="form-group">
                            <button className="rent-now">Login</button>
                        </div>
                        <div className="form-group">
                            <p>Dont have account? <a href="/register" className="form-link">Register first</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login;