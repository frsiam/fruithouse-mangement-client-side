import React from 'react';
import useInventories from '../../hooks/useInventories';
import Singleinventory from '../Singleinventory/Singleinventory';

const HomeInventories = () => {
    const [inventories] = useInventories();
    if (inventories) {
        inventories.length = 6;
    }
    return (
        <div className='container'>
            <h1>Home Inventory section : {inventories.length}</h1>
            {
                inventories.map(inventory => <Singleinventory key={inventory._id} inventory={inventory} />)
            }
        </div>
    );
};

export default HomeInventories;