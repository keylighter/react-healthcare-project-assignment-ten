import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="header row d-flex  align-items-center justify-content-center">

                <div className="col-md-6">
                    <h1 className="title fw-bold text-white text-center">
                        We Care And Protect
                        <br /> Your Health.
                    </h1>
                    <p className="text-white text-center mt-3 fs-5 fw-bold">
                        We Provide The Best Healthcare Service In The Country . Considering The Quality And Ultimate Care
                    </p>

                </div>
                <div className="col-md-6">
                    <button className="mt-3 head-button me-3">About Us</button>

                    <button className="mt-3 head-button ms-3">Book Now</button>

                </div>
            </div>
        </div>
    );
};

export default Header;