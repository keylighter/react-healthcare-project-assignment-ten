import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useAuth();

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid ">
                    <div>
                        <Link to="/home">
                            <a class="navbar-brand fw-bold fs-3" href="#">
                                <img src="https://www.pikpng.com/pngl/m/83-837250_medical-logo-png-medical-clinic-logo-png-clipart.png" alt="" width="30" height="24" class="d-inline-block align-text-top " />
                                Medico
                            </a>
                        </Link>

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="pe-5  collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/home">
                                <li className="nav-item">
                                    <a className="nav-link active fw-bold fs-5" aria-current="page" href="#">Home</a>
                                </li>
                            </Link>
                            <Link to="/services">
                                <li className="nav-item">
                                    <a className="nav-link fw-bold fs-5" href="#">Services</a>
                                </li>
                            </Link>
                            <Link to="/about">
                                <li className="nav-item">
                                    <a className="nav-link fw-bold fs-5" href="#">About Us</a>
                                </li>
                            </Link>
                            <Link to="/blog" >
                                <li className="nav-item">
                                    <a className="nav-link fw-bold fs-5" href="#">Blog</a>
                                </li>
                            </Link>

                            {
                                user.email ?
                                    <button className='nav-login' onClick={logOut}>log out</button>
                                    :
                                    <Link to="/register" >
                                        <li className="nav-item ">
                                            <a className="nav-link nav-login fw-bold fs-5" href="#">Book Now</a>
                                        </li>
                                    </Link>}


                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;