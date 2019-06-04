import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.png';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
   <Link to='/' className='nav-link'> <img src={logo} alt="header nav bar"/></Link> 
   <h2 className='text-white '>What-<span className='text-warning'>I</span>-DO <span className='text-warning'>?</span></h2>
  <button  className="navbar-toggler bg-warning" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon " ></span>
  </button>
  <div  className="collapse navbar-collapse " id="navbarText">
    <ul className="navbar-nav ml-auto text-center">
    <Link to='/' className='nav-link mx-1  text-warning'><i className="fas fa-home mr-2"></i>Home<span className="sr-only">(current)</span></Link> 
                <Link to='/services' className='nav-link mx-1  text-warning'><i className="fas fa-book mr-2"></i>Services</Link> 
                <Link to='/about' className='nav-link mx-1  text-warning'> <i className="fas fa-user-circle mr-2"></i>About</Link> 
    </ul>
  </div>
</nav>
 
    )
}

export default Nav;