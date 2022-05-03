import React from 'react';
import { Link } from 'react-router-dom';

const Singleinventory = ({ inventory, desc }) => {
    const { name, img, quantity, price, description, supplierName, _id } = inventory;
    return (
        <div className='shadow-md p-2'>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-2">
                <div className='md:col-span-4'>
                    <img className='img-fluid h-100' src={img} alt="" />
                </div>
                <div className='text-justify md:col-span-6'>
                    <h1 className='text-xl font-bold mb-2'>{name}</h1>
                    <h1 className='fw-bold my-2'>Price: <span className='text-orange-500'>{price}</span></h1>
                    <h1 className='fw-bold my-2'>Quantity: <span className='text-pink-500'>{quantity}</span></h1>
                    <h1 className='font-bold mt-2'>Supplier Name: <span className='text-blue-600'>{supplierName}</span></h1>
                    <p className='mb-2'>{desc}...</p>
                    <Link to={`inventory/${_id}`}>
                        <button className="btn btn-info rounded-0 w-100">Manage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Singleinventory;