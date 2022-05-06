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
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={item?.img} alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <h1>{item?.name}</h1>
                    <h1>{item?._id}</h1>
                    <h1>{item?.price}</h1>
                    <h1>{item?.quantity}</h1>
                    <h1>{item?.supplierName}</h1>
                    <p>{item?.description}</p>
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
    );
};

export default Inventory;