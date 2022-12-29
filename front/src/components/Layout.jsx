import React from 'react'

const Layout = (props) => {
  return (
    <>
        <div className='header'>
          <div className='col'>
              <a href="/" className='logo'>Muamar Zidan</a>
          </div>
          <div className='col'>
            <span className='name'>Penerimaan</span>
              <a href="/login" className='login'>Login</a>
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