import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './module.Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [reload, setIsReload] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:4000/fruit/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [reload])

    // Update restock quantity and sent to database 
    const handleUpdateItem = e => {
        e.preventDefault();
        const newQuantity = e.target.quantity.value;
        const { quantity } = item;

        const updatedQuantity = { quantity: (parseFloat(quantity) + parseFloat(newQuantity)).toString() };

        fetch(`http://localhost:4000/fruit/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedQuantity),
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!reload)
                console.log('Success:', data);
                toast('Restocked Successfully !!!');
            })

        e.target.reset()
    }
    // When clicked delivered  the quantity is decrease by one and update database
    const handleDelivered = () => {
        const { quantity } = item;
        const updatedQuantity = { quantity: (parseFloat(quantity) - 1).toString() };

        fetch(`http://localhost:4000/fruit/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedQuantity),
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!reload)
                console.log('Success:', data);
                toast('Delevered Successfully !!!');
            })
    }

    return (
        <div className='bg-orange-200'>
            <div className="container py-5 bg-slate-200">
                <div className="text-center mb-10">
                    <h1 className='text-4xl font-bold'>Manage information of <span className='text-cyan-800'>{item?.name}</span></h1>
                </div>
                <div className="row container">
                    <div className="col-md-6 col-12">
                        <img className='w-3/4 d-block text-center rounded-xl' src={item?.img} alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <h1 className='text-xl text-pink-500 font-bold my-3'>{item?.name}</h1>
                        <h1 className='my-1 text-amber-600 font-semibold text-lg'>
                            <span className='mr-3 text-slate-800'>Price :</span>
                            ${item?.price}
                        </h1>
                        <p className='my-1'>
                            <span className='text-slate-500 font-semibold'>Available stock :
                            </span>
                            {
                                item?.quantity > 0 ? <span className='ml-3 text-xl text-teal-800'>{item?.quantity}</span> : <span className='ml-3 text-danger text-2xl'>{'Out of stock'}</span>
                            }
                        </p>
                        <h1 className='font-semibold my-1'>
                            <span>
                                Supplier-Name :
                            </span>
                            <span className='text-red-500 ml-3'>
                                {item?.supplierName}
                            </span>
                        </h1>
                        <p className='text-justify mt-4 leading-loose indent-8'>
                            {item?.description}
                        </p>
                    </div>
                </div>
                <div className="my-3 row w-100">
                    <div className='col-12 col-md-6 text-center'>
                        <form onSubmit={handleUpdateItem} className="d-flex my-3 md:w-3/4 lg:w-1/2 mx-auto">
                            <input name='quantity' className="form-control me-2" type="text" placeholder="Quntity" aria-label="Search" />
                            <button className="btn btn-outline-dark rounded-0">Restock</button>
                        </form>
                    </div>
                    <div className='col-12 col-md-3 text-center my-3'>
                        <button onClick={() => navigate('/manageinventory')} className="btn bg-fuchsia-600 text-white font-semibold rounded-0">Manage Inventories</button>
                    </div>
                    <div className="col-12 col-md-3 my-3 text-center">
                        <button onClick={handleDelivered} className="btn btn-success rounded-0 font-semibold ">
                            Delivered
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;