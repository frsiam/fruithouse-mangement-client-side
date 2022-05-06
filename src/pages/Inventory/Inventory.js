import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import UpdateModal from '../UpdateModal/UpdateModal';
import './module.Inventory.css';

const Inventory = () => {
    const [inventories] = useInventories(`http://localhost:3000/data.json`);
    const { id } = useParams();
    const navigate = useNavigate();
    const singleInventory = inventories?.find(inventory => inventory._id === id);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={singleInventory?.img} alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <h1>{singleInventory?.name}</h1>
                    <h1>{singleInventory?._id}</h1>
                    <h1>{singleInventory?.price}</h1>
                    <h1>{singleInventory?.quantity}</h1>
                    <h1>{singleInventory?.supplierName}</h1>
                    <p>{singleInventory?.description}</p>
                </div>
            </div>
            <div className="my-3 d-flex justify-evenly">
                <UpdateModal id={id}></UpdateModal>
                <div className='text-center'>
                    <button onClick={() => navigate('/manageinventory')} className="btn bg-fuchsia-600 text-white font-semibold rounded-0">Manage Inventories</button>
                </div>
                <button className="btn btn-success rounded-0 font-semibold">
                    Delivered
                </button>
            </div>
        </div>
    );
};

export default Inventory;