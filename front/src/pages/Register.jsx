import React, { useEffect, useState }from "react";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfrimPassword] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch({
            type: 'LOADING',
            payload: true
        });

        if (password !== confirmPassword) {
            toast.error('Password not match');
            return;
        }

        try {
            await axios.post('/api/users/register', {
                username,
                password
            });

            toast.success('Register success');
            dispatch({
                type: 'LOADING',
                payload: false
            });
            navigate('/login');
        } catch (error) {
            console.log(error);
            toast.error('Register failed');
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
            <div className="form-container" >
                <div className="form-groups">
                    <form className="form" onSubmit={submitHandler}>
                        <h3 className="form-title">
                            Register 
                        </h3>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} className="input" id="username" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="input" id="password" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rpassword">Confirmation</label>
                            <input type="password" onChange={(e) => setConfrimPassword(e.target.value)} className="input" id="rpassword" required></input>
                        </div>
                        <div className="form-group">
                            <button className="rent-now">Register</button>
                        </div>
                        <div className="form-group2">
                            <p>Have account? <a href="/login" className="form-link">Here for login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Register;