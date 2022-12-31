import React from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    toast.success('Logout success');
    window.location.reload();
    navigate('/login');
  }

  return (
    <>
        <div className='header'>
          <div className='col'>
              <a href="/" className='logo'>Muamar Zidan</a>
          </div>
          <div className='col'>
            <span className='name'>{userInfo?.username}</span>
            {userInfo ? (
              <span onClick={logoutHandler} className='logout'>Logout</span>
            ) : (
              <a href="/login" className='login'>Login</a>
            )}
          </div>
        </div>

        <div className='main'>
            {props.children}
        </div>

        <div className='footer'>
            <p>Muziro 2022</p>
        </div>
    </>
  )
}


export default Layout;