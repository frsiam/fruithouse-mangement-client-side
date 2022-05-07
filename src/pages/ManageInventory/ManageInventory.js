import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import { PlusCircleIcon } from '@heroicons/react/solid';

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate()

    axios.get('http://localhost:4000/fruits')
        .then((response) => setItems(response.data))

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:4000/fruit/${id}`
            axios({
                method: 'delete',
                url: url
            })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                        toast('Deleted Successfully !!!')
                    }
                })
        }
    }
    return (
        <div className="container my-3 min-h-screen">
            <h1 className='text-2xl text-center font-semibold'>Manage All Inventory Items</h1>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4'>
                {
                    items.map(item => <ManageInventoryItem key={item._id} item={item} handleDeleteItem={handleDeleteItem} />)
                }
            </div>
            <div className='text-center'>
                <button onClick={() => navigate('/additem')} className="btn btn-dark rounded-0">Add New Item <PlusCircleIcon className='text-white w-5 d-inline'></PlusCircleIcon></button>
            </div>
        </div>
    );
};

export default ManageInventory;