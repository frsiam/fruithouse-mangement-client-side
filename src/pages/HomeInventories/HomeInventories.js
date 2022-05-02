import React from 'react';
import useInventories from '../../hooks/useInventories';
import Singleinventory from '../Singleinventory/Singleinventory';

const HomeInventories = () => {
    const [inventories] = useInventories();
    if (inventories) {
        inventories.length = 6;
    }
    return (
        <>
            <div className='container grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto text-center  py-5'>
                {
                    inventories.map(inventory => <Singleinventory key={inventory._id} inventory={inventory} desc={inventory.description.slice(0, 100)} />)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-dark rounded-0">Manage Inventories</button>
            </div>
        </>
    );
};

export default HomeInventories;