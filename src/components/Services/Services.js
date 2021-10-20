import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='pb-5'>
            <h2 className='text-center pt-5 pb-5 fw-bold '>Our Services</h2>
            <div className='row justify-content-center ps-5 ms-5  gy-4 '>
                {/* mapping services */}
                {
                    services?.map(service => (
                        <div className='col-md-5'>
                            <Service
                                key={service?.id}
                                service={service}
                            ></Service>
                        </div>
                    )
                    )
                }

            </div>

        </div>
    );
};

export default Services;