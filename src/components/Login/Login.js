import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h3 className='text-center pt-5'>Login</h3>

            <div className="form text-center">

                <form className='w-50  ps-5 ms-5 '>
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
        </div>
    );
};

export default Login;