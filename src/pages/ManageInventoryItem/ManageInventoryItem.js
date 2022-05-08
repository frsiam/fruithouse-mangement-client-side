import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const ManageInventoryItem = ({ item, handleDeleteItem }) => {
    const { _id, name, price, quantity, supplierName, email } = item;
    return (
        <div className='shadow-md border border-slate-800 px-2 md:px-4 py-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-100 duration-200'>

            <div className='d-flex my-3 justify-between'>
                <h1><span className='border-b-2 border-orange-500'>Name</span> : <span className='text-info font-semibold'>{name}</span></h1>
                <h1><span className='border-b-2 border-orange-500'>Price</span> : <span className='text-info font-semibold'>{price}</span></h1>
            </div>

            <div className='d-flex my-3 justify-between'>
                <h1><span className='border-b-2 border-orange-500'>Supplier</span> : <span className='text-primary font-semibold'>{supplierName}</span></h1>
                <h1><span className='border-b-2 border-orange-500'>Quantity</span>: <span className='text-primary font-semibold'>{quantity}</span></h1>
            </div>

            <div className="my-3">
                <h1> <span className='text-slate-300'>Added by</span> : <span className='text-secondary font-semibold'>{email}</span></h1>
            </div>

            <div className='d-flex my-3 justify-between'>
                <button onClick={() => handleDeleteItem(_id)} className="btn btn-danger border rounded-0 d-inline">
                    <div className='d-flex justify-between'>
                        <span className='me-2'>Delete</span><TrashIcon className='text-white w-5 d-inline'></TrashIcon>
                    </div>
                </button>
                <button className="btn btn-success border rounded-0 d-inline">
                    <div className="d-flex justify-between">
                        <span className='me-2'>Edit</span> <PencilAltIcon className='text-white w-4 d-inline'></PencilAltIcon>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ManageInventoryItem;