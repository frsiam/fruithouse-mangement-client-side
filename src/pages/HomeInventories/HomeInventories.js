import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Singleinventory from '../Singleinventory/Singleinventory';

const HomeInventories = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/fruits')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <>
            <div className='container grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto text-center  py-5'>
                {
                    inventories.slice(0, 6).map(inventory => <Singleinventory key={inventory._id} inventory={inventory} desc={inventory.description.slice(0, 100)} />)
                }
            </div>

            <div className='text-center'>
                <button onClick={() => navigate('/manageinventory')} className="btn btn-dark rounded-0">Manage Inventories</button>
            </div>
        </>
    );
};

export default HomeInventories;