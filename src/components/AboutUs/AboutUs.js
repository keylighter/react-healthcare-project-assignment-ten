import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className='offer-container'>
                <div className='row justify-content-center align-items-center pt-5 pb-5 '>

                    <h3 className='pb-5 fw-bold text-center text-white'>We Offer</h3>

                    <div className='col-md-2'>
                        <div className="card offer-card" >
                            <div className="card-body">
                                <h5 className="card-title">Expert Doctors</h5>

                                <p className="card-text">Our all doctors are very much expert so the are great at their field</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="card offer-card" >
                            <div className="card-body">
                                <h5 className="card-title">Technical Supports</h5>

                                <p className="card-text">We have great technical support team who runs all the fuctions of out hospital flawlessly</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="card offer-card" >
                            <div className="card-body">
                                <h5 className="card-title">Personalized Care</h5>

                                <p className="card-text">Each of our patients are most valuable to us . Our goal is to provide good healt with ultimate care</p>

                            </div>
                        </div>
                    </div>



                </div>
            </div>


            <div className='consult-container'>

                <div>
                    <h1 className='pb-5 pt-5 text-center '>Our Consultants</h1>
                </div>
                <div className='row ps-5 pt-5 pb-5 gy-5 '>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top service-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Dr.Amy Lee</h5>
                                <p className="card-text fw-bold">Cardiologist  </p>


                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="card-img-top service-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Dr.Elton John</h5>
                                <p className="card-text fw-bold">Surgery Specialist </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="card-img-top service-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Dr.Enumale Krito</h5>
                                <p className="card-text fw-bold"> Oncologist </p>

                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="card-img-top service-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Dr. Juana Dee</h5>
                                <p className="card-text fw-bold"> Orthopedics </p>


                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/5327914/pexels-photo-5327914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="card-img-top service-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Dr.Mark Xoshe</h5>
                                <p className="card-text fw-bold">Padeatrics  </p>


                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="card-img-top service-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Dr.Mia Kostova</h5>
                                <p className="card-text fw-bold">Pharmasist</p>

                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="card-img-top service-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Dr.Michele Douge</h5>
                                <p className="card-text fw-bold"> Gynocologist </p>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;