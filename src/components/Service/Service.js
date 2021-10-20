import React from 'react';
import './Service.css'

const Service = ({ service }) => {

    const { name, image, description } = service;

    // console.log(name, image, description);


    return (
        <div>
            <div className="card pb-3 w-75  " >
                <img src={image} className="card-img-top service-img" alt="..." />
                <div className="Nameard-body row justify-content-center">
                    <h5 className="card-title fw-bold pt-3 w-75">{name}</h5>
                    <p className="card-text ms-3 me-3"> {description} </p>

                    <button className=' w-25 detail-button fw-bold'>See Detail</button>
                </div>

            </div>
        </div>
    );
};

export default Service;