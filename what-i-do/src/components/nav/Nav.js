import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.png';

function Nav() {
    return (
        <nav className='navbar navbar-expandsm bg-dark d-flex justify-content-space-around' >
          <div className='navbar-brand text-dark d-flex align-items-center justify-content-space-between'>
              <img src={logo} />
          <h1 className='text-white '>What <span className='text-warning'>I</span> DO <span className='text-warning'>?</span></h1>
          </div>
            <div className=''>
                <a href='/' className='mx-1 text-warning'>Home</a> 
                <span className='text-white'>I</span>
                <a href='/register' className='mx-1 text-warning'>Register</a>
            </div>
        </nav>
    )
}

export default Nav;