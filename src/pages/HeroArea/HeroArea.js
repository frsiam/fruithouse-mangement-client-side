import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroArea = () => {
    const navigate = useNavigate();
    return (
        <div className='row mx-auto py-3'>
            <div className="col-12 col-md-7 order-2 order-md-1">
                <img className='img-fluid w-100 h-75' src="https://i.ibb.co/BLhW22q/hero.jpg" alt="" />
            </div>
            <div className="col-12 col-md-5 order-1 order-md-2 pr-5 h-auto d-flex align-items-center">
                <div className='md:border-r-4 md:border-r-indigo-700'>
                    <h1 className='text-right mr-12 my-2 text-4xl font-bold'>
                        <span className='text-red-500'>Fruit House </span> Logistic
                    </h1>
                    <h1 className='text-right mr-12'>
                        <span className='text-2xl font-semibold font-mono text-teal-600'>Rental Services</span>
                    </h1>
                    <p className='text-justify mr-12 py-4 indent-10 leading-6'>Our warehouse is located at an area that is well-connected and easily accessible.Warehouse receiving operations are a critical part in maintaining the integrity of inventory systems and ensuring the availability of products for customers.</p>
                    <div className='text-right mr-12 mb-4'>
                        <button onClick={() => navigate('/additem')} className="btn ring-2 right-0 mr-10 my-2 ring-rose-400">Rent Now</button>
                        <button className="btn ring-2 right-0 my-2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;