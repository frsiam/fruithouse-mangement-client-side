import React from 'react';
import { useParams } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import UpdateModal from '../UpdateModal/UpdateModal';
import './module.Inventory.css';

const Inventory = () => {
    const [inventories] = useInventories(`http://localhost:3000/data.json`);
    const { id } = useParams();
    console.log(typeof id);
    const singleInventory = inventories?.find(inventory => inventory._id === id);
    console.log(singleInventory)

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
                <UpdateModal />
                <button className="btn btn-success rounded-0 font-semibold">
                    Delivered
                </button>
            </div>
        </div>
    );
};

export default Inventory;