import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Register.css';
import { faGithubSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';

import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import initializeAuthentication from "./../Firebase/firebase.init";



const Register = () => {

    // email registration firebase 
    const [user, setUser] = useState({});
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const auth = getAuth();


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const emailUser = result.user;
                setUser(emailUser);

            })
    }


    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from;

    const handleGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleGithub = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_uri);
            })

    }


    const handleRegistration = () => {

    }

    return (
        <div>
            <h3 className='text-center pt-5'>Register Now</h3>
            <p className='text-center'>Make an account and book your appointment at your convenient.</p>

            <div className="form d-flex align-items-center justify-content-center">

                <form onSubmit={handleRegistration} className='w-50  ps-5 ms-5'>
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
            <p className='text-center fw-bold fs-5'>you may get on touch with</p>

            <div className='text-center pb-5 d-flex align-items-center justify-content-center '>
                <button onClick={handleGoogle} className='icon fw-bold me-2'> <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>
                <button onClick={handleGithub} className='icon fw-bold'> <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></button>
            </div>
        </div >
    );
};

export default Register;