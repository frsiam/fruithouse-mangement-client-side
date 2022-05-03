import React from 'react';
import { useParams } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';

const Inventory = () => {
    const [inventories] = useInventories(`http://localhost:3000/data.json`);
    const { id } = useParams();
    console.log(typeof id);
    const singleInventory = inventories?.find(inventory => inventory._id === id);
    console.log(singleInventory)

    return (
        <div>
            <h1>Name: {singleInventory?.name}</h1>
            <h1>Quantity: {singleInventory?.quantity}</h1>
            <h1>id: {singleInventory?._id}</h1>
            <h1>Id: {id}</h1>
        </div>
    );
};

export default Inventory;