import { faGithubSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from;

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h3 className='text-center pt-5'>Login</h3>

            <div className="form d-flex align-items-center justify-content-center">

                <form onSubmit='' className='w-50  ps-5 ms-5 '>
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


                    <button type="submit" className="btn button-submit mb-5">Sign in</button>

                    <p >New in Medico ? Please <Link to='/register'>Register</Link></p>
                </form>

            </div>
            <p className='text-center fw-bold fs-5'>you may get on touch with</p>

            <div className='text-center pb-5 d-flex align-items-center justify-content-center '>
                <button onClick={handleGoogleLogin} className='icon fw-bold me-2'> <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>
                <button className='icon fw-bold'> <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Login;