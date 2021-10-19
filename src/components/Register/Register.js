import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h3 className='text-center'>Register Now</h3>
            <p className='text-center'>Make an account and book your appointment at your convenient.</p>

            <div className="form d-flex align-items-center justify-content-center">

                <form className='w-50  ps-5 ms-5'>
                    <div className="row mb-3">
                        <label for="name" className="col-sm-2 col-form-label fw-bold ">Name</label>
                        <div className="col-sm-10">
                            <input type="name" className="form-control w-50" id="" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-2 col-form-label fw-bold ">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control w-50" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label fw-bold">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control w-50" id="inputPassword3" />
                        </div>
                    </div>


                    <button type="submit" className="btn button-submit mb-5">Register Booking</button>

                    <p >Already Registered? Then go to <Link to='/login'>Login</Link></p>
                </form>

            </div>
        </div>
    );
};

export default Register;